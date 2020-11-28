import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MimeContent } from './mimecontent.complex';
import { IntuneBrand } from './intunebrand.complex';
import { RgbColor } from './rgbcolor.complex';
import { MimeContentModel } from './mimecontent.model';
import { RgbColorModel } from './rgbcolor.model';
import { MimeContentCollection } from './mimecontent.collection';
import { IntuneBrandCollection } from './intunebrand.collection';
import { RgbColorCollection } from './rgbcolor.collection';
//#endregion

export class IntuneBrandModel<E extends IntuneBrand> extends ODataModel<E> {
  //#region ODataApi Properties
  contactITEmailAddress?: string;
  contactITName?: string;
  contactITNotes?: string;
  contactITPhoneNumber?: string;
  darkBackgroundLogo?: MimeContentModel<MimeContent>;
  displayName?: string;
  lightBackgroundLogo?: MimeContentModel<MimeContent>;
  onlineSupportSiteName?: string;
  onlineSupportSiteUrl?: string;
  privacyUrl?: string;
  showDisplayNameNextToLogo: boolean;
  showLogo: boolean;
  showNameNextToLogo: boolean;
  themeColor?: RgbColorModel<RgbColor>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}