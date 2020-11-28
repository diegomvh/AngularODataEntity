import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { GeolocationColumn } from './geolocationcolumn.entity';
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
} as EntityConfig<GeolocationColumn>;