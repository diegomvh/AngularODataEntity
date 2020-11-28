import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoEstadoMetadataCollection } from './recursoestadometadata.collection';
import { RecursoCreadoMetadata } from './recursocreadometadata.entity';
import { RecursoCreadoMetadataModel } from './recursocreadometadata.model';
//#endregion

export class RecursoCreadoMetadataCollection<E extends RecursoCreadoMetadata, M extends RecursoCreadoMetadataModel<E>> extends RecursoEstadoMetadataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}