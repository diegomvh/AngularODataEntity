import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { CategoryColor } from './categorycolor.enum';
import { OutlookCategory } from './outlookcategory.entity';
import { OutlookCategoryModel } from './outlookcategory.model';
//#endregion

export class OutlookCategoryCollection<E extends OutlookCategory, M extends OutlookCategoryModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}