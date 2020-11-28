import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { GenericError } from './genericerror.entity';
import { GenericErrorModel } from './genericerror.model';
//#endregion

export class GenericErrorCollection<E extends GenericError, M extends GenericErrorModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}