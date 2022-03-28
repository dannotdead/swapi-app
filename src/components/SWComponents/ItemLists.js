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

const PersonList = withSwapiService(
                     withData(ItemList),
                     mapPersonMethodsToProps
                   )

const PlanetList = withSwapiService(
                     withData(ItemList),
                     mapPlanetMethodsToProps
                   )

const StarshipList = withSwapiService(
                       withData(ItemList),
                       mapStarshipMethodsToProps
                     )

export {
  PersonList,
  PlanetList,
  StarshipList
}