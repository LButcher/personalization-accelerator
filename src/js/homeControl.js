
// Hardcoded filter values
export const defaultChart = [1,0,0,2,3,1,2, 1, 3, 5, 2, 3]
const formSubmitChart =     [0,0,0,1,1,1,0, 1, 3, 2, 2, 2];
const decMakerChart =       [1,0,0,1,2,0,2, 0, 0, 3, 0, 1];
const bothChart =           [0,0,0,0,0,1,1, 0, 0, 1, 1, 0];

var currentChart = 'defaultChart';

// Retrieve chart data given a chart filter combo
export function getChart(name){
    currentChart = name;
   var chartData;
    switch(name) {
        case 'formSubmitChart':
            chartData=formSubmitChart;
          break;
          case 'bothChart':
            chartData=bothChart;
          break;
          case 'decMakerChart':
            chartData=decMakerChart;
          break;
        default:
          chartData=defaultChart;
      }
      return {
        labels: ['May/20','Jun/20','Jul/20','Aug/20','Sep/20','Oct/20','Nov/20','Dec/20', 'Jan/21', 'Feb/21', 'Mar/21', 'Apr/21', 'May/21'],
        datasets: [
          {
            data: chartData,
            backgroundColor: [
                '#0229a5'
            ]
          },
        ],
      };
}

  export const pieData = {
    labels: [
    'Won',
      'Lost'
    ],
    datasets: [{
      data: [Math.round(getChartTotal()/2), getChartTotal()-Math.round(getChartTotal()/2)],
      backgroundColor: [
        '#00fdff',
        '#3504bc'
      ],
      hoverOffset: 4
    }]
  };


  // Home Chart rendering and display options
  export const chartOptions = { plugins: {legend: {display: false}},scales: {
    yAxes: {
       grid: {
          lineWidth: 0
       },
       ticks: {
        stepSize: 1.0
    }
    },
}}

    export const pieChartOptions = { plugins: {legend: {display: false}},maintainAspectRatio: false,circumference:180,rotation:270,cutout: '85%'};


export function getChartTotal(){
    return getChart(currentChart).datasets[0].data.reduce((a, b) => a + b, 0);
}