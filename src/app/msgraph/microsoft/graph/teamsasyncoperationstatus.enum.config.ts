import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamsAsyncOperationStatus } from './teamsasyncoperationstatus.enum';
//#endregion

export const TeamsAsyncOperationStatusConfig = {
  name: "TeamsAsyncOperationStatus",
  members: TeamsAsyncOperationStatus
} as EnumConfig<TeamsAsyncOperationStatus>;