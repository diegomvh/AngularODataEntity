import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MdmAppConfigKeyType } from './mdmappconfigkeytype.enum';
//#endregion

export const MdmAppConfigKeyTypeConfig = {
  name: "mdmAppConfigKeyType",
  members: MdmAppConfigKeyType
} as EnumTypeConfig<MdmAppConfigKeyType>;