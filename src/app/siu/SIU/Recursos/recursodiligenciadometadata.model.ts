import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoEstadoMetadataModel } from './recursoestadometadata.model';
import { RecursoDiligenciadoMetadata } from './recursodiligenciadometadata.entity';
import { RecursoDiligenciadoMetadataCollection } from './recursodiligenciadometadata.collection';
//#endregion

export class RecursoDiligenciadoMetadataModel<E extends RecursoDiligenciadoMetadata> extends RecursoEstadoMetadataModel<E> {
  //#region ODataApi Properties
  fecha?: Date;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}