import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { CategoryColor } from './categorycolor.enum';
import { OutlookCategory } from './outlookcategory.entity';
import { OutlookCategoryCollection } from './outlookcategory.collection';
//#endregion

export class OutlookCategoryModel<E extends OutlookCategory> extends EntityModel<E> {
  //#region ODataApi Properties
  color?: CategoryColor;
  displayName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}