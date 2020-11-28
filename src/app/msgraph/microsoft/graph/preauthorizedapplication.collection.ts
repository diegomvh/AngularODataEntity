import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PreAuthorizedApplication } from './preauthorizedapplication.entity';
import { PreAuthorizedApplicationModel } from './preauthorizedapplication.model';
//#endregion

export class PreAuthorizedApplicationCollection<E extends PreAuthorizedApplication, M extends PreAuthorizedApplicationModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}