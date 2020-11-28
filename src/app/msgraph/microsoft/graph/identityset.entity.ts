import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Identity } from './identity.entity';
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