import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Territory } from './territory.entity';
//#endregion

export const TerritoryConfig = {
  name: "Territory",
  annotations: [],
  fields: {
    TerritoryID: {type: 'Edm.String', key: true, ref: 'TerritoryID', nullable: false, maxLength: 20},
    TerritoryDescription: {type: 'Edm.String', nullable: false, maxLength: 50},
    RegionID: {type: 'Edm.Int32', nullable: false},
    Region: {type: 'NorthwindModel.Region', navigation: true, field: 'RegionID', ref: 'RegionID'},
    Employees: {type: 'NorthwindModel.Employee', collection: true, navigation: true}
  }
} as EntityConfig<Territory>;