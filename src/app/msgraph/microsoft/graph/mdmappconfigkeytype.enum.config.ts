import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { MdmAppConfigKeyType } from './mdmappconfigkeytype.enum';
//#endregion

export const MdmAppConfigKeyTypeConfig = {
  name: "MdmAppConfigKeyType",
  members: MdmAppConfigKeyType
} as EnumConfig<MdmAppConfigKeyType>;