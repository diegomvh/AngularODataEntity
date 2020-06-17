import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { City } from './city.entity';
//#endregion

export const CityConfig = {
  name: "City",
  annotations: [],
  fields: {
    CountryRegion: {type: 'String', nullable: false},
    Name: {type: 'String', nullable: false},
    Region: {type: 'String', nullable: false}
  }
} as EntityConfig<City>;