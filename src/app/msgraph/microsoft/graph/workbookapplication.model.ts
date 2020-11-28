import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookApplication } from './workbookapplication.entity';
import { WorkbookApplicationCollection } from './workbookapplication.collection';
//#endregion

export class WorkbookApplicationModel<E extends WorkbookApplication> extends EntityModel<E> {
  //#region ODataApi Properties
  calculationMode: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}