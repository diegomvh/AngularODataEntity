import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { EmailAddress } from './emailaddress.complex';
import { EmailAddressModel } from './emailaddress.model';
import { EmailAddressCollection } from './emailaddress.collection';
//#endregion

export interface Recipient {
  //#region ODataApi Properties
  emailAddress?: EmailAddress;
  //#endregion
}