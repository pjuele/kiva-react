// import logo from './logo.svg';
import React, { Component } from 'react';
import { RecoilRoot } from 'recoil';
import Intro from '../Intro';
import Loans from '../../containers/Loans';
import LoanCard from '../../components/LoanCard';
import logo from "./kiva-watch.png";
import './App.css';

// import 'whatwg-fetch';
// https://github.com/github/fetch
// npm install whatwg-fetch --save

class App extends Component {

  render() {
    return (
      <RecoilRoot>
        <div className="App" id="top">
          <header className="App-header">
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow">
              <div className="container-fluid">
                <a className="navbar-brand" href="#top">
                  <img src={logo} height="40rem" alt="Kiva Watch" className="shadow" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#top">Loans</a>
                    {/* <a className="nav-link" href="#top">Borrowers</a>
                    <a className="nav-link" href="#top">Countries</a> */}
                    <a className="nav-link text-success" href="https:\\kiva.org" target="_blank" tabIndex="-1" aria-disabled="true"><strong>Kiva website</strong></a>
                  </div>
                </div>
              </div>
            </nav>
          </header>

          <Intro message="Here you can find all your Kiva loans!" />
          <div className="row mt-5 p-2">
            <div className="col-12 col-md-7" id="ListColumn">
              <Loans />
            </div>
            <div className="col-12 col-md-5 pt-4" id="DetailsColumn">
              <LoanCard />
            </div>
          </div>
        </div>
      </RecoilRoot>
    );
  }
}

export default App;
