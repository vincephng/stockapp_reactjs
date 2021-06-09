import React, { Component } from "react";
import "../style/home.css";
import history from "../routes/history";
import searchName from "../file/searchName.json";

class StockInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: "",
      warningInput: "",
      searchData: { searchName },
      result: [],
      suggestion: [],
    };
  }

  handleOnClick = (e) => {
    e.preventDefault();
    const array = this.state.result;
    const isValid = this.checkValid();
    if (isValid === true) {
      if (array.length === 0) {
        this.setState({
          warningInput: "Company is not found. Please Try Again.",
        });
      } else if (array.length > 0) {
        const symbol = array[0].symbol;
        history.push({ pathname: `/stock/${symbol}` });
      }
    }

    //  history.push({pathname: `/stock/${id}`})
  };

  handleOnChange = (event) => {
    const input = event.target.value;
    const filteredname = searchName.filter((id) =>
      id.name.toLowerCase().includes(input.toLowerCase())
    );
    const filtersymbol = searchName.filter((id) => {
      return id.symbol.toLowerCase() === input.toLowerCase();
    });

    if (filtersymbol.length === 1) {
      this.setState({ result: filtersymbol, suggestion: filtersymbol });
    } else {
      this.setState({
        result: filteredname,
        suggestion: filteredname.slice(0, 5),
      });
    }

    // this.comparation(filteredname,filtersymbol)}

    this.setState({ ticker: input });
    if (!input) {
      this.setState({ suggestion: [], warningInput: "" });
    }
    console.log(filteredname, filtersymbol);
  };
  handleOnKeyPress = (enter) => {
    if (enter.charCode === 13) {
      enter.preventDefault();
      //  this.handleOnClick()
    }
  };
  handleOnSubmit = (submit) => {
    submit.preventDefault();
  };

  //  comparation = (arrName,arrSymbol) =>{
  //    const nameLength = arrName.length
  //    const symbolLength = arrSymbol.length
  //    if(nameLength > 0 && symbolLength > 0 ){
  //      const min = Math.min(nameLength,symbolLength)
  //      if(nameLength == min){
  //       this.setState({result: arrName, suggestion: arrName.slice(0,5)})
  //      }else{
  //       this.setState({result: arrSymbol, suggestion: arrSymbol.slice(0,5)})}
  //    }else{
  //      const max = Math.max(nameLength,symbolLength)
  //      if(nameLength == max){
  //       this.setState({result: arrName,suggestion: arrName.slice(0,5)})
  //      }else{
  //       this.setState({result: arrSymbol,suggestion: arrSymbol.slice(0,5)})
  //      }
  //    }
  //    console.log(this.state.result)

  //  }

  checkValid = () => {
    const input = this.state.ticker;
    if (!/^([^0-9]*)$/i.test(input)) {
      // if(!/^[a-zA-Z]+$/.test(input)){
      // if(!/^[a-zA-Z]+$/i.test(input)){
      this.setState({
        warningInput: "Please input valid symbol",
        suggestion: [],
      });
    } else if (!input) {
      this.setState({ warningInput: "Input Required" });
    } else {
      this.setState({ warningInput: "" });
      return true;
    }
  };
  render() {
    const rec = this.state.suggestion;

    return (
      <>
        <div className="stock-search">
          <h1 className="stock-text">
            <a href="" onClick={this.handleOnClick}>
              Search
            </a>
          </h1>
          <form onSubmit={this.handleOnSubmit}>
            <input
              className="stock-input"
              type="text"
              onChange={this.handleOnChange}
              onKeyPress={this.handleOnKeyPress}
              placeholder="name or symbol"
            />
            <br />
            <div className="warning-text">{this.state.warningInput}</div>
          </form>
          {rec.map((each) => {
            return (
              <div className="suggestion" key={each.symbol}>
                {each.name} ({each.symbol})
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default StockInfo;
