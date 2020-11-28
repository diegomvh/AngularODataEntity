import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IosHomeScreenItem } from './ioshomescreenitem.complex';
import { IosHomeScreenPage } from './ioshomescreenpage.complex';
import { IosHomeScreenItemModel } from './ioshomescreenitem.model';
import { IosHomeScreenItemCollection } from './ioshomescreenitem.collection';
import { IosHomeScreenPageCollection } from './ioshomescreenpage.collection';
//#endregion

export class IosHomeScreenPageModel<E extends IosHomeScreenPage> extends ODataModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  icons: IosHomeScreenItemCollection<IosHomeScreenItem, IosHomeScreenItemModel<IosHomeScreenItem>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}