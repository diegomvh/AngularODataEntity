//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Territory } from './territory.entity';
import { TerritoryModel } from './territory.model';
import { TerritoryCollection } from './territory.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TerritoryEntityConfig = {
  name: 'Territory',
  model: TerritoryModel,
  collection: TerritoryCollection,
  keys: [{name: 'TerritoryID'}],
  fields: {
    TerritoryID: {type: 'Edm.String', nullable: false},
    TerritoryDescription: {type: 'Edm.String'},
    RegionID: {type: 'Edm.Int32', nullable: false},
    Region: {type: 'NorthwindModel.Region', navigation: true},
    Employees: {type: 'NorthwindModel.Employee', collection: true, navigation: true}
  }
} as StructuredTypeConfig;
//#endregion