import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppPublishingState } from './mobileapppublishingstate.enum';
//#endregion

export const MobileAppPublishingStateConfig = {
  name: "mobileAppPublishingState",
  members: MobileAppPublishingState
} as EnumTypeConfig<MobileAppPublishingState>;