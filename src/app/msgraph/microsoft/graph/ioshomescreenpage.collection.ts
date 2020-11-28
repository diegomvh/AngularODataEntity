import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IosHomeScreenItem } from './ioshomescreenitem.complex';
import { IosHomeScreenPage } from './ioshomescreenpage.complex';
import { IosHomeScreenItemModel } from './ioshomescreenitem.model';
import { IosHomeScreenPageModel } from './ioshomescreenpage.model';
import { IosHomeScreenItemCollection } from './ioshomescreenitem.collection';
//#endregion

export class IosHomeScreenPageCollection<E extends IosHomeScreenPage, M extends IosHomeScreenPageModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}