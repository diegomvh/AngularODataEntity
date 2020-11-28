import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TimeCategory } from './timecategory.entity';
import { TimeCategoryCollection } from './timecategory.collection';
//#endregion

export class TimeCategoryModel<E extends TimeCategory> extends ODataModel<E> {
  //#region ODataApi Properties
  Key: string;
  Title?: string;
  Description?: string;
  Status?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}