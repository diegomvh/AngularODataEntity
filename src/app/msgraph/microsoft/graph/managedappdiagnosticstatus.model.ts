import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedAppDiagnosticStatus } from './managedappdiagnosticstatus.entity';
import { ManagedAppDiagnosticStatusCollection } from './managedappdiagnosticstatus.collection';
//#endregion

export class ManagedAppDiagnosticStatusModel<E extends ManagedAppDiagnosticStatus> extends ODataModel<E> {
  //#region ODataApi Properties
  mitigationInstruction?: string;
  state?: string;
  validationName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}