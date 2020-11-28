import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WellknownListName } from './wellknownlistname.enum';
//#endregion

export const WellknownListNameConfig = {
  name: "wellknownListName",
  members: WellknownListName
} as EnumTypeConfig<WellknownListName>;