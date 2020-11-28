import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { OperationStatus } from './operationstatus.enum';
import { ResultInfo } from './resultinfo.entity';
import { CommsOperation } from './commsoperation.entity';
import { ResultInfoModel } from './resultinfo.model';
import { CommsOperationModel } from './commsoperation.model';
import { ResultInfoCollection } from './resultinfo.collection';
//#endregion

export class CommsOperationCollection<E extends CommsOperation, M extends CommsOperationModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}