import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface EducationTerm {
  //#region ODataApi Properties
  externalId?: string;
  startDate?: Date;
  endDate?: Date;
  displayName?: string;
  //#endregion
}