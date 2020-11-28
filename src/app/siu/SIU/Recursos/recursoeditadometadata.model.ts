import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoEstadoMetadataModel } from './recursoestadometadata.model';
import { RecursoEditadoMetadata } from './recursoeditadometadata.entity';
import { RecursoEditadoMetadataCollection } from './recursoeditadometadata.collection';
//#endregion

export class RecursoEditadoMetadataModel<E extends RecursoEditadoMetadata> extends RecursoEstadoMetadataModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}