import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export interface PlannerChecklistItem {
  //#region ODataApi Properties
  isChecked?: boolean;
  lastModifiedBy?: IdentitySet;
  lastModifiedDateTime?: Date;
  orderHint?: string;
  title?: string;
  //#endregion
}