import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnenotePatchActionType } from './onenotepatchactiontype.enum';
import { OnenotePatchInsertPosition } from './onenotepatchinsertposition.enum';
import { OnenotePatchContentCommand } from './onenotepatchcontentcommand.entity';
import { OnenotePatchContentCommandModel } from './onenotepatchcontentcommand.model';
//#endregion

export class OnenotePatchContentCommandCollection<E extends OnenotePatchContentCommand, M extends OnenotePatchContentCommandModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}