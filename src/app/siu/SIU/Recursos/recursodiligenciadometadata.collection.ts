import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoEstadoMetadataCollection } from './recursoestadometadata.collection';
import { RecursoDiligenciadoMetadata } from './recursodiligenciadometadata.entity';
import { RecursoDiligenciadoMetadataModel } from './recursodiligenciadometadata.model';
//#endregion

export class RecursoDiligenciadoMetadataCollection<E extends RecursoDiligenciadoMetadata, M extends RecursoDiligenciadoMetadataModel<E>> extends RecursoEstadoMetadataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}