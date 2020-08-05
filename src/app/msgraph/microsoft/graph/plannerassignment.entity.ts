import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
//#endregion

export interface PlannerAssignment {
  //#region ODataApi Properties
  assignedBy?: IdentitySet;
  assignedDateTime?: Date;
  orderHint?: string;
  //#endregion
}