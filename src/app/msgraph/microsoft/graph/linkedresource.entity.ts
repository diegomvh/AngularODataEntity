import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface LinkedResource extends Entity {
  //#region ODataApi Properties
  applicationName?: string;
  displayName?: string;
  externalId?: string;
  webUrl?: string;
  //#endregion
}