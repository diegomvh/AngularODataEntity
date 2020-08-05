import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { GeolocationColumn } from './geolocationcolumn.entity';
//#endregion

export const GeolocationColumnConfig = {
  name: "geolocationColumn",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<GeolocationColumn>;