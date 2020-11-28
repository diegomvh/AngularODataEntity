import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { EmailAddress } from './emailaddress.complex';
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
} as StructuredTypeConfig<EmailAddress>;