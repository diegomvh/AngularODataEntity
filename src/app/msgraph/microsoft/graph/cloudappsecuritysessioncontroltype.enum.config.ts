import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { CloudAppSecuritySessionControlType } from './cloudappsecuritysessioncontroltype.enum';
//#endregion

export const CloudAppSecuritySessionControlTypeConfig = {
  name: "CloudAppSecuritySessionControlType",
  members: CloudAppSecuritySessionControlType
} as EnumConfig<CloudAppSecuritySessionControlType>;