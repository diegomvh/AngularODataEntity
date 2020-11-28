import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoEstadoMetadataCollection } from './recursoestadometadata.collection';
import { RecursoEditadoMetadata } from './recursoeditadometadata.entity';
import { RecursoEditadoMetadataModel } from './recursoeditadometadata.model';
//#endregion

export class RecursoEditadoMetadataCollection<E extends RecursoEditadoMetadata, M extends RecursoEditadoMetadataModel<E>> extends RecursoEstadoMetadataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}