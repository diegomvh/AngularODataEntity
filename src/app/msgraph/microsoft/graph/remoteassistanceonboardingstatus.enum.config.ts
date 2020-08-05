import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RemoteAssistanceOnboardingStatus } from './remoteassistanceonboardingstatus.enum';
//#endregion

export const RemoteAssistanceOnboardingStatusConfig = {
  name: "RemoteAssistanceOnboardingStatus",
  members: RemoteAssistanceOnboardingStatus
} as EnumConfig<RemoteAssistanceOnboardingStatus>;