export default {
  option1: {
    color: ['#f6b37f', '#5a5ae0', '#e0d35a', '#33ff77', '#66e5ff'],
    series: [
      {
        type: 'pie',
        radius: [45, 70],
        center: [159, 199],
        silent: true,
        // minAngle: 5,
        grid: {
          containLabel: true
        },
        label: {
          normal: {
            show: true,
            formatter: '{c}%',
            color: '#fff',
            fontFamily: 'Microsoft Yahei',
            fontSize: 16
          }
        },
        labelLine: {
          normal: {
            show: true,
            lineStyle: {
              color: 'rgba(194, 216, 255, 0.4)'
            }
          }
        },
        itemStyle: {
          normal: {
            borderWidth: 5,
            borderColor: 'rgba(12, 38, 72, 1)'
          }
        },
        data: [17, 5, 15, 20, 41]
      }
    ]
  }
}