import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RemoteAssistanceOnboardingStatus } from './remoteassistanceonboardingstatus.enum';
//#endregion

export const RemoteAssistanceOnboardingStatusConfig = {
  name: "remoteAssistanceOnboardingStatus",
  members: RemoteAssistanceOnboardingStatus
} as EnumTypeConfig<RemoteAssistanceOnboardingStatus>;