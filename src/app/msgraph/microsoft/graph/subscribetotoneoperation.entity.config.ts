import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SubscribeToToneOperation } from './subscribetotoneoperation.entity';
import { SubscribeToToneOperationModel } from './subscribetotoneoperation.model';
import { SubscribeToToneOperationCollection } from './subscribetotoneoperation.collection';
//#endregion

export const SubscribeToToneOperationConfig = {
  name: "subscribeToToneOperation",
  base: "microsoft.graph.commsOperation",
  open: true,
  model: SubscribeToToneOperationModel,
  collection: SubscribeToToneOperationCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<SubscribeToToneOperation>;