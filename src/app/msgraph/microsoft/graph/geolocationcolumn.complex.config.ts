import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { GeolocationColumn } from './geolocationcolumn.complex';
import { GeolocationColumnModel } from './geolocationcolumn.model';
import { GeolocationColumnCollection } from './geolocationcolumn.collection';
//#endregion

export const GeolocationColumnConfig = {
  name: "geolocationColumn",
  model: GeolocationColumnModel,
  collection: GeolocationColumnCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<GeolocationColumn>;