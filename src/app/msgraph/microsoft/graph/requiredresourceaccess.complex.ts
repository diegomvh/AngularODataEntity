import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ResourceAccess } from './resourceaccess.complex';
import { ResourceAccessModel } from './resourceaccess.model';
import { ResourceAccessCollection } from './resourceaccess.collection';
//#endregion

export interface RequiredResourceAccess {
  //#region ODataApi Properties
  resourceAccess: ResourceAccess[];
  resourceAppId: string;
  //#endregion
}