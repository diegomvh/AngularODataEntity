import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ResourceData } from './resourcedata.entity';
//#endregion

export const ResourceDataConfig = {
  name: "ResourceData",
  open: true,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<ResourceData>;