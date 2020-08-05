import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagementAgentType } from './managementagenttype.enum';
//#endregion

export const ManagementAgentTypeConfig = {
  name: "ManagementAgentType",
  members: ManagementAgentType
} as EnumConfig<ManagementAgentType>;