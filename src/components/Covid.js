import React from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap'

export default class PersonList extends React.Component {
  state = {
    apiList: []
  }

  componentDidMount() {
    axios.get('https://api.covid19api.com')
      .then(res => {
        const apiList = [];
        for (let api in res.data) {
          apiList.push(res.data[api])
        }
        this.setState({ apiList });
        console.log(apiList)
      })
  }

  render() {
    return (
      <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        { this.state.apiList.map((item, index) => (
          <option key={`item-${index}`}>{item.Name}</option>
        ))}
      </Form.Select>
    )
  }
}