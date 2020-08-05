﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EmailAddress } from './emailaddress.entity';
//#endregion

export const EmailAddressConfig = {
  name: "EmailAddress",
  annotations: [],
  fields: {
    name: {type: 'Edm.String'},
    address: {type: 'Edm.String'}
  }
} as EntityConfig<EmailAddress>;