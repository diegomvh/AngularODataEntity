import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface IdentityProvider extends Entity {
  //#region ODataApi Properties
  clientId?: string;
  clientSecret?: string;
  name?: string;
  type?: string;
  //#endregion
}