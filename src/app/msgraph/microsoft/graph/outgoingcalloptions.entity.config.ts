import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OutgoingCallOptions } from './outgoingcalloptions.entity';
import { OutgoingCallOptionsModel } from './outgoingcalloptions.model';
import { OutgoingCallOptionsCollection } from './outgoingcalloptions.collection';
//#endregion

export const OutgoingCallOptionsConfig = {
  name: "outgoingCallOptions",
  base: "microsoft.graph.callOptions",
  model: OutgoingCallOptionsModel,
  collection: OutgoingCallOptionsCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<OutgoingCallOptions>;