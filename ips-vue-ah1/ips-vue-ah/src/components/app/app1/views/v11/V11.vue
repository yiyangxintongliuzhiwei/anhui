<!--业务量-->
<template>
  <view-template class="a1-v11" :interval="30" @interval="loadData">
    <div class="title">业务量</div>
    <swiper :options="swiperOption" class="a1-v11-swiper">
      <swiper-slide class="a1-v11-swiper-slide">
        <div class="a1-v11-charts1-legend1">2G话务量</div>
        <div class="a1-v11-charts1-legend2">3G话务量</div>
        <div id="a1-v11-charts1"></div>
        <div class="index-name" v-show="num1 !== 0">
          <div class="index-name-num" >
            <counter :data="num1" :config="config1"></counter>
          </div>
          <div class="index-name-num-unit">%</div>
          <div class="name">接通率</div>
        </div>
        <div class="svg-clip">
          <div class="svg1" :style="`top:${46-num1/100*52}px`">
            <svg viewBox="0 0 67 55.843">
              <g>
                <path id="svg1" class="cls-1" d="M326,140.779s9.837-9.43,19.175-12.822c7.912-2.873,10.764,5.7,22.045,5.7s9.145-4.274,19.595-4.274c4.472,0-2.006,7.471,4.049,6.206,7.385-1.543-6.931-11.9-4.1-11.9l0.433,46.465-6.252,7.963-41.725,1.425-9.591-23.8Z" transform="translate(-326 -123.688)"/>
              </g>
            </svg>
          </div>
        </div>
        <div class="svg-clip">
          <div class="svg1" :style="`top:${41-num1/100*48}px`">
            <svg viewBox="0 0 67 55.843">
              <g>
                <path id="svg2" class="cls-1" d="M326.39,140.779s-1.989-9.43,7.348-12.822c7.912-2.873,10.765,5.7,22.045,5.7s9.146-4.274,19.6-4.274c4.472,0,7.455,7.471,13.51,6.206,7.385-1.543-4.566-11.9-1.734-11.9l-3.509,46.465-6.252,7.963-37.782,1.425-9.591-23.8Z" transform="translate(-326 -123.688)"/>
              </g>
            </svg>
          </div>
        </div>
        <div class="index-name index-name-second" v-show="num2 !== 0">
          <div class="index-name-num">
            <counter :data="num2" :config="config1"></counter>
          </div>
          <div class="index-name-num-unit">%</div>
          <div class="name">掉话率</div>
        </div>
        <div class="svg-clip svg-clip-second">
          <div class="svg1" :style="`top:${46-num2/100*52}px`">
            <svg viewBox="0 0 67 55.843">
              <g>
                <path id="svg3" class="cls-1" d="M326,140.779s9.837-9.43,19.175-12.822c7.912-2.873,10.764,5.7,22.045,5.7s9.145-4.274,19.595-4.274c4.472,0-2.006,7.471,4.049,6.206,7.385-1.543-6.931-11.9-4.1-11.9l0.433,46.465-6.252,7.963-41.725,1.425-9.591-23.8Z" transform="translate(-326 -123.688)"/>
              </g>
            </svg>
          </div>
        </div>
        <div class="svg-clip svg-clip-second">
          <div class="svg1" :style="`top:${41-num2/100*48}px`">
            <svg viewBox="0 0 67 55.843">
              <g>
                <path id="svg4" class="cls-1" d="M326.39,140.779s-1.989-9.43,7.348-12.822c7.912-2.873,10.765,5.7,22.045,5.7s9.146-4.274,19.6-4.274c4.472,0,7.455,7.471,13.51,6.206,7.385-1.543-4.566-11.9-1.734-11.9l-3.509,46.465-6.252,7.963-37.782,1.425-9.591-23.8Z" transform="translate(-326 -123.688)"/>
              </g>
            </svg>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="a1-v11-swiper-slide">
        <div class="a1-v11-charts2-legend1">2G流量</div>
        <div class="a1-v11-charts2-legend2">3G流量</div>
        <div class="a1-v11-charts2-legend3">4G流量</div>
        <div id="a1-v11-charts2"></div>
      </swiper-slide>
    </swiper>
    <span class="a1-v11-swiper-roam"></span>
  </view-template>
</template>

<script>
  import './v11.scss';

  import options from './options.js';
  import echarts from 'echarts/lib/echarts';
  import 'echarts/lib/chart/line';
  import 'echarts/lib/component/tooltip';
  import 'echarts/lib/component/legend';

  export default {
    props: {},
    data() {
      return {
        charts1: null,
        charts2: null,
        num1: 55,
        num2: 55,
        erl2G: ['rc0001', 'rc0022'],
        erl3G: ['rc0002', 'rc0023'],
        Mb2G: ['rc0005', 'rc0026'],
        Mb3G: ['rc0006', 'rc0027'],
        Mb4G: ['rc0007', 'rc0028'],
        jtl: ['rc0003', 'rc0024'],
        dhl: ['rc0004', 'rc0025'],
        config1: {
          justifyContent: 'center',
          numbers: { // 数字配置项
            textStyle: {
              color: '#ffffff',
              fontSize: 18,
              fontFamily: 'Microsoft Yahei'
            },
            animateFlag: true,
            animateType: 'scroll',
            letterSpacing: 0 // 数字之间间距
          },
          suffix: {
            content: '',
            marginLeft: 0,
            textStyle: {
              color: '##ffffff',
              fontSize: 18,
              fontFamily: 'Microsoft Yahei'
            }
          }
        },
        swiperOption: {
          autoplay: 15000,
          setWrapperSize: true,
          autoplayDisableOnInteraction: false,
          observeParents: true,
          direction: 'horizontal',
          pagination: '.a1-v11-swiper-roam',
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
        this.charts1 = echarts.init(document.getElementById('a1-v11-charts1'));
        this.charts2 = echarts.init(document.getElementById('a1-v11-charts2'));
      },
      loadData() {
        this.num1 = 0;
        this.num2 = 0;
        options.option1.xAxis.data = [];
        options.option1.series[0].data = [];
        options.option1.series[1].data = [];
        options.option2.xAxis.data = [];
        options.option2.series[0].data = [];
        options.option2.series[1].data = [];
        options.option2.series[2].data = [];
        // 话务量
        this.$http.indi.get(this.erl2G[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              let result = res.data.data;
              result.forEach((item, index) => {
                options.option1.xAxis.data[index] = item.START_TIME;
                options.option1.series[0].data[index] = item.KPI_VALUE;
              });
              this.charts1.clear();
              this.charts1.setOption(options.option1);
            } catch (error) {
              console.error(`rc0001 int has error:`, error);
            }
          }
        });
        this.$http.indi.get(this.erl3G[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              let result = res.data.data;
              result.forEach((item, index) => {
                options.option1.xAxis.data[index] = item.START_TIME;
                options.option1.series[1].data[index] = item.KPI_VALUE;
              });
              this.charts1.clear();
              this.charts1.setOption(options.option1);
            } catch (error) {
              console.error(`rc0002 int has error:`, error);
            }
          }
        });
        this.charts1.clear();
        this.charts1.setOption(options.option1);
        // 流量
        this.$http.indi.get(this.Mb2G[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              let result = res.data.data;
              result.forEach((item, index) => {
                options.option2.xAxis.data[index] = item.START_TIME;
                options.option2.series[0].data[index] = item.KPI_VALUE;
              });
              this.charts2.clear();
              this.charts2.setOption(options.option2);
            } catch (error) {
              console.error(`rc0006 int has error:`, error);
            }
          }
        });
        this.$http.indi.get(this.Mb3G[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              let result = res.data.data;
              result.forEach((item, index) => {
                options.option2.xAxis.data[index] = item.START_TIME;
                options.option2.series[1].data[index] = item.KPI_VALUE;
              });
              this.charts2.clear();
              this.charts2.setOption(options.option2);
            } catch (error) {
              console.error(`rc0006 int has error:`, error);
            }
          }
        });
        this.$http.indi.get(this.Mb4G[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              let result = res.data.data;
              result.forEach((item, index) => {
                options.option2.xAxis.data[index] = item.START_TIME;
                options.option2.series[2].data[index] = item.KPI_VALUE;
              });
              this.charts2.clear();
              this.charts2.setOption(options.option2);
            } catch (error) {
              console.error(`rc0007 int has error:`, error);
            }
          }
        });
        this.charts2.clear();
        this.charts2.setOption(options.option2);
        // 接通率
        this.$http.indi.get(this.jtl[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.num1 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`rc0003 int has error:`, error);
            }
          }
        });
        // 掉话率
        this.$http.indi.get(this.dhl[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.num2 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`rc0003 int has error:`, error);
            }
          }
        });
      }
    },
    watch: {
      dataType() {
        this.loadData();
      }
    },
    components: {},
    beforeDestroy() {
      if (this.charts1) {
        this.charts1.dispose();
      }
      if (this.charts2) {
        this.charts2.dispose();
      }
    }
  }
</script>
