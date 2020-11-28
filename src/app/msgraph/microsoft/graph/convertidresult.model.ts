import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConvertIdResult } from './convertidresult.entity';
import { GenericError } from './genericerror.entity';
import { GenericErrorModel } from './genericerror.model';
import { ConvertIdResultCollection } from './convertidresult.collection';
import { GenericErrorCollection } from './genericerror.collection';
//#endregion

export class ConvertIdResultModel<E extends ConvertIdResult> extends ODataModel<E> {
  //#region ODataApi Properties
  errorDetails?: GenericErrorModel<GenericError>;
  sourceId?: string;
  targetId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}