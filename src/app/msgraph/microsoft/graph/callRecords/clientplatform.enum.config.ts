import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ClientPlatform } from './clientplatform.enum';
//#endregion

export const ClientPlatformConfig = {
  name: "clientPlatform",
  members: ClientPlatform
} as EnumConfig<ClientPlatform>;