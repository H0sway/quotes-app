// src/components/Quote.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Quote extends Component {
  constructor() {
    super();
    this.state = {
      quote: null,
      dataLoaded: false
    }
  }

  componentDidMount() {
    // Use string interpolation to get the id from the URL
    axios({
      method: 'GET',
      url: `/api/quotes/${this.props.match.params.id}`
    })
    .then(data => {
      this.setState({
        quote: data.data.data,
        dataLoaded: true
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  renderQuote() {
    const quote = this.state.quote;
    if (this.state.dataLoaded) {
      return (
        <div>
          <p>{quote.quote}</p>
          <p>{quote.author}</p>
        </div>
      )
    }
    else {
      return (
        <p>Loading...</p>
      )
    }
  }

  render() {
    return (
      <div className="Quote">
        <h3>I like this quote in particular</h3>
        {this.renderQuote()}
        <Link to="/">Back to Quotes</Link>
      </div>
    )
  }
};

export default Quote;
