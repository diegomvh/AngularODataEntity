import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { MdmAuthority } from './mdmauthority.enum';
//#endregion

export const MdmAuthorityConfig = {
  name: "MdmAuthority",
  members: MdmAuthority
} as EnumConfig<MdmAuthority>;