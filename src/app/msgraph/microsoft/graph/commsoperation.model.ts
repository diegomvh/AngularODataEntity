import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { OperationStatus } from './operationstatus.enum';
import { ResultInfo } from './resultinfo.entity';
import { CommsOperation } from './commsoperation.entity';
import { ResultInfoModel } from './resultinfo.model';
import { ResultInfoCollection } from './resultinfo.collection';
import { CommsOperationCollection } from './commsoperation.collection';
//#endregion

export class CommsOperationModel<E extends CommsOperation> extends EntityModel<E> {
  //#region ODataApi Properties
  clientContext?: string;
  resultInfo?: ResultInfoModel<ResultInfo>;
  status: OperationStatus;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}