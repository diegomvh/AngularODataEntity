import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoEstadoMetadataModel } from './recursoestadometadata.model';
import { RecursoPreparadoMetadata } from './recursopreparadometadata.entity';
import { RecursoPreparadoMetadataCollection } from './recursopreparadometadata.collection';
//#endregion

export class RecursoPreparadoMetadataModel<E extends RecursoPreparadoMetadata> extends RecursoEstadoMetadataModel<E> {
  //#region ODataApi Properties
  fecha?: Date;
  identificador?: string;
  firmanteId?: number;
  firmante?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}