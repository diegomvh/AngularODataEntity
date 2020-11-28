import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoEstadoMetadataCollection } from './recursoestadometadata.collection';
import { RecursoChange } from './recursochange.entity';
import { RecursoModificadoMetadata } from './recursomodificadometadata.entity';
import { RecursoChangeModel } from './recursochange.model';
import { RecursoModificadoMetadataModel } from './recursomodificadometadata.model';
import { RecursoChangeCollection } from './recursochange.collection';
//#endregion

export class RecursoModificadoMetadataCollection<E extends RecursoModificadoMetadata, M extends RecursoModificadoMetadataModel<E>> extends RecursoEstadoMetadataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}