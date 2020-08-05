import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
//#endregion

export interface PlannerExternalReference {
  //#region ODataApi Properties
  alias?: string;
  type?: string;
  previewPriority?: string;
  lastModifiedBy?: IdentitySet;
  lastModifiedDateTime?: Date;
  //#endregion
}