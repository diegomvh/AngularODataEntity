import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoEstadoMetadataCollection } from './recursoestadometadata.collection';
import { RecursoCanceladoMetadata } from './recursocanceladometadata.entity';
import { RecursoCanceladoMetadataModel } from './recursocanceladometadata.model';
//#endregion

export class RecursoCanceladoMetadataCollection<E extends RecursoCanceladoMetadata, M extends RecursoCanceladoMetadataModel<E>> extends RecursoEstadoMetadataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}