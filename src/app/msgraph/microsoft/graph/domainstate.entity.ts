import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface DomainState {
  //#region ODataApi Properties
  lastActionDateTime?: Date;
  operation?: string;
  status?: string;
  //#endregion
}