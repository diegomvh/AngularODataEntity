import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Category } from './category.entity';
import { CategoryCollection } from './category.collection';
//#endregion

export class CategoryModel<E extends Category> extends ODataModel<E> {
  //#region ODataApi Properties
  Key: string;
  Title?: string;
  Description?: string;
  CategoryGroupID?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}