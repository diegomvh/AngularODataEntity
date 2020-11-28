import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CallOptions } from './calloptions.entity';
import { CallOptionsModel } from './calloptions.model';
import { CallOptionsCollection } from './calloptions.collection';
//#endregion

export const CallOptionsConfig = {
  name: "callOptions",
  model: CallOptionsModel,
  collection: CallOptionsCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<CallOptions>;