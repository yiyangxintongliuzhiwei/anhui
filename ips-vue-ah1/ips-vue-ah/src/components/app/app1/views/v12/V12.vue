<!--用户数-->
<template>
  <view-template class="a1-v12" :interval="30" @interval="loadData">
    <div class="title">用户数</div>
    <div class="a1-v12-legend1">2G用户</div>
    <div class="a1-v12-legend2">3G用户</div>
    <div class="a1-v12-legend3">4G用户</div>
    <div id="a1-v12-charts1"></div>
  </view-template>
</template>

<script>
  import './v12.scss';

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
        user2G: ['rc0008', 'rc0029'],
        user3G: ['rc0009', 'rc0030'],
        user4G: ['rc0010', 'rc0031']
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
        this.charts1 = echarts.init(document.getElementById('a1-v12-charts1'));
      },
      loadData() {
        options.option1.xAxis.data = [];
        options.option1.series[0].data = [];
        options.option1.series[1].data = [];
        options.option1.series[2].data = [];
        // 用户数
        this.$http.indi.get(this.user2G[this.dataType - 1], {}, (res) => {
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
              console.error(`rc0008 int has error:`, error);
            }
          }
        });
        this.$http.indi.get(this.user3G[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              let result = res.data.data;
              result.forEach((item, index) => {
                // options.option1.xAxis.data[index] = item.START_TIME;
                options.option1.series[1].data[index] = item.KPI_VALUE;
              });
              this.charts1.clear();
              this.charts1.setOption(options.option1);
            } catch (error) {
              console.error(`rc0009 int has error:`, error);
            }
          }
        });
        this.$http.indi.get(this.user4G[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              let result = res.data.data;
              result.forEach((item, index) => {
                // options.option1.xAxis.data[index] = item.START_TIME;
                options.option1.series[2].data[index] = item.KPI_VALUE;
              });
              this.charts1.clear();
              this.charts1.setOption(options.option1);
            } catch (error) {
              console.error(`rc00010 int has error:`, error);
            }
          }
        });
        this.charts1.clear();
        this.charts1.setOption(options.option1);
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
    }
  }
</script>
