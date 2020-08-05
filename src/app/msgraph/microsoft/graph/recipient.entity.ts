import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { EmailAddress } from './emailaddress.entity';
//#endregion

export interface Recipient {
  //#region ODataApi Properties
  emailAddress?: EmailAddress;
  //#endregion
}