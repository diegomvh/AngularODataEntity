import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PrivacyProfile } from './privacyprofile.entity';
import { PrivacyProfileCollection } from './privacyprofile.collection';
//#endregion

export class PrivacyProfileModel<E extends PrivacyProfile> extends ODataModel<E> {
  //#region ODataApi Properties
  contactEmail?: string;
  statementUrl?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}