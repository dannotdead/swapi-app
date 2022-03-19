class SwapiService {

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
    return res.results
  }

  getPerson(id) {
    return this.getResources(`/people/${id}/`)
  }

  async getAllPlanets() {
    const res = await this.getResources(`/planet/`)
    return res.results
  }

  getPlanet(id) {
    return this.getResources(`/planet/${id}/`)
  }

  async getAllStarships() {
    const res = await this.getResources(`/starships/`)
    return res.results
  }

  getStarship(id) {
    return this.getResources(`/starships/${id}/`)
  }
}