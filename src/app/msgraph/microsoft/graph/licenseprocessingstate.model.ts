import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LicenseProcessingState } from './licenseprocessingstate.entity';
import { LicenseProcessingStateCollection } from './licenseprocessingstate.collection';
//#endregion

export class LicenseProcessingStateModel<E extends LicenseProcessingState> extends ODataModel<E> {
  //#region ODataApi Properties
  state?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}