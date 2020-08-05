import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessDevicePlatform } from './conditionalaccessdeviceplatform.enum';
//#endregion

export const ConditionalAccessDevicePlatformConfig = {
  name: "conditionalAccessDevicePlatform",
  members: ConditionalAccessDevicePlatform
} as EnumConfig<ConditionalAccessDevicePlatform>;