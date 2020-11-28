import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoEstadoMetadataCollection } from './recursoestadometadata.collection';
import { RecursoPresentadoMetadata } from './recursopresentadometadata.entity';
import { RecursoPresentadoMetadataModel } from './recursopresentadometadata.model';
//#endregion

export class RecursoPresentadoMetadataCollection<E extends RecursoPresentadoMetadata, M extends RecursoPresentadoMetadataModel<E>> extends RecursoEstadoMetadataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}