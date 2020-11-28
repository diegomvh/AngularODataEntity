import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PrivacyProfile } from './privacyprofile.complex';
import { PrivacyProfileModel } from './privacyprofile.model';
//#endregion

export class PrivacyProfileCollection<E extends PrivacyProfile, M extends PrivacyProfileModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}