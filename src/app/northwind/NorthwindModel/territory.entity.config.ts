import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Territory } from './territory.entity';
import { TerritoryModel } from './territory.model';
import { TerritoryCollection } from './territory.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const TerritoryEntityConfig = {
  name: "Territory",
  model: TerritoryModel,
  collection: TerritoryCollection,
  keys: [{ref: 'TerritoryID'}],
  fields: {
    TerritoryID: {type: 'Edm.String', nullable: false, maxLength: 20},
    TerritoryDescription: {type: 'Edm.String', nullable: false, maxLength: 50},
    RegionID: {type: 'Edm.Int32', nullable: false},
    Region: {type: 'NorthwindModel.Region', navigation: true, referential: 'RegionID', referenced: 'RegionID'},
    Employees: {type: 'NorthwindModel.Employee', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Territory>;
//#endregion