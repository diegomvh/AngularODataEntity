import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IdentitySet } from './identityset.complex';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export interface PlannerAssignment {
  //#region ODataApi Properties
  assignedBy?: IdentitySet;
  assignedDateTime?: Date;
  orderHint?: string;
  //#endregion
}