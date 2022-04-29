//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { City } from './city.complex';
import { CityModel } from './city.model';
import { CityCollection } from './city.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CityComplexConfig = {
  name: 'City',
  model: CityModel,
  collection: CityCollection,
  fields: {
    CountryRegion: {type: 'Edm.String', nullable: false},
    Name: {type: 'Edm.String', nullable: false},
    Region: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<City>;
//#endregion