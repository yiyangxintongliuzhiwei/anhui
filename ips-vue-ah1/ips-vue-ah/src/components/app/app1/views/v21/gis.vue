<!--gis-->
<template>
  <!--<view-template class="a1-v21-gis" :interval="30" @interval="loadData">-->
  <view-template class="a1-v21-gis">
    <div class="v21-gis-horn">
      <div class="v21-gis-horn-div v21-gis-horn-1"></div>
      <div class="v21-gis-horn-div v21-gis-horn-2"></div>
      <div class="v21-gis-horn-div v21-gis-horn-3"></div>
      <div class="v21-gis-horn-div v21-gis-horn-4"></div>
    </div>
    <div class="v21-gis-subtitle">
      <marquee behavior="alternate" direction="right" scrollamount="1">
        {{subtitle}}
      </marquee>
    </div>
    <div class="v21-gis-main" id="v21_gis_main"></div>
    <div class="v21-gis-legend">
      <div class="gis-legend-1">
        <div class="legend-1-1"
             v-for="(item, key) in lcf"
             @click="switchMarker(key)"
             :class="{'active': item['flag']}">
          <div></div>
          <div :style="`background-image: url('${item['icon']}');`"></div>
          <div>{{item['name']}}</div>
        </div>
      </div>
      <div class="gis-legend-2 region-btn"
           @click="regionSwitch(1)"
           :class="{'active': regionActive === 1}">全省</div>
      <div class="gis-legend-3 region-btn"
           @click="regionSwitch(2)"
           :class="{'active': regionActive === 2}">重保</div>
    </div>
  </view-template>
</template>

<script>
  import 'leaflet/dist/leaflet.css';
  import './v21.scss';

  import L from 'leaflet';

  let tfGsm = require('../../assets/img/v21/v21-1-3.png');
  let tfLte = require('../../assets/img/v21/v21-1-4.png');
  let tfTd = require('../../assets/img/v21/v21-1-5.png');
  let tdGsm = require('../../assets/img/v21/v21-1-6.png');
  let tdTd = require('../../assets/img/v21/v21-1-7.png');
  let tdLte = require('../../assets/img/v21/v21-1-8.png');

  export default {
    props: {},
    data() {
      return {
        regionActive: 1, // 1 全省; 2 重保
        map: null,
        subtitle: '障信息及地震的应急保障信息这是一条关于台风和天气以及地震的应急保障信息',
        lcf: {
          'c01': {'name': '2G退服基站', 'flag': true, 'icon': tfGsm, 'z_index': 600, 'layer': null, 'dataId': ['rc0011', 'rc0032'], 'data': []},
          'c03': {'name': '3G退服基站', 'flag': false, 'icon': tfTd, 'z_index': 600, 'layer': null, 'dataId': ['rc0012', 'rc0033'], 'data': []},
          'c02': {'name': '4G退服基站', 'flag': false, 'icon': tfLte, 'z_index': 600, 'layer': null, 'dataId': ['rc0013', 'rc0034'], 'data': []},
          'c04': {'name': '2G停电基站', 'flag': false, 'icon': tdGsm, 'z_index': 600, 'layer': null, 'dataId': ['rc0014', 'rc0035'], 'data': []},
          'c05': {'name': '3G停电基站', 'flag': false, 'icon': tdTd, 'z_index': 600, 'layer': null, 'dataId': ['rc0015', 'rc0036'], 'data': []},
          'c06': {'name': '4G停电基站', 'flag': false, 'icon': tdLte, 'z_index': 600, 'layer': null, 'dataId': ['rc0016', 'rc0037'], 'data': []}
        },
        popup: L.popup({closeButton: false, className: 'gis-popup'}).setContent('<div id="float-tips"></div>'),
        // gisLayer: L.tileLayer('http://mt3.google.cn/vt/lyrs=y@162000000&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}')
        gisLayer: L.tileLayer(`http://${config.baseMapUrl}/map/tile{s}/?l=2&x={x}&y={y}&z={z}`, { subdomains: '01234' })
      }
    },
    computed: {
      dataType() {
        return this.$store.state.dataType;
      }
    },
    mounted() {
      this.initMap();
      this.loadGisData();
    },
    methods: {
      initMap() {
        this.map = L.map('v21_gis_main', {
          center: [31.8098, 117.2406],
//          center: [23.11904, 113.31711],
          zoom: 6,
          attributionControl: false,
          zoomControl: false,
          doubleClickZoom: false,
          layers: this.gisLayer
        });
        this.map.addEventListener('click', (obj) => {
          console.log(JSON.stringify([obj.latlng.lat, obj.latlng.lng]) + ',');
          console.log(this.map.getCenter());
          console.log(this.map.getZoom());
        });
      },
      loadGisData() {
        // 打点查询
        for (let site in this.lcf) {
          if (this.lcf[site]['flag']) this.loadMarkerData(site);
        }
        // 指标查询
        this.loadInfo();
      },
      loadInfo() {
        // 应急保障信息
        this.$http.indi.get('rc0017', {}, (res) => {
          if (!res.data || !res.data.data || res.data.data.length <= 0) {
            return;
          }
          try {
            let result = res.data.data[0];
            this.subtitle = result['KPI_VALUE'];
          } catch (error) {
            console.error(`rc0017 int has error:`, error);
          }
        });
      },
      loadData(url, params, callback) {
        this.$http.indi.get(url, params, (res) => {
          if (!res.data || !res.data.data || res.data.data.length <= 0) {
            return;
          }
          try {
            callback(res.data.data);
          } catch (error) {
            console.error(`${url} int has error:`, error);
          }
        });
      },
      /* 打点勾选 */
      switchMarker(type) {
        this.lcf[type]['flag'] = !this.lcf[type]['flag'];
        if (this.lcf[type]['flag']) {
          this.loadMarkerData(type);
        } else {
          this.clearLayer(type);
        }
      },
      /* 加载打点数据 */
      loadMarkerData(type) {
        this.clearLayer(type);
        this.loadData(this.lcf[type]['dataId'][this.dataType - 1], null, (data) => {
          for (let i = data.length - 1; i >= 0; i--) {
            if (!data[i]['LONGITUDE'] || isNaN(data[i]['LONGITUDE']) || !data[i]['LATITUDE'] || isNaN(data[i]['LATITUDE'])) {
              data.splice(i, 1);
            }
          }
          this.lcf[type]['data'] = data;
          this.setMarkerLayer(type, data);
        });
      },
      /* 设置打点图层 */
      setMarkerLayer(type, data) {
        let myConfig = this.lcf[type];
        // 初始化图层
        if (!myConfig['layer']) {
          myConfig['layer'] = L.layerGroup().addTo(this.map);
        }
        this._updateMarkerData(type, data);
      },
      /* 更新打点数据 */
      _updateMarkerData(type, validData) {
        let myConfig = this.lcf[type];
        if (myConfig['layer']) {
          myConfig['layer'].clearLayers();
        }
        let zIndex = myConfig['z_index'];
        let iconUrl = myConfig['icon'];
        let iconSize = [31, 35];
        for (let i = 0; i < validData.length; i++) {
          let site = validData[i];

          let icon = L.icon({iconUrl: iconUrl, iconSize: iconSize});

          let attributes = {type: type};

          let marker = L.marker([site['LATITUDE'], site['LONGITUDE']], {
            icon: icon,
            zIndexOffset: zIndex,
            attributes: attributes
          }).addTo(myConfig['layer']);
          marker.addEventListener('mouseover', (obj) => {
            let tooltips = `名称(${site['OBJECT_CLASS']})：${site['NE_LABEL']}
                            <br>告警标题：${site['ALARM_TITLE_TEXT']}
                            <br>时间：${site['START_TIME']}`;
            let toolWidth = 300;
            let toolBottom = 20;
            let toolHeight = 150;

            this.popup.setLatLng(obj.latlng);
            this.popup.openOn(this.map);
            document.getElementById('float-tips').innerHTML = tooltips;
            document.getElementsByClassName('gis-popup')[0]['style'].height = `${toolHeight}px`;
            document.getElementsByClassName('gis-popup')[0]['style'].width = `${toolWidth}px`;
            document.getElementsByClassName('gis-popup')[0]['style'].left = `-${toolWidth / 2}px`;
            document.getElementsByClassName('gis-popup')[0]['style'].bottom = `${toolBottom}px`;
          });
          marker.addEventListener('mouseout', () => {
            this.popup._close();
          });
        }
      },
      /* 清除打点 */
      clearLayer(type) {
        let myConfig = this.lcf[type];
        if (myConfig['layer']) {
          try {
            myConfig['layer'].clearLayers();
          } catch (e) {
            myConfig['layer'].onRemove(this.map);
            myConfig['layer'] = null;
          }
        }
      },
      /* 区域切换 */
      regionSwitch(flag) {
        this.regionActive = flag;
        this.$store.state.dataType = flag;
      }
    },
    watch: {
      dataType() {
        this.loadGisData();
      }
    },
    components: {},
    beforeDestroy() {
    }
  }
</script>
