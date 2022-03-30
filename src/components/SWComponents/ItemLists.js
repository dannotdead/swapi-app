import React from 'react';
import ItemList from '../ItemList';
import { withData, withSwapiService } from '../HOCHelpers'

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeoples
  }
}

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
}

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
}

const PersonList = withSwapiService(mapPersonMethodsToProps)(
                    withData(ItemList))

const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
                    withData(ItemList))

const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
                      withData(ItemList))

export {
  PersonList,
  PlanetList,
  StarshipList
}