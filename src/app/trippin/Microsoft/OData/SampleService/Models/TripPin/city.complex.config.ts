import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { City } from './city.complex';
import { CityModel } from './city.model';
import { CityCollection } from './city.collection';
//#endregion

export const CityConfig = {
  name: "City",
  model: CityModel,
  collection: CityCollection,
  annotations: [],
  fields: {
    CountryRegion: {type: 'Edm.String', nullable: false},
    Name: {type: 'Edm.String', nullable: false},
    Region: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<City>;