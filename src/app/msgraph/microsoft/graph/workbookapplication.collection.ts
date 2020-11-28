import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookApplication } from './workbookapplication.entity';
import { WorkbookApplicationModel } from './workbookapplication.model';
//#endregion

export class WorkbookApplicationCollection<E extends WorkbookApplication, M extends WorkbookApplicationModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}