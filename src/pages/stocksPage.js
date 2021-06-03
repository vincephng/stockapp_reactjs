import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/stockPage.css";
import { stock } from "../resources/stock";
import ErrorPage from "../pages/ErrorPage";
import Chart from "../component/Chart";
import News from "../component/News";
import AddStock from "../component/AddStock";

class StocksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      err: {},
      key: this.props.match.params.id,
      isValid: false,
    };
  }
  // arrow function
  progressData = (res) => {
    if (res.symbol) {
      this.setState({ data: res });
    } else {
      this.setState({ err: res });
    }
    // console.log(res);
  };
  componentDidMount = async() => {
    stock.callApi(this.state.key, this.progressData);
    const user = await localStorage.getItem("UserData")
    if(user){this.setState({isValid: true})}
    // console.log(user,this.state.isValid)
  };
  render() {
    let errInfo = this.state.err;
    const dataInfo = this.state.data;

    if (dataInfo != null) {
      return (
          <div className = "wrap">
          <div className="top-bnt">
          <a href="/"> &#5176;&#5176; Back </a>
          { this.state.isValid? <a className="account-btn" href="/user/home"> / Account &#5171;&#5171;</a> : null}
          </div>
          <div className="container">
            <div className="title">
            <h1>
              {this.state.data.nameCompany} ({this.state.data.symbol})
            </h1>
            { this.state.isValid? <AddStock symbol={this.state.key}/> : null}
            </div>
            <div className="info-board">
              <ul>
                <strong>Latest Price: </strong>
                <b>{dataInfo.latestPrice}</b>
                <br />
                <strong>Previous Close: </strong>
                <b>{dataInfo.previousClose}</b>
                <br />
                <strong>Percent Change:</strong>
                {this.state.data.percentChange < 0 ? (
                  <b className="percent-red">
                    &#9660; {this.state.data.percentChange} %
                  </b>
                ) : (
                  <b className="percent-green">
                    {" "}
                    &#9650; {this.state.data.percentChange} %
                  </b>
                )}
                <br />
                <strong>Market Cap: </strong> <b>{dataInfo.marketCap}</b>
                <br />
                <strong>Avg Volume: </strong>
                <b>{dataInfo.avgVolume}</b>
                <br />
                <strong>52wk High: </strong>
                <b>{dataInfo.wksHigh}</b>
                <br />
                <strong>52wk Low: </strong> <b>{dataInfo.wksLow}</b>
                <br />
              </ul>
            </div>
            <br />
            <div className="chart-section">
              <header>
                <h3>Price In a Last Month</h3>
              </header>
              <Chart symbol={this.state.key} />
            </div>
            <div className="news-section">
              <h1>Today News</h1>
              <News ticker={this.state.key} />
            </div>
          </div>
        </div>
        
      );
    } else {
      return <ErrorPage err={errInfo} />;
      //    history.push({pathname: '/error', state: {err: this.state.err}})
      //    return null
      //     return(            <div class="d-flex justify-content-center align-items-center" id="main">
      //     <h1 class="mr-3 pr-3 align-top border-right inline-block align-content-center">{errInfo.status}</h1>
      //     <div class="inline-block align-middle">
      //     <h2 class="font-weight-normal lead" id="desc">The page you requested was .</h2>
      //     <button className='back-home' onClick={() =>(history.push('/')) }>Back to Home</button>
      //     </div>

      //  </div>);
    }
  }
}

export default StocksPage;
