import React from 'react';
import axios from 'axios';
import CountryTable from './CountryTable'
import { Form } from 'react-bootstrap'
import './Covid.css'

export default class PersonList extends React.Component {
  state = {
    summary: [],
    selectedCountryData: {}
  }

  componentDidMount() {
    axios.get('https://api.covid19api.com/summary')
      .then(res => {
        this.setState({ summary: res.data['Countries'] });
      })
  }

  setCountry(selectedCountry) {
    const filteredData = this.state.summary.filter(data => data.Country === selectedCountry)
    this.setState({ selectedCountryData: filteredData })
  }

  render() {
    return (
      <div id='main-div'>
        <h1>Covid Data</h1>
        <Form.Select
          id='select'
          onChange={event => this.setCountry(event.target.value)}
        >
          <option>Select Country</option>
          { this.state.summary.map((item, index) => (
            <option key={`item-${index}`}>{item.Country}</option>
          ))}
        </Form.Select>
        { Object.keys(this.state.selectedCountryData).length > 0 && (
          <CountryTable
            data={this.state.selectedCountryData}
          />
        )}
        
      </div>
    )
  }
}