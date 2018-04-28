<!--停电&退服基站-->
<template>
  <view-template class="a1-v31" :interval="30" @interval="loadData">
    <view-template :interval="5" @interval="initTimer1"></view-template>
    <div class="title">停电&退服基站</div>
    <div class="list">
      <div class="bg"></div>
      <div class="content" @click="showPop('a01')">
        <div class="index">2G<br/>退服基站</div>
        <div class="index-num">
          <counter :data="num1" :config="config1"></counter>
        </div>
      </div>
      <div class="content" @click="showPop('a02')">
        <div class="index">3G<br/>退服基站</div>
        <div class="index-num">
          <counter :data="num2" :config="config1"></counter>
        </div>
      </div>
      <div class="content" @click="showPop('a03')">
        <div class="index">4G<br/>退服基站</div>
        <div class="index-num">
          <counter :data="num3" :config="config1"></counter>
        </div>
      </div>
    </div>
    <div class="list list2">
      <div class="bg"></div>
      <div class="content" @click="showPop('a04')">
        <div class="index">2G<br/>停电基站</div>
        <div class="index-num">
          <counter :data="num4" :config="config1"></counter>
        </div>
      </div>
      <div class="content" @click="showPop('a05')">
        <div class="index">3G<br/>停电基站</div>
        <div class="index-num">
          <counter :data="num5" :config="config1"></counter>
        </div>
      </div>
      <div class="content" @click="showPop('a06')">
        <div class="index">4G<br/>停电基站</div>
        <div class="index-num">
          <counter :data="num6" :config="config1"></counter>
        </div>
      </div>
    </div>
    <div class="popUp" v-if="activeFlag" @click.stop.self="closePop">
      <div class="popUp-main">
        <!-- 全省 -->
        <div class="list1" v-show="rangeFlag">
          <div class="list-title">
            <div>地市名称</div>
            <div>基站名称</div>
            <div>告警发生时间</div>
            <div>基站类型</div>
            <div>告警标题</div>
            <div>经度</div>
            <div>纬度</div>
          </div>
          <div class="list-content">
            <div class="list-line" v-for="(item, index) in listData1" :key="index" :style="`top: ${((index - carouselNum1) >= 0 ? (index - carouselNum1) : (listLen1 + index - carouselNum1))* 48}px; opacity: ${((index - carouselNum1) >= 0 ? (index - carouselNum1) : (listLen1 + index - carouselNum1))* 48 < 432 ? 1 : 0};`">
              <div @mousemove="titleShow(item.REGION_NAME, $event)" @mouseout="titleViewShow = false">{{item.REGION_NAME}}</div>
              <div @mousemove="titleShow(item.NE_LABEL, $event)" @mouseout="titleViewShow = false">{{item.NE_LABEL}}</div>
              <div @mousemove="titleShow(item.START_TIME, $event)" @mouseout="titleViewShow = false">{{item.START_TIME}}</div>
              <div @mousemove="titleShow(item.OBJECT_CLASS, $event)" @mouseout="titleViewShow = false">{{item.OBJECT_CLASS}}</div>
              <div @mousemove="titleShow(item.ALARM_TITLE_TEXT, $event)" @mouseout="titleViewShow = false">{{item.ALARM_TITLE_TEXT}}</div>
              <div @mousemove="titleShow(item.LONGITUDE, $event)" @mouseout="titleViewShow = false">{{item.LONGITUDE}}</div>
              <div @mousemove="titleShow(item.LATITUDE, $event)" @mouseout="titleViewShow = false">{{item.LATITUDE}}</div>
            </div>
          </div>
        </div>
        <!-- 重保 -->
        <div class="list2" v-show="!rangeFlag">
          <div class="list-title">
            <div>地市名称</div>
            <div>场馆名称</div>
            <div>基站名称</div>
            <div>告警发生时间</div>
            <div>基站类型</div>
            <div>告警标题</div>
            <div>经度</div>
            <div>纬度</div>
          </div>
          <div class="list-content">
            <div class="list-line" v-for="(item, index) in listData2" :key="index" :style="`top: ${((index - carouselNum1) >= 0 ? (index - carouselNum1) : (listLen1 + index - carouselNum1))* 48}px; opacity: ${((index - carouselNum1) >= 0 ? (index - carouselNum1) : (listLen1 + index - carouselNum1))* 48 < 437 ? 1 : 0};`">
              <div @mousemove="titleShow(item.REGION_NAME, $event)" @mouseout="titleViewShow = false">{{item.REGION_NAME}}</div>
              <div @mousemove="titleShow(item.AREA_NAME, $event)" @mouseout="titleViewShow = false">{{item.AREA_NAME}}</div>
              <div @mousemove="titleShow(item.NE_LABEL, $event)" @mouseout="titleViewShow = false">{{item.NE_LABEL}}</div>
              <div @mousemove="titleShow(item.START_TIME, $event)" @mouseout="titleViewShow = false">{{item.START_TIME}}</div>
              <div @mousemove="titleShow(item.OBJECT_CLASS, $event)" @mouseout="titleViewShow = false">{{item.OBJECT_CLASS}}</div>
              <div @mousemove="titleShow(item.ALARM_TITLE_TEXT, $event)" @mouseout="titleViewShow = false">{{item.ALARM_TITLE_TEXT}}</div>
              <div @mousemove="titleShow(item.LONGITUDE, $event)" @mouseout="titleViewShow = false">{{item.LONGITUDE}}</div>
              <div @mousemove="titleShow(item.LATITUDE, $event)" @mouseout="titleViewShow = false">{{item.LATITUDE}}</div>
            </div>
          </div>
        </div>
        <div class="right-marker">
          <div class="icon" v-show="!iconFlag"></div>
          <div class="icon icon-1" v-show="iconFlag"></div>
          <div class="name">{{iconName}}</div>
          <div class="index-num">
            <counter :data="listNum" :config="config2"></counter>
          </div>
        </div>
      </div>
    </div>
    <div class="title-view" v-show = "titleViewShow" :style="{left: left + 'px', top: top + 'px'}">
      <span>{{titleName}}</span>
    </div>
  </view-template>
</template>

<script>
  import './v31.scss';

  export default {
    props: {},
    data() {
      return {
        num1: 16,
        num2: 5,
        num3: 14,
        num4: 27,
        num5: 18,
        num6: 25,
        listNum: 0,
        activeFlag: false,
        titleViewShow: false,
        titleName: null,
        iconName: null,
        iconFlag: false,
        rangeFlag: true,
        left: 0,
        top: 0,
        carouselNum1: 0,
        listLen1: 0,
        listData1: [],
        listData2: [],
        dataRequire: ['rc0040', 'rc0041'],
        popIndex: {
          'a01': {
            type: '2G退服基站',
            iconFlag: false,
            dataId: ['rc0054', 'rc0060']
          },
          'a02': {
            type: '3G退服基站',
            iconFlag: false,
            dataId: ['rc0055', 'rc0061']
          },
          'a03': {
            type: '4G退服基站',
            iconFlag: false,
            dataId: ['rc0056', 'rc0062']
          },
          'a04': {
            type: '2G停电基站',
            iconFlag: true,
            dataId: ['rc0057', 'rc0063']
          },
          'a05': {
            type: '3G停电基站',
            iconFlag: true,
            dataId: ['rc0058', 'rc0064']
          },
          'a06': {
            type: '4G停电基站',
            iconFlag: true,
            dataId: ['rc0059', 'rc0065']
          }
        },
        config1: {
          justifyContent: 'center',
          numbers: { // 数字配置项
            textStyle: {
              color: '#ff3333',
              fontSize: 24,
              fontFamily: 'ChaoHei'
            },
            animateFlag: true,
            animateType: 'scroll',
            letterSpacing: 0 // 数字之间间距
          }
        },
        config2: {
          justifyContent: 'center',
          numbers: { // 数字配置项
            textStyle: {
              color: '#ff3333',
              fontSize: 30,
              fontFamily: 'ChaoHei'
            },
            animateFlag: true,
            animateType: 'scroll',
            letterSpacing: 0 // 数字之间间距
          }
        }
      }
    },
    computed: {
      dataType() {
        return this.$store.state.dataType;
      }
    },
    mounted() {
      this.loadData();
    },
    methods: {
      initTimer1() {
        if (this.listLen1 <= 9) {
          return;
        }
        this.carouselNum1++;
        if (this.carouselNum1 > this.listLen1) {
          this.carouselNum1 = 1;
        }
      },
      loadData() {
        this.num1 = 0;
        this.num2 = 0;
        this.num3 = 0;
        this.num4 = 0;
        this.num5 = 0;
        this.num6 = 0;
        // 基站
        this.$http.indi.get(this.dataRequire[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.num1 = res.data.data[0].TB_GSM;
              this.num2 = res.data.data[0].TB_WCDMA;
              this.num3 = res.data.data[0].TB_LTE;
              this.num4 = res.data.data[0].POWER_GSM;
              this.num5 = res.data.data[0].POWER_WCDMA;
              this.num6 = res.data.data[0].POWER_LTE;
            } catch (error) {
              console.error(`rc0040 int has error:`, error);
            }
          }
        });
      },
      titleShow(name, event) {
        this.titleViewShow = true;
        this.left = event.clientX + 10;
        this.top = event.clientY + 10;
        this.titleName = name;
        // console.log(this.titleName)
      },
      closePop() {
        this.activeFlag = false;
      },
      showPop(name) {
        this.activeFlag = true;
        this.popLoad(name);
      },
      popLoad(name) {
        this.listNum = 0;
        this.listData1 = [];
        this.listData2 = [];
        this.listLen1 = 0;
        this.carouselNum1 = 0;
        if (this.dataType === 1) {
          this.rangeFlag = true;
          this.$http.indi.get(this.popIndex[name]['dataId'][this.dataType - 1], {}, (res) => {
            if (res.data.data && res.data.data.length > 0) {
              try {
                this.listNum = res.data.data.length;
                this.listData1 = res.data.data;
                this.listLen1 = res.data.data.length;
              } catch (error) {
                console.error(`${this.popIndex[name]['dataId'][this.dataType - 1]} int has error:`, error);
              }
            }
          });
        }
        if (this.dataType === 2) {
          this.rangeFlag = false;
          this.$http.indi.get(this.popIndex[name]['dataId'][this.dataType - 1], {}, (res) => {
            if (res.data.data && res.data.data.length > 0) {
              try {
                this.listNum = res.data.data.length;
                this.listData2 = res.data.data;
                this.listLen1 = res.data.data.length;
              } catch (error) {
                console.error(`${this.popIndex[name]['dataId'][this.dataType - 1]} int has error:`, error);
              }
            }
          });
        }
        this.iconName = this.popIndex[name]['type'];
        this.iconFlag = this.popIndex[name]['iconFlag'];
      }
    },
    watch: {
      dataType() {
        this.loadData();
      }
    },
    components: {},
    beforeDestroy() {
    }
  }
</script>
