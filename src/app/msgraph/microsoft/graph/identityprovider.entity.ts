import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface IdentityProvider extends Entity {
  //#region ODataApi Properties
  type?: string;
  name?: string;
  clientId?: string;
  clientSecret?: string;
  //#endregion
}