import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Quote from './components/Quote';
import axios from 'axios';
import Footer from './components/Footer';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      quote: {}
    };
  }

  getQuote = () => {
    axios.get('https://splurty-tyler-porter.herokuapp.com/quotes.json')
      .then( (res) => this.setState({ quote: res.data }) )
      .catch( (err) => console.log(err.response.data) );
  }

  render() {
    const { quote } = this.state;

    return (
      <div className="App">
        <Nav />
        <Quote 
          getQuote={this.getQuote}
          quote={quote}
        />
        <Footer />
      </div>
    );
  }

}

export default App;
