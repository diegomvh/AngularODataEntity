import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { OutlookUser } from './outlookuser.entity';
import { OutlookCategory } from './outlookcategory.entity';
import { OutlookUserModel } from './outlookuser.model';
import { OutlookCategoryModel } from './outlookcategory.model';
import { OutlookCategoryCollection } from './outlookcategory.collection';
//#endregion

export class OutlookUserCollection<E extends OutlookUser, M extends OutlookUserModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}