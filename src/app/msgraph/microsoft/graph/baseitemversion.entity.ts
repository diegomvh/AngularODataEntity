import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { IdentitySet } from './identityset.entity';
import { PublicationFacet } from './publicationfacet.entity';
//#endregion

export interface BaseItemVersion extends Entity {
  //#region ODataApi Properties
  lastModifiedBy?: IdentitySet;
  lastModifiedDateTime?: Date;
  publication?: PublicationFacet;
  //#endregion
}