<template>
  <view-template>
    <div class="leftone-pop" @click.stop.self="backIndex">
      <div class="roam" :style="`left:${temObj.left}px;top:${temObj.top}px`">
        <div class="roam-name">{{roamName}}</div>
        <div v-if="roamNum === 2" :class="{num1: roamNum === 1, num2: roamNum === 2}">
          <counter :data="num" :config="config1"></counter>
        </div>
        <div v-if="roamNum === 1" :class="{num1: roamNum === 1, num2: roamNum === 2}">
          <counter :data="num" :config="config3"></counter>
        </div>
      </div>
      <div class="roam-top" :style="{width: roamNum === 2 ? '822px': '792px', backgroundSize: roamNum === 2 ? '822px 569px': '792px 569px'}">
        <div class="top-name">{{temObj.title}}</div>
        <div class="top-list" v-if="topList[0].num !== 0">
          <div class="list" v-for="(item, index) in topList" :key="index">
            <div class="ranking">{{index + 1}}</div>
            <div class="icon" v-if="roamNum === 2" :style="`backgroundImage: url('static/countryIcon/${item.name}.png');`"></div>
            <div class="name">{{item.name}}</div>
            <div class="progress-box">
              <div class="progress" :style="`width: ${item.num / topList[0].num * 473}px`"></div>
            </div>
            <div class="num">
              <counter :data="item.num" :config="config2"></counter>
            </div>
          </div>
        </div>
      </div>
    </div>
  </view-template>
</template>

<script>
  import './twoLevels.scss';
  export default {
    props: {
      roamNum: {
        default: 1,
        type: Number
      }
    },
    data() {
      return {
        roamList: {
          1: {
            roamName: '外省漫游(万)',
            roamNum: 0,
            title: '外省漫游用户数TOP10',
            left: 331,
            top: 465
          },
          2: {
            roamName: '国际漫游',
            roamNum: 0,
            title: '国际漫游用户数TOP10',
            left: 331,
            top: 593
          }
        },
        topList: [
          { name: '美国', num: 8254 },
          { name: '英国', num: 7578 },
          { name: '意大利', num: 6935 },
          { name: '韩国', num: 5923 },
          { name: '日本', num: 4982 },
          { name: '俄罗斯', num: 4254 },
          { name: '泰国', num: 3978 },
          { name: '越南', num: 3035 },
          { name: '法国', num: 2523 },
          { name: '加拿大', num: 1982 }
        ],
        config1: {
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
        config2: {
          justifyContent: 'flex-start',
          numbers: { // 数字配置项
            textStyle: {
              color: '#66ffff',
              fontSize: 24,
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
        }
      }
    },
    computed: {
      temObj() {
        return this.roamList[this.roamNum];
      },
      roamName() {
        return this.roamList[this.roamNum]['roamName'];
      },
      num() {
        return this.roamList[this.roamNum]['roamNum'];
      },
      titleName() {
        return this.roamList[this.roamNum]['title'];
      }
    },
    mounted() {
      this.loadData();
    },
    methods: {
      loadData() {
        this.roamList[this.roamNum].roamNum = 0;
        // 外省漫游top10
        if (this.roamNum === 1) {
          this.$http.indi.get('rc0083', {}, (res) => {
            if (res.data.data && res.data.data.length > 0) {
              try {
                this.roamList[this.roamNum].roamNum = res.data.data[0].KPI_VALUE;
              } catch (error) {
                console.error('rc0083 int has error:', error);
              }
            }
          });
          this.$http.indi.get('rc0018', {}, (res) => {
            this.topList = [];
            if (res.data.data && res.data.data.length > 0) {
              try {
                let result = res.data.data.slice(0, 10);
                result.forEach((item, index) => {
                  let con = {name: item.NE_NAME, num: item.KPI_VALUE};
                  this.topList.push(con);
                });
              } catch (error) {
                console.error('rc0018 int has error:', error);
              }
            }
          });
        }
        // 国际漫游top10
        if (this.roamNum === 2) {
          this.$http.indi.get('rc0084', {}, (res) => {
            if (res.data.data && res.data.data.length > 0) {
              try {
                this.roamList[this.roamNum].roamNum = res.data.data[0].KPI_VALUE;
              } catch (error) {
                console.error('rc0084 int has error:', error);
              }
            }
          });
          this.$http.indi.get('rc0019', {}, (res) => {
            this.topList = [];
            if (res.data.data && res.data.data.length > 0) {
              try {
                let result = res.data.data.slice(0, 10);
                result.forEach((item, index) => {
                  let con = {name: item.NE_NAME, num: item.KPI_VALUE};
                  this.topList.push(con);
                });
              } catch (error) {
                console.error('rc0019 int has error:', error);
              }
            }
          });
        }
      },
      backIndex() {
        this.$emit('closePop');
      }
    }
  }
</script>
