// src/components/Home.js

// Import react
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Axios for making GET requests
import axios from 'axios';

class Home extends Component {
  constructor() {
    super();
    // Define state
    this.state = {
      quotes: [],
      dataLoaded: false
    }
  }

  // Is called when the component succesfully loads
  componentDidMount() {
    // GET request to our server
    axios({
      method: 'GET',
      url: '/api/quotes'
    })
    // Saves the data to state. Only way to change the state is with setState
    .then(data => {
      console.log(data.data.data);
      this.setState({
        quotes: data.data.data,
        dataLoaded: true
      });
    })
    // logs an error
    .catch(err => {
      console.log(err);
    });
  }

  renderQuotes() {
    if (this.state.dataLoaded) {
      return this.state.quotes.map(quote => {
        return (
          <div key={quote.id}>
            <Link to={`/${this.props.match.params.id}`}>{quote.quote}</Link>
            <p>{quote.author}</p>
          </div>
        )
      })
    }
    else {
      <p>Loading...</p>
    }
  }

  render() {
    return (
      <div className="Home">
        <h3>These are my favorite quotes</h3>
        {this.renderQuotes()}
      </div>
    )
  }
};

export default Home;
