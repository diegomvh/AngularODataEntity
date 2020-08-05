import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ResourceAccess } from './resourceaccess.entity';
//#endregion

export interface RequiredResourceAccess {
  //#region ODataApi Properties
  resourceAppId: string;
  resourceAccess: ResourceAccess[];
  //#endregion
}