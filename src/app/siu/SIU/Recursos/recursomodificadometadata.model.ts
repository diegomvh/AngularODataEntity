import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoEstadoMetadataModel } from './recursoestadometadata.model';
import { RecursoChange } from './recursochange.entity';
import { RecursoModificadoMetadata } from './recursomodificadometadata.entity';
import { RecursoChangeModel } from './recursochange.model';
import { RecursoChangeCollection } from './recursochange.collection';
import { RecursoModificadoMetadataCollection } from './recursomodificadometadata.collection';
//#endregion

export class RecursoModificadoMetadataModel<E extends RecursoModificadoMetadata> extends RecursoEstadoMetadataModel<E> {
  //#region ODataApi Properties
  changes?: RecursoChangeCollection<RecursoChange, RecursoChangeModel<RecursoChange>>;
  url?: string;
  changesUrl?: string;
  serverVersion?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}