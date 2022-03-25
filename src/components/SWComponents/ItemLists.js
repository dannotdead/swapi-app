import React from 'react';
import ItemList from '../ItemList';
import { withData } from '../HOCHelpers'
import SwapiService from '../../services/swapiService';

const swapiService = new SwapiService()

const {
  getAllPeoples,
  getAllPlanets,
  getAllStarships
} = swapiService

const PersonList = withData(ItemList, getAllPeoples)

const PlanetList = withData(ItemList, getAllPlanets)

const StarshipList = withData(ItemList, getAllStarships)

export {
  PersonList,
  PlanetList,
  StarshipList
}