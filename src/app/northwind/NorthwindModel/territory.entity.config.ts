import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Territory } from './territory.entity';
import { TerritoryModel } from './territory.model';
import { TerritoryCollection } from './territory.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const TerritoryConfig = {
  name: "Territory",
  model: TerritoryModel,
  collection: TerritoryCollection,
  annotations: [],
  fields: {
    TerritoryID: {type: 'Edm.String', key: true, ref: 'TerritoryID', nullable: false, maxLength: 20},
    TerritoryDescription: {type: 'Edm.String', nullable: false, maxLength: 50},
    RegionID: {type: 'Edm.Int32', nullable: false},
    Region: {type: 'NorthwindModel.Region', navigation: true, field: 'RegionID', ref: 'RegionID'},
    Employees: {type: 'NorthwindModel.Employee', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Territory>;
//#endregion