import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoEstadoMetadataModel } from './recursoestadometadata.model';
import { RecursoPresentadoMetadata } from './recursopresentadometadata.entity';
import { RecursoPresentadoMetadataCollection } from './recursopresentadometadata.collection';
//#endregion

export class RecursoPresentadoMetadataModel<E extends RecursoPresentadoMetadata> extends RecursoEstadoMetadataModel<E> {
  //#region ODataApi Properties
  fecha?: Date;
  destinatarioId?: number;
  destinatario?: string;
  seguimiento?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}