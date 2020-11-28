import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { OutlookUser } from './outlookuser.entity';
import { OutlookCategory } from './outlookcategory.entity';
import { OutlookCategoryModel } from './outlookcategory.model';
import { OutlookUserCollection } from './outlookuser.collection';
import { OutlookCategoryCollection } from './outlookcategory.collection';
//#endregion

export class OutlookUserModel<E extends OutlookUser> extends EntityModel<E> {
  //#region ODataApi Properties
  masterCategories?: OutlookCategoryCollection<OutlookCategory, OutlookCategoryModel<OutlookCategory>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}