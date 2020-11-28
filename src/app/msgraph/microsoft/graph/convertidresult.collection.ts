import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConvertIdResult } from './convertidresult.entity';
import { GenericError } from './genericerror.entity';
import { ConvertIdResultModel } from './convertidresult.model';
import { GenericErrorModel } from './genericerror.model';
import { GenericErrorCollection } from './genericerror.collection';
//#endregion

export class ConvertIdResultCollection<E extends ConvertIdResult, M extends ConvertIdResultModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}