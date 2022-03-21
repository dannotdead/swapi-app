export default class SwapiService {

  apiBase = `https://swapi.dev/api`

  async getResources(url) {
    const res = await fetch(`${this.apiBase}${url}`)

    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}, received ${res.status}`)
    }

    return await res.json()
  }

  async getAllPeoples() {
    const res = await this.getResources(`/people/`)
    return res.results.map(this.transformPerson)
  }

  async getPerson(id) {
    const person = await this.getResources(`/people/${id}/`)
    return this.transformPerson(person)
  }

  async getAllPlanets() {
    const res = await this.getResources(`/planets/`)
    return res.results.map(this.transformPlanet)
  }

  async getPlanet(id) {
    const planet = await this.getResources(`/planets/${id}/`)
    return this.transformPlanet(planet)
  }

  async getAllStarships() {
    const res = await this.getResources(`/starships/`)
    return res.results.map(this.transformSpaceship)
  }

  async getStarship(id) {
    const spaceship = await this.getResources(`/starships/${id}/`)
    return this.transformSpaceship(spaceship)
  }

  extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/
    return item.url.match(idRegExp)[1]
  }

  transformPlanet(planet) {
    return {
      id: this.extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  transformPerson(person) {
    return {
      id: this.extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    }
  }

  transformSpaceship(spaceship) {
    return {
      id: this.extractId(spaceship),
      name: spaceship.name,
      model: spaceship.model,
      manufacturer: spaceship.manufacturer,
      costInCredits: spaceship.costInCredits,
      length: spaceship.length,
      crew: spaceship.crew,
      passengers: spaceship.passengers,
      cargoCapacity: spaceship.cargoCapacity
    }
  }
}