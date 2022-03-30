import React from 'react';
import ItemList from '../ItemList';
import { withData, withSwapiService, compose } from '../HOCHelpers'

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

const PersonList = compose(
                     withSwapiService(mapPersonMethodsToProps),
                     withData
                   )(ItemList)

const PlanetList = compose(
                     withSwapiService(mapPlanetMethodsToProps),
                     withData
                   )(ItemList)

const StarshipList = compose(
                       withSwapiService(mapStarshipMethodsToProps),
                       withData
                     )(ItemList)

export {
  PersonList,
  PlanetList,
  StarshipList
}