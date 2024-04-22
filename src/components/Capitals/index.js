import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}
  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }
  getCountry = () => {
    const {activeCapitalId} = this.state
    const Obj = countryAndCapitalsList.find(each => each.id === activeCapitalId)
    console.log(Obj)
    return Obj.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry()
    return (
      <div className="bg_container">
        <div className="card_container">
          <h1 className="heading">Countries And Capitals</h1>
          <ul className="drop_down_container">
            <select onChange={this.onChangeCapital} value={activeCapitalId}>
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="text">is capital of which country?</p>
          </ul>
          <p className="text">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
