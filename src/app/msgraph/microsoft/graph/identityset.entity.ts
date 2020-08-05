import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Identity } from './identity.entity';
//#endregion

export interface IdentitySet {
  //#region ODataApi Properties
  application?: Identity;
  device?: Identity;
  user?: Identity;
  //#endregion
}