import React from 'react';
import { Table } from 'react-bootstrap'

export default class CountryTable extends React.Component {

  render() {

    const countryData = this.props.data[0]

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>New Confirmed</th>
            <th>Total Confirmed</th>
            <th>New Deaths</th>
            <th>New Recovered</th>
            <th>Total Recovered</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{countryData.NewConfirmed}</td>
            <td>{countryData.NewConfirmed}</td>
            <td>{countryData.NewDeaths}</td>
            <td>{countryData.NewRecovered}</td>
            <td>{countryData.TotalRecovered}</td>
          </tr>
        </tbody>
      </Table>
    )
  }
}