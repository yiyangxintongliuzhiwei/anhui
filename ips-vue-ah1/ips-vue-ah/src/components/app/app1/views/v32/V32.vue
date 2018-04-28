<!--视频卡顿&下载时延-->
<template>
  <view-template class="a1-v32" :interval="30" @interval="loadData">
    <div class="title">移动网用户感知</div>
    <div class="word1">Web</div>
    <div class="word2">流媒体</div>
    <div class="index-num-l">
      <div class="name">页面响应<br>成功率</div>
      <div class="num">
        <counter :data="num1" :config="config1"></counter>
        <div class="unit">%</div>
      </div>
    </div>
    <div class="index-num-l index-num-l2">
      <div class="name">页面响应<br>时延</div>
      <div class="num">
        <counter :data="num2" :config="config1"></counter>
        <div class="unit">ms</div>
      </div>
    </div>
    <div class="index-num-l index-num-l3">
      <div class="name">下载<br>速率</div>
      <div class="num">
        <counter :data="num3" :config="config1"></counter>
        <div class="unit">kbps</div>
      </div>
    </div>
    <div class="index-num-r">
      <div class="num">
        <counter :data="num4" :config="config2"></counter>
        <div class="unit">%</div>
      </div>
      <div class="name">播放<br>成功率</div>
    </div>
    <div class="index-num-r index-num-r2">
      <div class="num">
        <counter :data="num5" :config="config2"></counter>
        <div class="unit">%</div>
      </div>
      <div class="name">卡顿<br>占比</div>
    </div>
    <div class="index-num-r index-num-r3">
      <div class="num">
        <counter :data="num6" :config="config2"></counter>
        <div class="unit">kbps</div>
      </div>
      <div class="name">下载<br>速率</div>
    </div>
  </view-template>
</template>

<script>
  import './v32.scss';

  export default {
    props: {},
    data() {
      return {
        num1: 98,
        num2: 98,
        num3: 2345,
        num4: 98,
        num5: 98,
        num6: 98,
        data1: ['rc0042', 'rc0048'],
        data2: ['rc0043', 'rc0049'],
        data3: ['rc0044', 'rc0050'],
        data4: ['rc0045', 'rc0051'],
        data5: ['rc0046', 'rc0052'],
        data6: ['rc0047', 'rc0053'],
        config1: {
          justifyContent: 'center',
          numbers: { // 数字配置项
            textStyle: {
              color: '#6bb8ff',
              fontSize: 16,
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
              color: '#01ffff',
              fontSize: 16,
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
      loadData() {
        this.num1 = 0;
        this.num2 = 0;
        this.num3 = 0;
        this.num4 = 0;
        this.num5 = 0;
        this.num6 = 0;
        this.$http.indi.get(this.data1[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.num1 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`${this.data1[this.dataType - 1]} int has error:`, error);
            }
          }
        });
        this.$http.indi.get(this.data2[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.num2 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`${this.data2[this.dataType - 1]} int has error:`, error);
            }
          }
        });
        this.$http.indi.get(this.data3[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.num3 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`${this.data3[this.dataType - 1]} int has error:`, error);
            }
          }
        });
        this.$http.indi.get(this.data4[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.num4 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`${this.data4[this.dataType - 1]} int has error:`, error);
            }
          }
        });
        this.$http.indi.get(this.data5[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.num5 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`${this.data5[this.dataType - 1]} int has error:`, error);
            }
          }
        });
        this.$http.indi.get(this.data6[this.dataType - 1], {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.num6 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`${this.data6[this.dataType - 1]} int has error:`, error);
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
    }
  }
</script>
