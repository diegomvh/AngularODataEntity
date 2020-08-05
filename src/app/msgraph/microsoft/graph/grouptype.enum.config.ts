import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { GroupType } from './grouptype.enum';
//#endregion

export const GroupTypeConfig = {
  name: "groupType",
  members: GroupType
} as EnumConfig<GroupType>;