<!--用户数-->
<template>
  <view-template class="a2-v12" :interval="30" @interval="loadData">
    <swiper :options="swiperOption" class="a2-v12-swiper">
      <swiper-slide class="a2-v12-swiper-slide">
        <div class="title-box">
          <div class="title">用户数</div>
        </div>
        <span class="name">2G</span>
        <span class="name">3G</span>
        <span class="name">4G</span>
        <div class="user-num user-num1">
          <counter :data="num1" :config="config1"></counter>
        </div>
        <div class="user-num user-num2">
          <counter :data="num2" :config="config1"></counter>
        </div>
        <div class="user-num user-num3">
          <counter :data="num3" :config="config1"></counter>
        </div>
        <div class="svg1">
          <svg>
            <g class="cls-1">
              <path d="M207.113,10.352 C207.113,64.837 163.096,109.006 108.798,109.006 C54.500,109.006 10.484,64.837 10.484,10.352"/>
            </g>
            <g id="svg-1" v-show="num1 !== 0"></g>
          </svg>
        </div>
        <div class="svg2">
          <svg>
            <g class="cls-1">
              <path d="M161.424,10.123 C161.424,52.034 127.565,86.010 85.798,86.010 C44.031,86.010 10.172,52.034 10.172,10.123"/>
            </g>
            <g id="svg-2" v-show="num2 !== 0"></g>
          </svg>
        </div>
        <div class="svg3">
          <svg>
            <g class="cls-1">
              <path d="M116.737,10.123 C116.737,39.461 93.035,63.244 63.798,63.244 C34.561,63.244 10.860,39.461 10.860,10.123"/>
            </g>
            <g id="svg-3" v-show="num3 !== 0"></g>
          </svg>
        </div>
        <div class="roam roam-province" @click="showPop(1)">
          <div class="roam-name">外省漫游(万)</div>
          <div class="num">
            <counter :data="num4" :config="config3"></counter>
          </div>
        </div>
        <div class="roam roam-international" @click="showPop(2)">
          <div class="roam-name">国际漫游</div>
          <div class="num">
            <counter :data="num5" :config="config2"></counter>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="a2-v12-swiper-slide">
        <div class="title-box">
          <div class="title">用户行为分析</div>
        </div>
        <div class="pie-bg">
          <div class="pie-name">用户行为</div>
          <div id="a2-v12-charts1"></div>
        </div>
        <div class="legend-list">
          <div class="list" v-for="(item, index) in legendList" :key="index">{{item}}</div>
        </div>
      </swiper-slide>
    </swiper>
    <span class="a2-v12-swiper-roam"></span>
    <div :roamNum="roamNum" is="twoLevels" v-if="twoLevelsFlag" @closePop="closePop"></div>
  </view-template>
</template>

<script>
  import './v12.scss';
  import twoLevels from './twoLevels/twoLevels.vue';
  import echarts from 'echarts';
  import options from './options';
  const Snap = require(`imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg-min.js`);

  export default {
    props: {},
    data() {
      return {
        charts1: null,
        user2G: ['rc0080', 'rc0108'],
        user3G: ['rc0081', 'rc0109'],
        user4G: ['rc0082', 'rc0110'],
        num1: 0,
        num2: 0,
        num3: 0,
        num4: 0,
        num5: 0,
        roamNum: 1,
        twoLevelsFlag: false,
        legendList: ['流媒体', 'WEB', '即时通信', '游戏', '其他'],
        path1: 'M207.113,10.352 C207.113,64.837 163.096,109.006 108.798,109.006 C54.500,109.006 10.484,64.837 10.484,10.352',
        path2: 'M161.424,10.123 C161.424,52.034 127.565,86.010 85.798,86.010 C44.031,86.010 10.172,52.034 10.172,10.123',
        path3: 'M116.737,10.123 C116.737,39.461 93.035,63.244 63.798,63.244 C34.561,63.244 10.860,39.461 10.860,10.123',
        config1: {
          justifyContent: 'center',
          numbers: { // 数字配置项
            textStyle: {
              color: '#cce2ff',
              fontSize: 16,
              fontFamily: 'MF_LangQian'
            },
            animateFlag: true,
            animateType: 'scroll',
            letterSpacing: 0 // 数字之间间距
          }
        },
        config2: {
          justifyContent: 'flex-end',
          numbers: { // 数字配置项
            textStyle: {
              color: '#fff',
              fontSize: 23,
              fontFamily: 'ChaoHei'
            },
            animateFlag: true,
            animateType: 'scroll',
            letterSpacing: 0 // 数字之间间距
          }
        },
        config3: {
          justifyContent: 'flex-end',
          numbers: { // 数字配置项
            textStyle: {
              color: '#fff',
              fontSize: 23,
              fontFamily: 'ChaoHei'
            },
            animateFlag: true,
            animateType: 'scroll',
            // decimal: 2,
            letterSpacing: 0 // 数字之间间距
          }
        },
        swiperOption: {
          autoplay: 15000,
          setWrapperSize: true,
          autoplayDisableOnInteraction: false,
          observeParents: true,
          direction: 'horizontal',
          pagination: '.a2-v12-swiper-roam',
          paginationClickable: true
        }
      }
    },
    computed: {
      dataType() {
        return this.$store.state.dataType;
      }
    },
    mounted() {
      this.init();
      this.loadData();
    },
    methods: {
      init() {
        this.charts1 = echarts.init(document.getElementById('a2-v12-charts1'));
      },
      loadData() {
        this.num1 = 0;
        this.num2 = 0;
        this.num3 = 0;
        this.num4 = 0;
        this.num5 = 0;
        // 2G 3G 4G
        // if (this.dataType === 2) {
        //   this.setSvg('#svg-1', 0, this.path1, 'cls-2');
        //   this.setSvg('#svg-2', 0, this.path2, 'cls-2');
        //   this.setSvg('#svg-3', 0, this.path3, 'cls-2');
        // }
        if (this.user2G[this.dataType - 1] !== '' && this.user3G[this.dataType - 1] !== '' && this.user4G[this.dataType - 1] !== '') {
          this.$http.indi.get([this.user2G[this.dataType - 1], this.user3G[this.dataType - 1], this.user4G[this.dataType - 1]], {}, (res1, res2, res3) => {
            if (res1.data.data && res1.data.data.length > 0) {
              try {
                this.num1 = res1.data.data[0].KPI_VALUE;
              } catch (error) {
                console.error(`${this.user2G[this.dataType - 1]} int has error:`, error);
              }
            }
            if (res2.data.data && res2.data.data.length > 0) {
              try {
                this.num2 = res2.data.data[0].KPI_VALUE;
              } catch (error) {
                console.error(`${this.user3G[this.dataType - 1]} int has error:`, error);
              }
            }
            if (res3.data.data && res3.data.data.length > 0) {
              try {
                this.num3 = res3.data.data[0].KPI_VALUE;
              } catch (error) {
                console.error(`${this.user4G[this.dataType - 1]} int has error:`, error);
              }
            }
            this.setSvg('#svg-1', this.num1 / (this.num1 + this.num2 + this.num3) * 100, this.path1, 'cls-2');
            this.setSvg('#svg-2', this.num2 / (this.num1 + this.num2 + this.num3) * 100, this.path2, 'cls-2');
            this.setSvg('#svg-3', this.num3 / (this.num1 + this.num2 + this.num3) * 100, this.path3, 'cls-2');
          });
        }
        // 外省漫游
        this.$http.indi.get('rc0083', {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.num4 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error('rc0083 int has error:', error);
            }
          }
        });
        // 国际漫游
        this.$http.indi.get('rc0084', {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.num5 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error('rc0084 int has error:', error);
            }
          }
        });
        // 用户行为占比
        this.$http.indi.get('rc0085', {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              res.data.data.forEach((item, index) => {
                options.option1.series[0].data[index] = item.KPI_VALUE;
                this.charts1.clear();
                this.charts1.setOption(options.option1);
              });
            } catch (error) {
              console.error('rc0085 int has error:', error);
            }
          }
        });
      },
      setSvg(container, progress, pathStr, className) {
        if (isNaN(progress)) {
          return;
        }
        let paper = Snap(container);
        // 清除上次绘制图形，防止重复绘制发生重叠
        paper.clear();
        let prog = paper.path(pathStr);
        let lineL = prog.getTotalLength();
        let oneUnit = lineL / 100;
        let toOffset = lineL - oneUnit * progress;
        prog.attr({
          'stroke-dashoffset': lineL,
          'stroke-dasharray': lineL,
          'class': className
        });
        prog.animate({
          'stroke-dashoffset': toOffset
        }, 2000, mina.easein);
      },
      showPop(type) {
        this.twoLevelsFlag = true;
        this.roamNum = type;
      },
      closePop() {
        this.twoLevelsFlag = false;
      }
    },
    watch: {
      dataType() {
        this.loadData();
      }
    },
    components: {
      twoLevels
    },
    beforeDestroy() {
      if (this.charts1) {
        this.charts1.dispose();
      }
    }
  }
</script>
