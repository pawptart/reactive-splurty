import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Quote from './components/Quote';
import axios from 'axios';
import Footer from './components/Footer';
import Form from './components/Form';
import urlFor from './helpers/urlFor';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      quote: {},
      showForm: false
    };
  }

  getQuote = () => {
    axios.get(urlFor('quotes.json'))
      .then( (res) => this.setState({ quote: res.data }) )
      .catch( (err) => console.log(err.response.data) );
  }

  toggleShowForm = () => {
    if (!this.state.showForm) {
      this.setState({
        showForm: true
      });
    } else {
      this.setState({
        showForm: false
      });
    }
  }

  render() {
    const { quote, showForm } = this.state;

    return (
      <div className="App">
        <Nav toggleShowForm={this.toggleShowForm}/>
        { showForm ? 
          <Form toggleShowForm={this.toggleShowForm}/> 
          :
          <Quote 
            getQuote={this.getQuote}
            quote={quote}
          />
        }
        <Footer getQuote={this.getQuote} />
      </div>
    );
  }

}

export default App;
