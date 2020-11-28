import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoEstadoMetadataModel } from './recursoestadometadata.model';
import { RecursoCreadoMetadata } from './recursocreadometadata.entity';
import { RecursoCreadoMetadataCollection } from './recursocreadometadata.collection';
//#endregion

export class RecursoCreadoMetadataModel<E extends RecursoCreadoMetadata> extends RecursoEstadoMetadataModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}