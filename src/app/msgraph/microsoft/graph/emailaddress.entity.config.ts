import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EmailAddress } from './emailaddress.entity';
import { EmailAddressModel } from './emailaddress.model';
import { EmailAddressCollection } from './emailaddress.collection';
//#endregion

export const EmailAddressConfig = {
  name: "emailAddress",
  model: EmailAddressModel,
  collection: EmailAddressCollection,
  annotations: [],
  fields: {
    address: {type: 'Edm.String'},
    name: {type: 'Edm.String'}
  }
} as EntityConfig<EmailAddress>;