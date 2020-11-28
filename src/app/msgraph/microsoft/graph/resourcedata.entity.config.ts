import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ResourceData } from './resourcedata.entity';
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
} as EntityConfig<ResourceData>;