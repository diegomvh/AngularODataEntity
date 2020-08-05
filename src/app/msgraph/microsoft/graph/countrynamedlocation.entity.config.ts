import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CountryNamedLocation } from './countrynamedlocation.entity';
//#endregion

export const CountryNamedLocationConfig = {
  name: "countryNamedLocation",
  base: "microsoft.graph.namedLocation",
  annotations: [],
  fields: {
    countriesAndRegions: {type: 'Edm.String', nullable: false, collection: true},
    includeUnknownCountriesAndRegions: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<CountryNamedLocation>;