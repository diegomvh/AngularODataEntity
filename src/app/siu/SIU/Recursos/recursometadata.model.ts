import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoMetadata } from './recursometadata.entity';
import { RecursoMetadataCollection } from './recursometadata.collection';
//#endregion

export class RecursoMetadataModel<E extends RecursoMetadata> extends ODataModel<E> {
  //#region ODataApi Properties
  thumbnail?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}