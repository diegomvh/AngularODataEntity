import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { IdentitySet } from './identityset.entity';
import { PublicationFacet } from './publicationfacet.entity';
import { IdentitySetModel } from './identityset.model';
import { PublicationFacetModel } from './publicationfacet.model';
import { EntityModel } from './entity.model';
import { IdentitySetCollection } from './identityset.collection';
import { PublicationFacetCollection } from './publicationfacet.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface BaseItemVersion extends Entity {
  //#region ODataApi Properties
  lastModifiedBy?: IdentitySet;
  lastModifiedDateTime?: Date;
  publication?: PublicationFacet;
  //#endregion
}