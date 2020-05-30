import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { City } from './city.entity';
//#endregion

export const CityEntityConfig = {
  name: "City",
  annotations: [],
  fields: {
    CountryRegion: {type: 'string', nullable: false},
    Name: {type: 'string', nullable: false},
    Region: {type: 'string', nullable: false}
  }
} as EntityConfig<City>;