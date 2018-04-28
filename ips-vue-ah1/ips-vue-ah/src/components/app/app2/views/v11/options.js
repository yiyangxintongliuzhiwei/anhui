export default {
  option1: {
    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        radius: '100%',
        min: 0,
        max: 7,
        splitNumber: 7,
        axisLine: {
          show: true,
          lineStyle: {
            color: [[0.2, '#33ff77'], [0.8, '#00aacc'], [1, '#ff5252']],
            width: 10
          }
        },
        splitLine: {
          show: true,
          length: 15,
          lineStyle: {
            color: 'auto',
            width: 2
          }
        },
        axisTick: {
          show: true,
          length: 12,
          lineStyle: {
            color: 'auto'
          }
        },
        axisLabel: {
          fontFamily: 'MF_LangQian',
          fontSize: 8,
          color: '#c2daff'
        },
        pointer: {
          show: true,
          length: 60,
          width: 5
        },
        itemStyle: {
          normal: {
            color: '#99c2ff'
          }
        },
        detail: {
          show: false
        },
        data: [2.98]
      }
    ]
  },
  option2: {
    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        radius: '100%',
        min: 0,
        max: 100,
        splitNumber: 5,
        axisLine: {
          show: true,
          lineStyle: {
            color: [[0.2, '#ff5252'], [0.8, '#00aacc'], [1, '#33ff77']],
            width: 10
          }
        },
        splitLine: {
          show: true,
          length: 15,
          lineStyle: {
            color: 'auto',
            width: 2
          }
        },
        axisTick: {
          show: true,
          length: 12,
          lineStyle: {
            color: 'auto'
          }
        },
        axisLabel: {
          fontFamily: 'MF_LangQian',
          fontSize: 8,
          color: '#c2daff'
        },
        pointer: {
          show: true,
          length: 60,
          width: 5
        },
        itemStyle: {
          normal: {
            color: '#99c2ff'
          }
        },
        detail: {
          show: false
        },
        data: [98.37]
      }
    ]
  }
}