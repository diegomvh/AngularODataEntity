import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { CountryNamedLocation } from './countrynamedlocation.entity';
import { CountryNamedLocationModel } from './countrynamedlocation.model';
import { CountryNamedLocationCollection } from './countrynamedlocation.collection';
//#endregion

export const CountryNamedLocationConfig = {
  name: "countryNamedLocation",
  base: "microsoft.graph.namedLocation",
  model: CountryNamedLocationModel,
  collection: CountryNamedLocationCollection,
  annotations: [],
  fields: {
    countriesAndRegions: {type: 'Edm.String', nullable: false, collection: true},
    includeUnknownCountriesAndRegions: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<CountryNamedLocation>;