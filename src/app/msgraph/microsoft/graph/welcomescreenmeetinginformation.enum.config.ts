import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WelcomeScreenMeetingInformation } from './welcomescreenmeetinginformation.enum';
//#endregion

export const WelcomeScreenMeetingInformationConfig = {
  name: "welcomeScreenMeetingInformation",
  members: WelcomeScreenMeetingInformation
} as EnumTypeConfig<WelcomeScreenMeetingInformation>;