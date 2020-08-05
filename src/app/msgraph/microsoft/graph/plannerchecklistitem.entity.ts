import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
//#endregion

export interface PlannerChecklistItem {
  //#region ODataApi Properties
  isChecked?: boolean;
  title?: string;
  orderHint?: string;
  lastModifiedBy?: IdentitySet;
  lastModifiedDateTime?: Date;
  //#endregion
}