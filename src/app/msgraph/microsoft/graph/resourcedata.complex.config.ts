import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ResourceData } from './resourcedata.complex';
import { ResourceDataModel } from './resourcedata.model';
import { ResourceDataCollection } from './resourcedata.collection';
//#endregion

export const ResourceDataConfig = {
  name: "resourceData",
  open: true,
  model: ResourceDataModel,
  collection: ResourceDataCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<ResourceData>;