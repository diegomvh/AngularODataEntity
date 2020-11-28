import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CategoryGroup } from './categorygroup.entity';
import { CategoryGroupCollection } from './categorygroup.collection';
//#endregion

export class CategoryGroupModel<E extends CategoryGroup> extends ODataModel<E> {
  //#region ODataApi Properties
  ID: number;
  DimensionKey?: string;
  Title?: string;
  Description?: string;
  ParentID?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}