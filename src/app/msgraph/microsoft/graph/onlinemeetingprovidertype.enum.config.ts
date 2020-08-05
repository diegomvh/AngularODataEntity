import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnlineMeetingProviderType } from './onlinemeetingprovidertype.enum';
//#endregion

export const OnlineMeetingProviderTypeConfig = {
  name: "OnlineMeetingProviderType",
  members: OnlineMeetingProviderType
} as EnumConfig<OnlineMeetingProviderType>;