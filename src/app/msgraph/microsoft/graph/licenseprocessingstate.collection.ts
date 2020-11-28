import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LicenseProcessingState } from './licenseprocessingstate.complex';
import { LicenseProcessingStateModel } from './licenseprocessingstate.model';
//#endregion

export class LicenseProcessingStateCollection<E extends LicenseProcessingState, M extends LicenseProcessingStateModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}