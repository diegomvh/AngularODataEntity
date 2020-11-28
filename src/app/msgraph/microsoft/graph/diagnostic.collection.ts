import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Diagnostic } from './diagnostic.entity';
import { DiagnosticModel } from './diagnostic.model';
//#endregion

export class DiagnosticCollection<E extends Diagnostic, M extends DiagnosticModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}