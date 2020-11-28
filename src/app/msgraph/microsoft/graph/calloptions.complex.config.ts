import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { CallOptions } from './calloptions.complex';
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
} as StructuredTypeConfig<CallOptions>;