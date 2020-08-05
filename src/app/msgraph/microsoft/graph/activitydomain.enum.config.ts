import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ActivityDomain } from './activitydomain.enum';
//#endregion

export const ActivityDomainConfig = {
  name: "activityDomain",
  members: ActivityDomain
} as EnumConfig<ActivityDomain>;