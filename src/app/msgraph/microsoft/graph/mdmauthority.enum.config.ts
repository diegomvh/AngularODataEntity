import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MdmAuthority } from './mdmauthority.enum';
//#endregion

export const MdmAuthorityConfig = {
  name: "mdmAuthority",
  members: MdmAuthority
} as EnumTypeConfig<MdmAuthority>;