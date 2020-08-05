import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { BaseItemVersion } from './baseitemversion.entity';
//#endregion

export interface DriveItemVersion extends BaseItemVersion {
  //#region ODataApi Properties
  content?: any;
  size?: number;
  //#endregion
}