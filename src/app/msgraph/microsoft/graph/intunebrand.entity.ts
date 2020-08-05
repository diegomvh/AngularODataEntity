import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MimeContent } from './mimecontent.entity';
import { RgbColor } from './rgbcolor.entity';
//#endregion

export interface IntuneBrand {
  //#region ODataApi Properties
  displayName?: string;
  themeColor?: RgbColor;
  showLogo: boolean;
  lightBackgroundLogo?: MimeContent;
  darkBackgroundLogo?: MimeContent;
  showNameNextToLogo: boolean;
  showDisplayNameNextToLogo: boolean;
  contactITName?: string;
  contactITPhoneNumber?: string;
  contactITEmailAddress?: string;
  contactITNotes?: string;
  onlineSupportSiteUrl?: string;
  onlineSupportSiteName?: string;
  privacyUrl?: string;
  //#endregion
}