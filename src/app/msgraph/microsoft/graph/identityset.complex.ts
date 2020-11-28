import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Identity } from './identity.complex';
import { IdentityModel } from './identity.model';
import { IdentityCollection } from './identity.collection';
//#endregion

export interface IdentitySet {
  //#region ODataApi Properties
  application?: Identity;
  device?: Identity;
  user?: Identity;
  //#endregion
}