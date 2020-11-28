import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Recipient } from './recipient.entity';
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
} as EntityConfig<Recipient>;