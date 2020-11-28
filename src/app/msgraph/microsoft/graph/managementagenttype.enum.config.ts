import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagementAgentType } from './managementagenttype.enum';
//#endregion

export const ManagementAgentTypeConfig = {
  name: "managementAgentType",
  members: ManagementAgentType
} as EnumTypeConfig<ManagementAgentType>;