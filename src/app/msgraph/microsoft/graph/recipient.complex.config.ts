import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Recipient } from './recipient.complex';
import { RecipientModel } from './recipient.model';
import { RecipientCollection } from './recipient.collection';
//#endregion

export const RecipientConfig = {
  name: "recipient",
  model: RecipientModel,
  collection: RecipientCollection,
  annotations: [],
  fields: {
    emailAddress: {type: 'graph.emailAddress'}
  }
} as StructuredTypeConfig<Recipient>;