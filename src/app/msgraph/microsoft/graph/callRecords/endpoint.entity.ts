import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { UserAgent } from './useragent.entity';
import { UserAgentModel } from './useragent.model';
import { UserAgentCollection } from './useragent.collection';
//#endregion

export interface Endpoint {
  //#region ODataApi Properties
  userAgent?: UserAgent;
  //#endregion
}