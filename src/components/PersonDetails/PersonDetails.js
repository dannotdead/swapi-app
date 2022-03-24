import React, { Component } from 'react'

import SwapiService from '../../services/swapiService'

import './PersonDetails.css'
import Spinner from '../Spinner'


class PersonDetails extends Component {

  swapiService = new SwapiService()

  state = {
    person: null,
    loading: true
  }

  componentDidMount() {
    this.updatePerson()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson()
    }
  }

  onPersonLoaded = (person) => {
    this.setState({
      person,
      loading: false
    })
  }

  updatePerson() {
    const { personId } = this.props

    if (!personId) {
      return
    }

    this.swapiService
        .getPerson(personId)
        .then(this.onPersonLoaded)
  }

  render() {

    if (!this.state.person) {
      return <span>Select a person from a list</span>
    }

    const { person, loading } = this.state
    const spinner = loading ? <Spinner /> : null
    const content = !loading ? <PersonView person={person} /> : null

    return (
        <div className='container d-flex person'>
          { spinner }
          { content }
        </div>
    );
  }
}

const PersonView = ({ person }) => {
  const { id, name, gender, birthYear, eyeColor } = person

  return (
    <>
      <div className='col-4'>
        <img
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            alt='character'
        />
      </div>

      <div className='col-8'>
        <h4 className='text-light'>{ name }</h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span>Gender: </span>
            <span>{ gender }</span>
          </li>
          <li className='list-group-item'>
            <span>Birth Year: </span>
            <span>{ birthYear }</span>
          </li>
          <li className='list-group-item'>
            <span>Eye Color: </span>
            <span>{ eyeColor }</span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default PersonDetails;