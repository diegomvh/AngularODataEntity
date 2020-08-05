import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppPublishingState } from './mobileapppublishingstate.enum';
//#endregion

export const MobileAppPublishingStateConfig = {
  name: "MobileAppPublishingState",
  members: MobileAppPublishingState
} as EnumConfig<MobileAppPublishingState>;