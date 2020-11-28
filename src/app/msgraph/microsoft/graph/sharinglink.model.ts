import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Identity } from './identity.complex';
import { SharingLink } from './sharinglink.complex';
import { IdentityModel } from './identity.model';
import { IdentityCollection } from './identity.collection';
import { SharingLinkCollection } from './sharinglink.collection';
//#endregion

export class SharingLinkModel<E extends SharingLink> extends ODataModel<E> {
  //#region ODataApi Properties
  application?: IdentityModel<Identity>;
  preventsDownload?: boolean;
  scope?: string;
  type?: string;
  webHtml?: string;
  webUrl?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}