import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Quote from './components/Quote';
import axios from 'axios';
import Footer from './components/Footer';
import Form from './components/Form';
import urlFor from './helpers/urlFor';
import About from './components/About';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      quote: {},
      showForm: false,
      showAbout: false,
    };
  }

  getQuote = () => {
    axios.get(urlFor('quotes.json'))
      .then( (res) => this.setState({ quote: res.data }) )
      .catch( (err) => console.log(err.response.data) );
  }

  createQuote = (data) => {
    axios.post(urlFor('quotes.json'), data)
      .then( (res) => console.log(res.data) )
      .catch( (err) => console.log(err.response.data) );

    this.toggleShowForm();
  }

  toggleShowForm = () => {
    if (!this.state.showForm) {
      this.setState({
        showForm: true,
        showAbout: false
      });
    } else {
      this.setState({
        showForm: false,
        showAbout: false
      });
    }
  }

  toggleShowAbout = () => {
    if (!this.state.showAbout) {
      this.setState({
        showAbout: true,
        showForm: false
      });
    } else {
      this.setState({
        showAbout: false,
        showForm: false
      });
    }
  }

  goBack = () => {
    this.setState({
      showAbout: false,
      showForm: false
    });
  }

  render() {
    const { quote, showForm, showAbout } = this.state;

    return (
      <div className="App">
        <div className="content-box">
          <Nav 
            toggleShowForm={this.toggleShowForm}
            toggleShowAbout={this.toggleShowAbout}
            showAbout={this.state.showAbout}
            showForm={this.state.showForm}
            goBack={this.goBack}
          />
          { showAbout ? 
            <About />
            :
            showForm ? 
              <Form 
                toggleShowForm={this.toggleShowForm}
                createQuote={this.createQuote}
              /> 
              :
              <Quote 
                getQuote={this.getQuote}
                quote={quote}
              />
          }
        </div>
        <Footer getQuote={this.getQuote} />
      </div>
    );
  }

}

export default App;
