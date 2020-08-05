import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessDevicePlatform } from './conditionalaccessdeviceplatform.enum';
//#endregion

export interface ConditionalAccessPlatforms {
  //#region ODataApi Properties
  includePlatforms: ConditionalAccessDevicePlatform;
  excludePlatforms: ConditionalAccessDevicePlatform;
  //#endregion
}