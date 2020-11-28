import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export interface PlannerExternalReference {
  //#region ODataApi Properties
  alias?: string;
  lastModifiedBy?: IdentitySet;
  lastModifiedDateTime?: Date;
  previewPriority?: string;
  type?: string;
  //#endregion
}