import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoMetadata } from './recursometadata.entity';
import { RecursoMetadataModel } from './recursometadata.model';
//#endregion

export class RecursoMetadataCollection<E extends RecursoMetadata, M extends RecursoMetadataModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}