import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Territory } from './territory.entity';
import { TerritoryModel } from './territory.model';
import { TerritoryCollection } from './territory.collection';
//#endregion

export const TerritoryConfig = {
  name: "Territory",
  model: TerritoryModel,
  collection: TerritoryCollection,
  annotations: [],
  fields: {
    territoryID: {name: 'TerritoryID', type: 'Edm.String', key: true, ref: 'territoryID', nullable: false, maxLength: 20},
    territoryDescription: {name: 'TerritoryDescription', type: 'Edm.String', nullable: false, maxLength: 50},
    regionID: {name: 'RegionID', type: 'Edm.Int32', nullable: false},
    region: {name: 'Region', type: 'NorthwindModel.Region', navigation: true, field: 'RegionID', ref: 'RegionID'},
    employees: {name: 'Employees', type: 'NorthwindModel.Employee', collection: true, navigation: true}
  }
} as EntityConfig<Territory>;