import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoTipoAccion } from './recursotipoaccion.enum';
import { RecursoEstadoMetadata } from './recursoestadometadata.entity';
import { RecursoEstadoMetadataModel } from './recursoestadometadata.model';
//#endregion

export class RecursoEstadoMetadataCollection<E extends RecursoEstadoMetadata, M extends RecursoEstadoMetadataModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}