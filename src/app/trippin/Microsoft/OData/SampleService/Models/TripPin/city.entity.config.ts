import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { City } from './city.entity';
//#endregion

export const CityConfig = {
  name: "City",
  annotations: [],
  fields: {
    CountryRegion: {type: 'Edm.String', nullable: false},
    Name: {type: 'Edm.String', nullable: false},
    Region: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<City>;