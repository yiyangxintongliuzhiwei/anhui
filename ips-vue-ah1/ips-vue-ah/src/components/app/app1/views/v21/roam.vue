<!--漫游-->
<template>
  <!--<view-template class="a1-v21-roam" :interval="30" @interval="loadData">-->
  <view-template class="a1-v21-roam world">
    <div class="v21-roam-legend">
      <div class="roam-legend-div roam-legend-1"
           @click="roamCut(2)"
           :class="{'active': roamType === 2}">外省<br/>漫游</div>
      <div class="roam-legend-div roam-legend-2"
           @click="roamCut(1)"
           :class="{'active': roamType === 1}">国际<br/>漫游</div>
    </div>
    <div class="v21-roam-chart" id="v21_roam_chart" @click="getPoints"></div>
  </view-template>
</template>

<script>
  import './v21.scss';

  import eCharts from 'echarts/lib/echarts';
  import '../../../../../../static/data/world';
  import '../../../../../../static/data/china';

  export default {
    props: {},
    data() {
      return {
        roamType: 1, // 1 国际漫游; 2 外省漫游
        keyList: ['rc0019', 'rc0018'], // 国际漫游-漫入top10; 外省漫游-漫入top10
        chart: null,
        option1: {
          tooltip: {
            trigger: 'item',
            formatter: '{a}<br/>{b}: {c}',
            padding: 10,
            backgroundColor: 'rgba(50, 50, 50, 0.9)'
          },
          geo: {
            map: 'world',
            zoom: 1.1,
            regions: [
              {
                name: 'China',
                itemStyle: {
                  normal: {
                    areaColor: '#FF8857',
                    color: '#000',
                    borderColor: '#ED3900',
                    borderWidth: 1
                  }
                }
              }
            ],
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: '#67E4F6',
                areaColor: '#203364',
                borderColor: '#257EE1',
                borderWidth: 0.5
              },
              emphasis: {
                color: '#0A8FCA'
              }
            }
          },
          visualMap: {
            show: false,
            min: 0,
            max: 200,
            calculable: true,
            inRange: {
              color: ['#32F477', '#00FCFC', '#FDF065', '#FC7632', '#CE333F']
            },
            textStyle: {
              color: '#fff'
            }
          },
          series: [
            {
              type: 'lines',
              name: '漫入',
              coordinateSystem: 'geo',
              effect: {
                show: true,
                period: 6,
                trailLength: 0.6,
                symbol: 'circle',
                color: '#FFFFFF',
                symbolSize: 3
              },
              markPoint: {
                symbol: 'circle',
                symbolSize: 6,
                itemStyle: {
                  normal: {
                    color: '#FFFFFF'
                  }
                },
                data: [{
                  name: '',
                  x: 783,
                  y: 267
                }]
              },
              lineStyle: {
                normal: {
                  width: 0,
                  curveness: 0.2
                }
              },
              zlevel: 1,
              animation: false,
              data: [{
                name: '英国',
                value: 200,
                coords: [[-0.05, 51.36], [117.44, 31.44]]
              }, {
                name: '瑞典',
                value: 135,
                coords: [[18.03, 59.20], [117.44, 31.44]]
              }, {
                name: '巴西',
                value: 65,
                coords: [[-51.18, -12.03], [117.44, 31.44]]
              }]
            },
            {
              type: 'lines',
              name: '漫入',
              coordinateSystem: 'geo',
              effect: {
                show: true,
                period: 6,
                trailLength: 0.1,
                symbol: 'circle',
                symbolSize: 2
              },
              lineStyle: {
                normal: {
                  width: 0.1,
                  opacity: 1,
                  curveness: 0.2
                }
              },
              zlevel: 2,
              animation: false,
              data: [{
                name: '英国',
                value: 200,
                coords: [[-0.05, 51.36], [117.44, 31.44]]
              }, {
                name: '瑞典',
                value: 135,
                coords: [[18.03, 59.20], [117.44, 31.44]]
              }, {
                name: '巴西',
                value: 65,
                coords: [[-51.18, -12.03], [117.44, 31.44]]
              }]
            },
            {
              name: '漫入',
              type: 'scatter',
              coordinateSystem: 'geo',
              zlevel: 3,
              tooltip: {
                trigger: 'item',
                formatter(params) {
                  return params.seriesName + '<br/>' + params.name + ' : ' + params.value[2];
                }
              },
              rippleEffect: {
                brushType: 'stroke'
              },
              animation: false,
              symbolSize: 8,
              label: {
                normal: {
                  show: true,
                  position: 'bottom',
                  formatter: '{b}',
                  fontSize: 14,
                  fontFamily: 'Microsoft YaHei',
                  color: '#d6e5ff'
                },
                emphasis: {
                  show: false
                }
              },
              data: [{
                name: '英国',
                value: [-0.05, 51.36, 200]
              }, {
                name: '瑞典',
                value: [18.03, 59.20, 135]
              }, {
                name: '巴西',
                value: [-51.18, -12.03, 65]
              }]
            }
          ]
        },
        option2: {
          tooltip: {
            trigger: 'item',
            formatter: '{a}<br/>{b}: {c}',
            padding: 10,
            backgroundColor: 'rgba(50, 50, 50, 0.9)'
          },
          geo: {
            map: 'china',
            zoom: 1.1,
            regions: [
              {
                name: '安徽',
                itemStyle: {
                  normal: {
                    areaColor: '#FF8857',
                    color: '#000',
                    borderColor: '#ED3900',
                    borderWidth: 1
                  }
                }
              }
            ],
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: '#67E4F6',
                areaColor: '#203364',
                borderColor: '#2683E8',
                borderWidth: 0.8
              },
              emphasis: {
                color: '#0A8FCA'
              }
            }
          },
          visualMap: {
            show: false,
            min: 0,
            max: 200,
            calculable: true,
            inRange: {
              color: ['#32F477', '#00FCFC', '#FDF065', '#FC7632', '#CE333F']
            },
            textStyle: {
              color: '#fff'
            }
          },
          series: [
            {
              type: 'lines',
              name: '漫入',
              coordinateSystem: 'geo',
              effect: {
                show: true,
                period: 6,
                trailLength: 0.6,
                symbol: 'circle',
                color: '#FFFFFF',
                symbolSize: 3
              },
              markPoint: {
                symbol: 'circle',
                symbolSize: 6,
                itemStyle: {
                  normal: {
                    color: '#FFFFFF'
                  }
                },
                data: [{
                  name: '',
                  x: 656,
                  y: 394
                }]
              },
              lineStyle: {
                normal: {
                  width: 0,
                  curveness: 0.2
                }
              },
              zlevel: 1,
              animation: false,
              data: [
                {
                  name: '上海',
                  value: 200,
                  coords: [[121.4648, 31.2891], [117.44, 31.44]]
                }, {
                  name: '兰州',
                  value: 135,
                  coords: [[103.5901, 36.3043], [117.44, 31.44]]
                }, {
                  name: '黑龙江',
                  value: 65,
                  coords: [[127.9688, 45.368], [117.44, 31.44]]
                }
              ]
            },
            {
              type: 'lines',
              name: '漫入',
              coordinateSystem: 'geo',
              effect: {
                show: true,
                period: 6,
                trailLength: 0.1,
                symbol: 'circle',
                symbolSize: 2
              },
              lineStyle: {
                normal: {
                  width: 0.1,
                  opacity: 1,
                  curveness: 0.2
                }
              },
              zlevel: 2,
              animation: false,
              data: [
                {
                  name: '上海',
                  value: 200,
                  coords: [[121.4648, 31.2891], [117.44, 31.44]]
                }, {
                  name: '兰州',
                  value: 135,
                  coords: [[103.5901, 36.3043], [117.44, 31.44]]
                }, {
                  name: '黑龙江',
                  value: 65,
                  coords: [[127.9688, 45.368], [117.44, 31.44]]
                }
              ]
            },
            {
              name: '漫入',
              type: 'scatter',
              coordinateSystem: 'geo',
              zlevel: 3,
              tooltip: {
                trigger: 'item',
                formatter(params) {
                  return params.seriesName + '<br/>' + params.name + ' : ' + params.value[2];
                }
              },
              rippleEffect: {
                brushType: 'stroke'
              },
              animation: false,
              symbolSize: 8,
              label: {
                normal: {
                  show: true,
                  position: 'bottom',
                  formatter: '{b}',
                  fontSize: 14,
                  fontFamily: 'Microsoft YaHei',
                  color: '#d6e5ff'
                },
                emphasis: {
                  show: false
                }
              },
              data: [
                {
                  name: '上海',
                  value: [121.4648, 31.2891, 200]
                }, {
                  name: '兰州',
                  value: [103.5901, 36.3043, 135]
                }, {
                  name: '黑龙江',
                  value: [127.9688, 45.368, 65]
                }
              ]
            }
          ]
        },
        geoCoordMap: {
          '上海': [121.4648, 31.2891],
          '东莞': [113.8953, 22.901],
          '东营': [118.7073, 37.5513],
          '中山': [113.4229, 22.478],
          '临汾': [111.4783, 36.1615],
          '临沂': [118.3118, 35.2936],
          '丹东': [124.541, 40.4242],
          '丽水': [119.5642, 28.1854],
          '乌鲁木齐': [87.9236, 43.5883],
          '新疆': [87.9236, 43.5883],
          '佛山': [112.8955, 23.1097],
          '保定': [115.0488, 39.0948],
          '兰州': [103.5901, 36.3043],
          '甘肃': [103.5901, 36.3043],
          '包头': [110.3467, 41.4899],
          '北京': [116.4551, 40.2539],
          '北海': [109.314, 21.6211],
          '南京': [118.8062, 31.9208],
          '江苏': [118.8062, 31.9208],
          '南宁': [108.479, 23.1152],
          '广西': [108.479, 23.1152],
          '南昌': [116.0046, 28.6633],
          '江西': [116.0046, 28.6633],
          '南通': [121.1023, 32.1625],
          '厦门': [118.1689, 24.6478],
          '台州': [121.1353, 28.6688],
          '合肥': [117.29, 32.0581],
          '安徽': [117.29, 32.0581],
          '呼和浩特': [111.4124, 40.4901],
          '内蒙古': [111.4124, 40.4901],
          '咸阳': [108.4131, 34.8706],
          '哈尔滨': [127.9688, 45.368],
          '黑龙江': [127.9688, 45.368],
          '唐山': [118.4766, 39.6826],
          '嘉兴': [120.9155, 30.6354],
          '大同': [113.7854, 39.8035],
          '大连': [122.2229, 39.4409],
          '天津': [117.4219, 39.4189],
          '太原': [112.3352, 37.9413],
          '山西': [112.3352, 37.9413],
          '威海': [121.9482, 37.1393],
          '宁波': [121.5967, 29.6466],
          '宝鸡': [107.1826, 34.3433],
          '宿迁': [118.5535, 33.7775],
          '常州': [119.4543, 31.5582],
          '广州': [113.5107, 23.2196],
          '广东': [113.5107, 23.2196],
          '廊坊': [116.521, 39.0509],
          '延安': [109.1052, 36.4252],
          '张家口': [115.1477, 40.8527],
          '徐州': [117.5208, 34.3268],
          '德州': [116.6858, 37.2107],
          '惠州': [114.6204, 23.1647],
          '成都': [103.9526, 30.7617],
          '四川': [103.9526, 30.7617],
          '扬州': [119.4653, 32.8162],
          '承德': [117.5757, 41.4075],
          '拉萨': [91.1865, 30.1465],
          '西藏': [91.1865, 30.1465],
          '无锡': [120.3442, 31.5527],
          '日照': [119.2786, 35.5023],
          '昆明': [102.9199, 25.4663],
          '云南': [102.9199, 25.4663],
          '杭州': [119.5313, 29.8773],
          '浙江': [119.5313, 29.8773],
          '枣庄': [117.323, 34.8926],
          '柳州': [109.3799, 24.9774],
          '株洲': [113.5327, 27.0319],
          '武汉': [114.3896, 30.6628],
          '湖北': [114.3896, 30.6628],
          '汕头': [117.1692, 23.3405],
          '江门': [112.6318, 22.1484],
          '沈阳': [123.1238, 42.1216],
          '辽宁': [123.1238, 42.1216],
          '沧州': [116.8286, 38.2104],
          '河源': [114.917, 23.9722],
          '泉州': [118.3228, 25.1147],
          '泰安': [117.0264, 36.0516],
          '泰州': [120.0586, 32.5525],
          '济南': [117.1582, 36.8701],
          '山东': [117.1582, 36.8701],
          '济宁': [116.8286, 35.3375],
          '海口': [110.3893, 19.8516],
          '海南': [110.3893, 19.8516],
          '淄博': [118.0371, 36.6064],
          '淮安': [118.927, 33.4039],
          '深圳': [114.5435, 22.5439],
          '清远': [112.9175, 24.3292],
          '温州': [120.498, 27.8119],
          '渭南': [109.7864, 35.0299],
          '湖州': [119.8608, 30.7782],
          '湘潭': [112.5439, 27.7075],
          '滨州': [117.8174, 37.4963],
          '潍坊': [119.0918, 36.524],
          '烟台': [120.7397, 37.5128],
          '玉溪': [101.9312, 23.8898],
          '珠海': [113.7305, 22.1155],
          '盐城': [120.2234, 33.5577],
          '盘锦': [121.9482, 41.0449],
          '石家庄': [114.4995, 38.1006],
          '河北': [114.4995, 38.1006],
          '福州': [119.4543, 25.9222],
          '福建': [119.4543, 25.9222],
          '秦皇岛': [119.2126, 40.0232],
          '绍兴': [120.564, 29.7565],
          '聊城': [115.9167, 36.4032],
          '肇庆': [112.1265, 23.5822],
          '舟山': [122.2559, 30.2234],
          '苏州': [120.6519, 31.3989],
          '莱芜': [117.6526, 36.2714],
          '菏泽': [115.6201, 35.2057],
          '营口': [122.4316, 40.4297],
          '葫芦岛': [120.1575, 40.578],
          '衡水': [115.8838, 37.7161],
          '衢州': [118.6853, 28.8666],
          '西宁': [101.4038, 36.8207],
          '青海': [101.4038, 36.8207],
          '西安': [109.1162, 34.2004],
          '陕西': [109.1162, 34.2004],
          '贵阳': [106.6992, 26.7682],
          '贵州': [106.6992, 26.7682],
          '连云港': [119.1248, 34.552],
          '邢台': [114.8071, 37.2821],
          '邯郸': [114.4775, 36.535],
          '郑州': [113.4668, 34.6234],
          '河南': [113.4668, 34.6234],
          '鄂尔多斯': [108.9734, 39.2487],
          '重庆': [107.7539, 30.1904],
          '金华': [120.0037, 29.1028],
          '铜川': [109.0393, 35.1947],
          '银川': [106.3586, 38.1775],
          '宁夏': [106.3586, 38.1775],
          '镇江': [119.4763, 31.9702],
          '长春': [125.8154, 44.2584],
          '吉林': [125.8154, 44.2584],
          '长沙': [113.0823, 28.2568],
          '湖南': [113.0823, 28.2568],
          '长治': [112.8625, 36.4746],
          '阳泉': [113.4778, 38.0951],
          '青岛': [120.4651, 36.3373],
          '韶关': [113.7964, 24.7028]
        }
      }
    },
    computed: {
    },
    mounted() {
      this.initChart();
      this.loadData();
    },
    methods: {
      initChart() {
        this.chart = eCharts.init(document.getElementById('v21_roam_chart'), {});
        this.chart.setOption(this.option1);
      },
      getPoints(ev) {
        var c;
        c = [
          ev.offsetX,
          ev.offsetY
        ];
        console.log(this.chart.convertFromPixel({
          seriesIndex: 0
        }, c));
      },
      roamCut(type) {
        if (this.roamType === type) {
          return;
        }
        this.roamType = type;
        this.loadData();
      },
      loadData() {
        let option;
        let ahPoint = [117.44, 31.44];
        if (this.roamType === 1) {
          option = this.option1;
        } else if (this.roamType === 2) {
          option = this.option2;
        }
        option.series[0].data = [];
        option.series[1].data = [];
        option.series[2].data = [];
        this.$http.indi.get(this.keyList[this.roamType - 1], {}, (res) => {
          if (!res.data || !res.data.data || res.data.data.length <= 0) {
            return;
          }
          try {
            let result = res.data.data;
            let kpiValue = [];
            if (this.roamType === 1) {
              for (let item of result) {
                kpiValue.push(item['KPI_VALUE']);
                // 值为0 不显示连线
                if (item['KPI_VALUE'] > 0) {
                  option.series[0].data.push({
                    name: item['NE_NAME'],
                    value: item['KPI_VALUE'],
                    coords: [[item['LON'], item['LAT']], ahPoint]
                  });
                } else {
                  option.series[0].data.push({
                    name: item['NE_NAME'],
                    value: item['KPI_VALUE'],
                    coords: [ahPoint, ahPoint]
                  });
                }
                if (item['KPI_VALUE'] > 0) {
                  option.series[1].data.push({
                    name: item['NE_NAME'],
                    value: item['KPI_VALUE'],
                    coords: [[item['LON'], item['LAT']], ahPoint]
                  });
                } else {
                  option.series[1].data.push({
                    name: item['NE_NAME'],
                    value: item['KPI_VALUE'],
                    coords: [ahPoint, ahPoint]
                  });
                }
                // 始终显示连线
                // option.series[0].data.push({
                //   name: item['NE_NAME'],
                //   value: item['KPI_VALUE'],
                //   coords: [[item['LON'], item['LAT']], ahPoint]
                // });
                // option.series[1].data.push({
                //   name: item['NE_NAME'],
                //   value: item['KPI_VALUE'],
                //   coords: [[item['LON'], item['LAT']], ahPoint]
                // });
                option.series[2].data.push({
                  name: item['NE_NAME'],
                  value: [item['LON'], item['LAT'], item['KPI_VALUE']]
                });
              }
            }
            if (this.roamType === 2) {
              for (let item of result) {
                kpiValue.push(item['KPI_VALUE']);
                let toPoint = this.geoCoordMap[item['NE_NAME']];
                option.series[0].data.push({
                  name: item['NE_NAME'],
                  value: item['KPI_VALUE'],
                  coords: [toPoint, ahPoint]
                });
                option.series[1].data.push({
                  name: item['NE_NAME'],
                  value: item['KPI_VALUE'],
                  coords: [toPoint, ahPoint]
                });
                option.series[2].data.push({
                  name: item['NE_NAME'],
                  value: [toPoint[0], toPoint[1], item['KPI_VALUE']]
                });
              }
            }
            option.visualMap.min = Math.min.apply(null, kpiValue);
            option.visualMap.max = Math.max.apply(null, kpiValue);
          } catch (error) {
            console.error(`${this.keyList[this.roamType - 1]} int has error:`, error);
          } finally {
            this.chart.clear();
            this.chart.setOption(option);
          }
        });
      }
    },
    watch: {
    },
    components: {},
    beforeDestroy() {
      if (this.chart) {
        this.chart.dispose();
      }
    }
  }
</script>
