import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ActivityDomain } from './activitydomain.enum';
//#endregion

export const ActivityDomainConfig = {
  name: "activityDomain",
  members: ActivityDomain
} as EnumTypeConfig<ActivityDomain>;