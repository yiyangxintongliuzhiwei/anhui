import echarts from 'echarts/lib/echarts';
export default {
  option1: {
    tooltip: {
      show: true,
      trigger: 'axis',
      confine: true,
      textStyle: {
        fontSize: 10
      },
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      },
      formatter: function(params) {
        return params[0].name + '<br/>' + '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#fbed65;"></span>' + params[0].seriesName + ': ' + params[0].value + '<br/>' + '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#00fefe;"></span>' + params[1].seriesName + ': ' + params[1].value;
      }
    },
    grid: {
      show: false,
      left: 49,
      top: 35,
      right: 30,
      bottom: 60
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      // name: '(Erl)',
      // nameGap: 8,
      // nameLocation: 'start',
      // nameTextStyle: {
      //   fontFamily: 'Microsoft YaHei',
      //   fontSize: 12,
      //   color: '#669eff'
      // },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        margin: 20,
        interval: 0,
        fontFamily: 'Microsoft YaHei',
        fontSize: 12,
        color: '#669eff',
        formatter(value) {
          if (value && value.length > 16) {
            return value.substring(11, 13);
          } else {
            return value;
          }
        }
      },
      data: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
    },
    yAxis: {
      type: 'value',
      show: true,
      // min: 0,
      // max: 100,
      // interval: 20,
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        // showMinLabel: false,
        margin: 22,
        align: 'center',
        fontFamily: 'Microsoft YaHei',
        fontSize: 12,
        color: '#669eff',
        formatter: (value) => {
          if (value === 0) {
            return '(万Erl)'
          }
          return value;
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    series: [
      {
        type: 'line',
        name: '2G话务量',
        smooth: true,
        symbol: 'circle',
        symbolSize: [8, 8],
        itemStyle: {
          normal: {
            color: '#0c3066',
            borderColor: '#fbed65',
            borderWidth: 2
          }
        },
        lineStyle: {
          normal: {
            color: '#fbed65'
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(255, 240, 102, 0.3)' // 0% 处的颜色
            }, {
              offset: 1,
              color: 'rgba(255, 240, 102, 0)' // 100% 处的颜色
            }], false)
          }
        },
        data: [60, 80, 50, 70, 30, 40, 60, 80, 50, 70, 30, 40, 60, 80, 50, 70, 30, 40, 0, 0, 0, 0, 0, 0]
      },
      {
        type: 'line',
        name: '3G话务量',
        smooth: true,
        symbol: 'circle',
        symbolSize: [8, 8],
        itemStyle: {
          normal: {
            color: '#0c3066',
            borderColor: '#00fefe',
            borderWidth: 2
          }
        },
        lineStyle: {
          normal: {
            color: '#00fefe'
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(0, 255, 255, 0.3)' // 0% 处的颜色
            }, {
              offset: 1,
              color: 'rgba(0, 255, 255, 0)' // 100% 处的颜色
            }], false)
          }
        },
        data: [60, 80, 50, 70, 30, 40, 60, 80, 50, 70, 30, 40, 60, 80, 50, 70, 30, 40, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  option2: {
    tooltip: {
      show: true,
      trigger: 'axis',
      confine: true,
      textStyle: {
        fontSize: 10
      },
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
      // formatter: function(params) {
      //   return params[0].name + '<br/>' + '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#fbed65;"></span>' + params[0].seriesName + ': ' + params[0].value + '<br/>' + '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#00fefe;"></span>' + params[1].seriesName + ': ' + params[1].value + '<br/>' + '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#33ff77;"></span>' + params[2].seriesName + ': ' + params[2].value;
      // }
    },
    grid: {
      show: false,
      left: 49,
      top: 35,
      right: 30,
      bottom: 60
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      // name: '(Mb)',
      // nameGap: 8,
      // nameLocation: 'start',
      nameTextStyle: {
        fontFamily: 'Microsoft YaHei',
        fontSize: 12,
        color: '#669eff'
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        margin: 20,
        interval: 0,
        fontFamily: 'Microsoft YaHei',
        fontSize: 12,
        color: '#669eff',
        formatter(value) {
          if (value && value.length > 16) {
            return value.substring(11, 13);
          } else {
            return value;
          }
        }
      },
      data: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
    },
    yAxis: {
      type: 'value',
      show: true,
      // min: 0,
      // max: 100,
      // interval: 20,
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        // showMinLabel: false,
        margin: 22,
        align: 'center',
        fontFamily: 'Microsoft YaHei',
        fontSize: 12,
        color: '#669eff',
        formatter: (value) => {
          if (value === 0) {
            return '(GB)'
          }
          return value;
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    series: [
      {
        type: 'line',
        name: '2G流量',
        smooth: true,
        symbol: 'circle',
        symbolSize: [8, 8],
        itemStyle: {
          normal: {
            color: '#0c3066',
            borderColor: '#fbed65',
            borderWidth: 2
          }
        },
        lineStyle: {
          normal: {
            color: '#fbed65'
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(255, 240, 102, 0.3)' // 0% 处的颜色
            }, {
              offset: 1,
              color: 'rgba(255, 240, 102, 0)' // 100% 处的颜色
            }], false)
          }
        },
        data: [60, 80, 50, 70, 30, 40, 60, 80, 50, 70, 30, 40, 60, 80, 50, 70, 30, 40, 0, 0, 0, 0, 0, 0]
      },
      {
        type: 'line',
        name: '3G流量',
        smooth: true,
        symbol: 'circle',
        symbolSize: [8, 8],
        itemStyle: {
          normal: {
            color: '#0c3066',
            borderColor: '#00fefe',
            borderWidth: 2
          }
        },
        lineStyle: {
          normal: {
            color: '#00fefe'
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(0, 255, 255, 0.3)' // 0% 处的颜色
            }, {
              offset: 1,
              color: 'rgba(0, 255, 255, 0)' // 100% 处的颜色
            }], false)
          }
        },
        data: [60, 80, 50, 70, 30, 40, 60, 80, 50, 70, 30, 40, 60, 80, 50, 70, 30, 40, 0, 0, 0, 0, 0, 0]
      },
      {
        type: 'line',
        name: '4G流量',
        smooth: true,
        symbol: 'circle',
        symbolSize: [8, 8],
        itemStyle: {
          normal: {
            color: '#0c3066',
            borderColor: '#33ff77',
            borderWidth: 2
          }
        },
        lineStyle: {
          normal: {
            color: '#33ff77'
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(51, 255, 119, 0.3)' // 0% 处的颜色
            }, {
              offset: 1,
              color: 'rgba(51, 255, 119, 0)' // 100% 处的颜色
            }], false)
          }
        },
        data: [60, 80, 50, 70, 30, 40, 60, 80, 50, 70, 30, 40, 60, 80, 50, 70, 30, 40, 0, 0, 0, 0, 0, 0]
      }
    ]
  }
}