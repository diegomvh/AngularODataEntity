import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamsAsyncOperationType } from './teamsasyncoperationtype.enum';
//#endregion

export const TeamsAsyncOperationTypeConfig = {
  name: "teamsAsyncOperationType",
  members: TeamsAsyncOperationType
} as EnumTypeConfig<TeamsAsyncOperationType>;