<!--业务量-->
<template>
  <view-template class="a2-v11" :interval="30" @interval="loadData">
    <swiper :options="swiperOption" class="a2-v11-swiper">
      <swiper-slide class="a2-v11-swiper-slide">
        <div class="title">话务量</div>
        <div class="word">
          <div class="word1">{{flowName[dataType - 1][0]}}</div>
          <div class="word2">{{flowName[dataType - 1][1]}}</div>
        </div>
        <div class="list">
          <div class="list-1" v-for="(item, index) in listData1" :key="index">
            <div class="name">{{item.name}}</div>
            <div class="yesterday">
              <counter :data="item.KPI_VALUE1" :config="config1"></counter>
            </div>
            <div class="today">
              <counter :data="item.KPI_VALUE2" :config="config2"></counter>
            </div>
          </div>
        </div>
        <div id="a2-v11-charts1"></div>
        <div class="a2-v11-charts1-word">
          <div class="num">
            <counter :data="num1" :config="config3"></counter>
          </div>
          <div class="index-name">掉话率</div>
        </div>
        <div id="a2-v11-charts2"></div>
        <div class="a2-v11-charts2-word">
          <div class="num">
            <counter :data="num2" :config="config3"></counter>
          </div>
          <div class="index-name">接通率</div>
        </div>
      </swiper-slide>
      <swiper-slide class="a2-v11-swiper-slide">
        <div class="title">流量</div>
        <div class="word">
          <div class="word1">{{flowName[dataType - 1][0]}}</div>
          <div class="word2">{{flowName[dataType - 1][1]}}</div>
        </div>
        <div class="list">
          <div class="list-1" v-for="(item, index) in listData2" :key="index">
            <div class="name">{{item.name}}</div>
            <div class="yesterday">
              <counter :data="item.KPI_VALUE1" :config="config1"></counter>
            </div>
            <div class="today">
              <counter :data="item.KPI_VALUE2" :config="config2"></counter>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <span class="a2-v11-swiper-roam"></span>
  </view-template>
</template>

<script>
  import './v11.scss';

  import echarts from 'echarts';

  import options from './options.js';

  export default {
    props: {},
    data() {

      return {
        charts1: null,
        charts2: null,
        num1: 2.98,
        num2: 98.37,
        erl2Gy: ['rc0070', 'rc0098'],
        erl2Gt: ['rc0071', 'rc0100'],
        erl3Gy: ['rc0072', 'rc0099'],
        erl3Gt: ['rc0073', 'rc0101'],
        Mb2Gy: ['rc0074', 'rc0102'],
        Mb2Gt: ['rc0075', 'rc0105'],
        Mb3Gy: ['rc0076', 'rc0103'],
        Mb3Gt: ['rc0077', 'rc0106'],
        Mb4Gy: ['rc0078', 'rc0104'],
        Mb4Gt: ['rc0079', 'rc0107'],
        jtl: ['rc0003', 'rc0111'],
        dhl: ['rc0004', 'rc0025'],
        flowName: [
          ['全省昨天', '全省当天'],
          ['重保基站昨天', '重保基站当天']
        ],
        config1: {
          justifyContent: 'center',
          numbers: { // 数字配置项
            textStyle: {
              color: '#00ffff',
              fontSize: 18,
              fontFamily: 'Microsoft Yahei'
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
              color: '#33ff77',
              fontSize: 18,
              fontFamily: 'Microsoft Yahei'
            },
            animateFlag: true,
            animateType: 'scroll',
            letterSpacing: 0 // 数字之间间距
          }
        },
        config3: {
          justifyContent: 'center',
          numbers: { // 数字配置项
            textStyle: {
              color: '#fff066',
              fontSize: 18,
              fontFamily: 'MF_LangQian'
            },
            animateFlag: true,
            animateType: 'scroll',
            letterSpacing: 0 // 数字之间间距
          },
          suffix: {
            content: '%',
            marginLeft: 0,
            textStyle: {
              color: '#fff066',
              fontSize: 18,
              fontFamily: 'MF_LangQian'
            }
          }
        },
        listData1: [
          {
            name: '2G话务量(万Erl)',
            KPI_VALUE1: 0,
            KPI_VALUE2: 0
          },
          {
            name: '3G话务量(万Erl)',
            KPI_VALUE1: 0,
            KPI_VALUE2: 0
          }
        ],
        listData2: [
          {
            name: '2G流量(TB)',
            KPI_VALUE1: 0,
            KPI_VALUE2: 0
          },
          {
            name: '3G流量(TB)',
            KPI_VALUE1: 0,
            KPI_VALUE2: 0
          },
          {
            name: '4G流量(TB)',
            KPI_VALUE1: 0,
            KPI_VALUE2: 0
          }
        ],
        swiperOption: {
          autoplay: 15000,
          setWrapperSize: true,
          autoplayDisableOnInteraction: false,
          observeParents: true,
          direction: 'horizontal',
          pagination: '.a2-v11-swiper-roam',
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
        this.charts1 = echarts.init(document.getElementById('a2-v11-charts1'));
        this.charts2 = echarts.init(document.getElementById('a2-v11-charts2'));
      },
      loadData() {
        this.num1 = 0;
        this.num2 = 0;
        this.listData1[0].KPI_VALUE1 = 0;
        this.listData1[0].KPI_VALUE2 = 0;
        this.listData1[1].KPI_VALUE1 = 0;
        this.listData1[1].KPI_VALUE2 = 0;
        this.listData2[0].KPI_VALUE1 = 0;
        this.listData2[0].KPI_VALUE2 = 0;
        this.listData2[1].KPI_VALUE1 = 0;
        this.listData2[1].KPI_VALUE2 = 0;
        this.listData2[2].KPI_VALUE1 = 0;
        this.listData2[2].KPI_VALUE2 = 0;
        options.option1.series[0].data[0] = 0;
        options.option2.series[0].data[0] = 0;
        // 2G话务量
        this.$http.indi.get(this.erl2Gy[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.listData1[0].KPI_VALUE1 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`${this.erl2Gy[this.dataType - 1]} int has error:`, error);
            }
          }
        });
        this.$http.indi.get(this.erl2Gt[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.listData1[0].KPI_VALUE2 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`${this.erl2Gt[this.dataType - 1]} int has error:`, error);
            }
          }
        });
        // 3G话务量
        this.$http.indi.get(this.erl3Gy[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.listData1[1].KPI_VALUE1 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`${this.erl3Gy[this.dataType - 1]} int has error:`, error);
            }
          }
        });
        this.$http.indi.get(this.erl3Gt[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.listData1[1].KPI_VALUE2 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`${this.erl3Gt[this.dataType - 1]} int has error:`, error);
            }
          }
        });
        // 掉话率
        this.$http.indi.get(this.dhl[this.dataType - 1], {}, (res) => {
          try {
            if (res.data.data && res.data.data.length > 0) {
              this.num1 = res.data.data[0].KPI_VALUE;
              console.log(this.num1)
              console.log(res.data)
              options.option1.series[0].data[0] = res.data.data[0].KPI_VALUE;
            }
          } catch (error) {
            console.error(`${this.dhl[this.dataType - 1]} int has error:`, error);
          } finally {
            this.charts1.clear();
            this.charts1.setOption(options.option1);
          }
        });
        // 接通率
        this.$http.indi.get(this.jtl[this.dataType - 1], {}, (res) => {
          try {
            if (res.data.data && res.data.data.length > 0) {
              this.num2 = res.data.data[0].KPI_VALUE;
              options.option2.series[0].data[0] = res.data.data[0].KPI_VALUE;
            }
          } catch (error) {
            console.error(`${this.jtl[this.dataType - 1]} int has error:`, error);
          } finally {
            this.charts2.clear();
            this.charts2.setOption(options.option2);
          }
        });
        // 2G流量
        this.$http.indi.get(this.Mb2Gy[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.listData2[0].KPI_VALUE1 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`${this.Mb2Gy[this.dataType - 1]} int has error:`, error);
            }
          }
        });
        this.$http.indi.get(this.Mb2Gt[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.listData2[0].KPI_VALUE2 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`${this.Mb2Gt[this.dataType - 1]} int has error:`, error);
            }
          }
        });
        // 3G流量
        this.$http.indi.get(this.Mb3Gy[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.listData2[1].KPI_VALUE1 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`${this.Mb3Gy[this.dataType - 1]} int has error:`, error);
            }
          }
        });
        this.$http.indi.get(this.Mb3Gt[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.listData2[1].KPI_VALUE2 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`${this.Mb3Gt[this.dataType - 1]} int has error:`, error);
            }
          }
        });
        // 4G流量
        this.$http.indi.get(this.Mb4Gy[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.listData2[2].KPI_VALUE1 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`${this.Mb4Gy[this.dataType - 1]} int has error:`, error);
            }
          }
        });
        this.$http.indi.get(this.Mb4Gt[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.listData2[2].KPI_VALUE2 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`${this.Mb4Gt[this.dataType - 1]} int has error:`, error);
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
