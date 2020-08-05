import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { WelcomeScreenMeetingInformation } from './welcomescreenmeetinginformation.enum';
//#endregion

export const WelcomeScreenMeetingInformationConfig = {
  name: "WelcomeScreenMeetingInformation",
  members: WelcomeScreenMeetingInformation
} as EnumConfig<WelcomeScreenMeetingInformation>;