import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Recipient } from './recipient.entity';
//#endregion

export const RecipientConfig = {
  name: "Recipient",
  annotations: [],
  fields: {
    emailAddress: {type: 'graph.emailAddress'}
  }
} as EntityConfig<Recipient>;