import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedAppDiagnosticStatus } from './managedappdiagnosticstatus.entity';
import { ManagedAppDiagnosticStatusModel } from './managedappdiagnosticstatus.model';
//#endregion

export class ManagedAppDiagnosticStatusCollection<E extends ManagedAppDiagnosticStatus, M extends ManagedAppDiagnosticStatusModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}