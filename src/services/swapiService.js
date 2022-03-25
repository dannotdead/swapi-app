export default class SwapiService {

  apiBase = `https://swapi.dev/api`
  imageBase = `https://starwars-visualguide.com/assets/img`

  getResources = async (url) => {
    const res = await fetch(`${this.apiBase}${url}`)

    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}, received ${res.status}`)
    }

    return await res.json()
  }

  getAllPeoples = async () => {
    const res = await this.getResources(`/people/`)
    return res.results.map(this.transformPerson)
  }

  getPerson = async (id) => {
    const person = await this.getResources(`/people/${id}/`)
    return this.transformPerson(person)
  }

  getAllPlanets = async () => {
    const res = await this.getResources(`/planets/`)
    return res.results.map(this.transformPlanet)
  }

  getPlanet = async (id) => {
    const planet = await this.getResources(`/planets/${id}/`)
    return this.transformPlanet(planet)
  }

  getAllStarships = async () => {
    const res = await this.getResources(`/starships/`)
    return res.results.map(this.transformSpaceship)
  }

  getStarship = async (id) => {
    const spaceship = await this.getResources(`/starships/${id}/`)
    return this.transformSpaceship(spaceship)
  }

  getPersonImage = ({ id }) => {
    return `${this.imageBase}/characters/${id}.jpg`
  }

  getStarshipImage = ({ id }) => {
    return `${this.imageBase}/starships/${id}.jpg`
  }

  getPlanetImage = ({ id }) => {
    return `${this.imageBase}/planets/${id}.jpg`
  }

  extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/
    return item.url.match(idRegExp)[1]
  }

  transformPlanet = (planet) => {
    return {
      id: this.extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  transformPerson = (person) => {
    return {
      id: this.extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }

  transformSpaceship = (spaceship) => {
    return {
      id: this.extractId(spaceship),
      name: spaceship.name,
      model: spaceship.model,
      manufacturer: spaceship.manufacturer,
      costInCredits: spaceship.cost_in_credits,
      length: spaceship.length,
      crew: spaceship.crew,
      passengers: spaceship.passengers,
      cargoCapacity: spaceship.cargo_capacity
    }
  }
}