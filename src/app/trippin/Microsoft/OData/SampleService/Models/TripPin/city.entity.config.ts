import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { City } from './city.entity';
//#endregion

export const CityConfig = {
  name: "City",
  annotations: [],
  fields: {
    countryRegion: {name: 'CountryRegion', type: 'Edm.String', nullable: false},
    name: {name: 'Name', type: 'Edm.String', nullable: false},
    region: {name: 'Region', type: 'Edm.String', nullable: false}
  }
} as EntityConfig<City>;