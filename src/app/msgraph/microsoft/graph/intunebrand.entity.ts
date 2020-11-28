import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MimeContent } from './mimecontent.entity';
import { RgbColor } from './rgbcolor.entity';
import { MimeContentModel } from './mimecontent.model';
import { RgbColorModel } from './rgbcolor.model';
import { MimeContentCollection } from './mimecontent.collection';
import { RgbColorCollection } from './rgbcolor.collection';
//#endregion

export interface IntuneBrand {
  //#region ODataApi Properties
  contactITEmailAddress?: string;
  contactITName?: string;
  contactITNotes?: string;
  contactITPhoneNumber?: string;
  darkBackgroundLogo?: MimeContent;
  displayName?: string;
  lightBackgroundLogo?: MimeContent;
  onlineSupportSiteName?: string;
  onlineSupportSiteUrl?: string;
  privacyUrl?: string;
  showDisplayNameNextToLogo: boolean;
  showLogo: boolean;
  showNameNextToLogo: boolean;
  themeColor?: RgbColor;
  //#endregion
}