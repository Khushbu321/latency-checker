import React from "react";
import { Line } from "react-chartjs-2";

const style = {
  lineChart: {
    width: '500 !important',
    height: '500 !important',
    border: '1px solid black'
  }
}
class Chart extends React.Component {
  constructor(props){
  super(props);

  this.state = {
    dataLine: {
      labels: [1, 2, 3, 4, 5, 6],
      datasets: [
        {
          label: null,
          // fill: false,
          // // lineTension:10,
          // backgroundColor: "rgba(75,192,192,0.4)",
          // borderColor: "rgba(75,192,192,1)",
          // borderCapStyle: "butt",
          // borderDash: [],
          // borderDashOffset: 0.0,
          // borderJoinStyle: "miter",
          // pointBorderColor: "rgba(75,192,192,1)",
          // pointBackgroundColor: "#fff",
          // pointBorderWidth: 1,
          // pointHoverRadius: 5,
          // pointHoverBackgroundColor: "rgba(75,192,192,1)",
          // pointHoverBorderColor: "rgba(220,220,220,1)",
          // pointHoverBorderWidth: 2,
          // pointRadius: 1,
          // pointHitRadius: 10,
          // data: []
        }]
      }
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps.data);
    // var setColor = null;
    // if (nextProps.data.hostValue == "www.google.com"){
    //   setColor = "rgba(0,132,152,1)"
    // }
    // else if (nextProps.data.hostValue == "www.gmail.com"){
    //   setColor = "rgba(9,219,2,1)"
    // }
    // else if (nextProps.data.hostValue == "www.twitter.com") {
    //   setColor = "rgba(0,62,892,1)"
    // }
    // else {
    //   setColor = "rgba(0,152,92,1)"
    // }
    // var colors = ["rgba(0,2,12,1)", "rgba(0,152,92,1)", "rgba(0,62,892,1)", "rgba(9,219,2,1)",
    //   , "rgba(5,15,92,1)", "rgba(3,22,189,1)", "rgba(2,119,112,4)"]
    // setColor = colors[Math.floor(Math.random() * colors.length)];
    // if (prevState.dataLine.datasets[0].label !== nextProps.data.hostValue ){
      var datasetsValue = [];
      Object.keys(nextProps.data).map((list) => {
        datasetsValue.push({
          label: list,
          fill: false,
          // lineTension: 10,
          backgroundColor: "rgba(5,15,92,1)",
          borderColor: "rgba(5,15,92,1)",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: nextProps.data[list]
        })
      })
      return {
        dataLine: {
          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          datasets: datasetsValue
        }
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className={style.lineChart}>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
      </div>
    );
  }
}

export default Chart;
