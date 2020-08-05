﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SubscribeToToneOperation } from './subscribetotoneoperation.entity';
//#endregion

export const SubscribeToToneOperationConfig = {
  name: "subscribeToToneOperation",
  base: "microsoft.graph.commsOperation",
  open: true,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<SubscribeToToneOperation>;