import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoTipoAccion } from './recursotipoaccion.enum';
import { RecursoEstadoMetadata } from './recursoestadometadata.entity';
import { RecursoEstadoMetadataCollection } from './recursoestadometadata.collection';
//#endregion

export class RecursoEstadoMetadataModel<E extends RecursoEstadoMetadata> extends ODataModel<E> {
  //#region ODataApi Properties
  version?: string;
  key?: string;
  accion?: RecursoTipoAccion;
  observacion?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}