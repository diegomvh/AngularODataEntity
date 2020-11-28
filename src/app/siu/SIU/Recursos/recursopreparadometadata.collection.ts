import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoEstadoMetadataCollection } from './recursoestadometadata.collection';
import { RecursoPreparadoMetadata } from './recursopreparadometadata.entity';
import { RecursoPreparadoMetadataModel } from './recursopreparadometadata.model';
//#endregion

export class RecursoPreparadoMetadataCollection<E extends RecursoPreparadoMetadata, M extends RecursoPreparadoMetadataModel<E>> extends RecursoEstadoMetadataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}