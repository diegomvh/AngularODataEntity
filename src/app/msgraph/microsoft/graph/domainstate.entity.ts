import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface DomainState {
  //#region ODataApi Properties
  status?: string;
  operation?: string;
  lastActionDateTime?: Date;
  //#endregion
}