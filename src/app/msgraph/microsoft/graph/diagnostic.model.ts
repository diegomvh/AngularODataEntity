import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Diagnostic } from './diagnostic.complex';
import { DiagnosticCollection } from './diagnostic.collection';
//#endregion

export class DiagnosticModel<E extends Diagnostic> extends ODataModel<E> {
  //#region ODataApi Properties
  message?: string;
  url?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}