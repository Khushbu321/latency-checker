import React, { Component } from 'react';
import Chart from './Chart';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      hostValue: [],
      latency: {},
      data: {}
    }
    // this.onSelect();
  }

  componentDidMount(){

    const promises = [
      "www.google.com",
      "www.gmail.com",
      "www.twitter.com",
      "www.facebook.com"
    ].map((domain) => {
      return (
        fetch("/api/getData", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ hostValue: domain }), // body data type must match "Content-Type" header
        })
      );
    })

    Promise.all(promises).then(([res1, res2, res3, res4]) =>
    Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]))
    .then(([json1, json2, json3, json4]) => { this.makeObject(json1, json2, json3, json4) })

    // this.setState({
    //   hostValue: [
    //     "www.google.com",
    //     "www.gmail.com",
    //     "www.twitter.com",
    //     "www.facebook.com"
    //   ]
    // }, () => {
    //     var list = [];
    //     list = this.state.hostValue;
    //     if (list.length > 0) {
    //       list.map((host) => {
    //         this.onSubmit({ hostValue: host });
    //       })
    //     }
    // })
  }

  makeObject = (json1, json2, json3, json4) => {
    var finalList = {
      [json1.hostValue]: json1.latency,
      [json2.hostValue]: json2.latency,
      [json3.hostValue]: json3.latency,
      [json4.hostValue]: json4.latency
  }
  this.setState({
    data: finalList
  })
}
  // onSelect = () => {

  // }

  // setLatency = (data) => {
  //   if((this.state.hostValue).length){
  //     this.setState({
  //       hostValue: [data.hostValue],
  //       [data.hostValue]: data.latency
  //     })
  //   }
  // }

  // onSubmit = (val) => {
  //   var data = val;
  //   // var data = { hostValue : this.state.hostValue }
  //   fetch("/api/getData", {
  //     method: "POST", // *GET, POST, PUT, DELETE, etc.
  //     mode: "cors", // no-cors, cors, *same-origin
  //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: "same-origin", // include, *same-origin, omit
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(data), // body data type must match "Content-Type" header
  //   }).then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       this.setLatency(data);
  //     })
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <div className="App">
      {/* <div>Select Host</div> */}
      <div>
          {/* <select onChange={this.onSelect} value={this.state.hostValue}>
            <option value="www.google.com" label="Google">Google</option>
            <option value="www.twitter.com" label="Twitter">Twitter</option>
            <option value="www.gmail.com" label="Gmail">Gmail</option>
            <option value="www.facebook.com" label="Facebook">Facebook</option>
          </select> */}
          {/* <button value="www.google.com" label="Google" onClick={this.onSelect}>Google</button>
          <button value="www.twitter.com" label="Twitter" onClick={this.onSelect}>Twitter</button>
          <button value="www.gmail.com" label="Gmail" onClick={this.onSelect}>Gmail</button>
          <button value="www.facebook.com" label="Facebook" onClick={this.onSelect}>Facebook</button> */}
      </div>
       {/* <div><input type="submit" onClick = {this.onSubmit}/></div> */}
        <div style={{width: '80vw', height: "50vh" }}>
          <Chart data={this.state.data}/>
      </div>
      </div>);
  }
}

export default App;
