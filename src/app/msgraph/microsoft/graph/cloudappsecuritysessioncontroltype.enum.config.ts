import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { CloudAppSecuritySessionControlType } from './cloudappsecuritysessioncontroltype.enum';
//#endregion

export const CloudAppSecuritySessionControlTypeConfig = {
  name: "cloudAppSecuritySessionControlType",
  members: CloudAppSecuritySessionControlType
} as EnumTypeConfig<CloudAppSecuritySessionControlType>;