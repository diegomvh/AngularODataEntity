﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OutgoingCallOptions } from './outgoingcalloptions.entity';
//#endregion

export const OutgoingCallOptionsConfig = {
  name: "OutgoingCallOptions",
  base: "microsoft.graph.callOptions",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<OutgoingCallOptions>;