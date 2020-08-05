import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { UserAgent } from './useragent.entity';
//#endregion

export interface Endpoint {
  //#region ODataApi Properties
  userAgent?: UserAgent;
  //#endregion
}