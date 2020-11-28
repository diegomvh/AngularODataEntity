import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PasswordProfile } from './passwordprofile.complex';
import { PasswordProfileModel } from './passwordprofile.model';
//#endregion

export class PasswordProfileCollection<E extends PasswordProfile, M extends PasswordProfileModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}