import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { OperationStatus } from './operationstatus.enum';
import { Operation } from './operation.entity';
import { OperationCollection } from './operation.collection';
//#endregion

export class OperationModel<E extends Operation> extends EntityModel<E> {
  //#region ODataApi Properties
  createdDateTime?: Date;
  lastActionDateTime?: Date;
  status?: OperationStatus;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}