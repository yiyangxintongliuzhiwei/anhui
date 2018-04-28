<!--视频卡顿&下载时延-->
<template>
  <view-template class="a1-v32" :interval="30" @interval="loadData">
    <swiper :options="swiperOption" class="a2-v32-swiper">
      <swiper-slide class="a2-v32-swiper-slide">
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
      </swiper-slide>
      <swiper-slide class="a2-v32-swiper-slide">
        <div class="title">2I2C用户分析</div>
        <div class="title-name">
          <div class="name">用户数</div>
          <div class="name">占比</div>
          <div class="name">腾讯视频<br>播放成功率</div>
          <div class="name">腾讯视频<br>下载速率</div>
        </div>
        <div class="list">
          <div class="name">{{listData1.name}}</div>
          <div class="num num1">
            <div class="number">
              <counter :data="listData1.KPI_VALUE1" :config="config3"></counter>
            </div>
            <div class="unit">万户</div>
          </div>
          <div class="num num2">
            <div class="number">
              <counter :data="listData1.KPI_VALUE2" :config="config3"></counter>
            </div>
            <div class="unit">%</div>
          </div>
          <div class="num num3">
            <div class="number">
              <counter :data="listData1.KPI_VALUE3" :config="config3"></counter>
            </div>
            <div class="unit">%</div>
          </div>
          <div class="num num4">
            <div class="number">
              <counter :data="listData1.KPI_VALUE4" :config="config3"></counter>
            </div>
            <div class="unit">kbps</div>
          </div>
        </div>
        <div class="title-name-2">
          <div class="name">页面打开<br>成功率</div>
          <div class="name">页面时延</div>
        </div>
        <div class="list-2">
          <div class="name">{{listData2.name}}</div>
          <div class="num num1">
            <div class="number">
              <counter :data="listData2.KPI_VALUE1" :config="config3"></counter>
            </div>
            <div class="unit">万户</div>
          </div>
          <div class="num num2">
            <div class="number">
              <counter :data="listData2.KPI_VALUE2" :config="config3"></counter>
            </div>
            <div class="unit">%</div>
          </div>
          <div class="num num3">
            <div class="number">
              <counter :data="listData2.KPI_VALUE3" :config="config3"></counter>
            </div>
            <div class="unit">%</div>
          </div>
          <div class="num num4">
            <div class="number">
              <counter :data="listData2.KPI_VALUE4" :config="config3"></counter>
            </div>
            <div class="unit">ms</div>
          </div>
        </div>
        <div class="list-3">
          <div class="name">{{listData3.name}}</div>
          <div class="num num1">
            <div class="number">
              <counter :data="listData3.KPI_VALUE1" :config="config3"></counter>
            </div>
            <div class="unit">万户</div>
          </div>
          <div class="num num2">
            <div class="number">
              <counter :data="listData3.KPI_VALUE2" :config="config3"></counter>
            </div>
            <div class="unit">%</div>
          </div>
          <div class="num num3">
            <div class="number">
              <counter :data="listData3.KPI_VALUE3" :config="config3"></counter>
            </div>
            <div class="unit">%</div>
          </div>
          <div class="num num4">
            <div class="number">
              <counter :data="listData3.KPI_VALUE4" :config="config3"></counter>
            </div>
            <div class="unit">ms</div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <span class="a2-v32-swiper-roam"></span>
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
        listData1: {
          name: 'T卡',
          KPI_VALUE1: 178.73,
          KPI_VALUE2: 93.75,
          KPI_VALUE3: 97.53,
          KPI_VALUE4: 1017.29
        },
        listData2: {
          name: 'D卡',
          KPI_VALUE1: 8.66,
          KPI_VALUE2: 4.54,
          KPI_VALUE3: 97.17,
          KPI_VALUE4: 206
        },
        listData3: {
          name: 'M卡',
          KPI_VALUE1: 3.25,
          KPI_VALUE2: 1.71,
          KPI_VALUE3: 96.83,
          KPI_VALUE4: 212
        },
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
        },
        config3: {
          justifyContent: 'center',
          numbers: { // 数字配置项
            textStyle: {
              color: '#00d5ff',
              fontSize: 17,
              fontFamily: 'Microsoft Yahei',
              fontWeight: 'bold'
            },
            animateFlag: true,
            animateType: 'scroll',
            letterSpacing: 0 // 数字之间间距
          }
        },
        swiperOption: {
          autoplay: 15000,
          setWrapperSize: true,
          autoplayDisableOnInteraction: false,
          observeParents: true,
          direction: 'horizontal',
          pagination: '.a2-v32-swiper-roam',
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
        // 移动网用户感知
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
        // 用户分析
        this.listData1.KPI_VALUE1 = 0;
        this.listData1.KPI_VALUE2 = 0;
        this.listData1.KPI_VALUE3 = 0;
        this.listData1.KPI_VALUE4 = 0;
        this.listData2.KPI_VALUE1 = 0;
        this.listData2.KPI_VALUE2 = 0;
        this.listData2.KPI_VALUE3 = 0;
        this.listData2.KPI_VALUE4 = 0;
        this.listData3.KPI_VALUE1 = 0;
        this.listData3.KPI_VALUE2 = 0;
        this.listData3.KPI_VALUE3 = 0;
        this.listData3.KPI_VALUE4 = 0;
        // T卡
        this.$http.indi.get('rc0086', {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.listData1.KPI_VALUE1 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`rc0086 int has error:`, error);
            }
          }
        });
        this.$http.indi.get('rc0087', {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.listData1.KPI_VALUE2 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`rc0087 int has error:`, error);
            }
          }
        });
        this.$http.indi.get('rc0088', {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.listData1.KPI_VALUE3 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`rc0088 int has error:`, error);
            }
          }
        });
        this.$http.indi.get('rc0089', {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.listData1.KPI_VALUE4 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`rc0089 int has error:`, error);
            }
          }
        });
        // D卡
        this.$http.indi.get('rc0090', {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.listData2.KPI_VALUE1 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`rc0090 int has error:`, error);
            }
          }
        });
        this.$http.indi.get('rc0091', {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.listData2.KPI_VALUE2 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`rc0091 int has error:`, error);
            }
          }
        });
        this.$http.indi.get('rc0092', {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.listData2.KPI_VALUE3 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`rc0092 int has error:`, error);
            }
          }
        });
        this.$http.indi.get('rc0093', {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.listData2.KPI_VALUE4 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`rc0093 int has error:`, error);
            }
          }
        });
        // M卡
        this.$http.indi.get('rc0094', {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.listData3.KPI_VALUE1 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`rc0094 int has error:`, error);
            }
          }
        });
        this.$http.indi.get('rc0095', {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.listData3.KPI_VALUE2 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`rc0095 int has error:`, error);
            }
          }
        });
        this.$http.indi.get('rc0096', {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.listData3.KPI_VALUE3 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`rc0096 int has error:`, error);
            }
          }
        });
        this.$http.indi.get('rc0097', {}, (res) => {
          if (res.data.data && res.data.data.length > 0) {
            try {
              this.listData3.KPI_VALUE4 = res.data.data[0].KPI_VALUE;
            } catch (error) {
              console.error(`rc0097 int has error:`, error);
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
