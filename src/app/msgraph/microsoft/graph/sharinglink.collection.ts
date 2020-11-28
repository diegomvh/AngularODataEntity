import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Identity } from './identity.complex';
import { SharingLink } from './sharinglink.complex';
import { IdentityModel } from './identity.model';
import { SharingLinkModel } from './sharinglink.model';
import { IdentityCollection } from './identity.collection';
//#endregion

export class SharingLinkCollection<E extends SharingLink, M extends SharingLinkModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}