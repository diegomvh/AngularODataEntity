import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PageType } from './pagetype.enum';
import { LinkList } from './linklist.complex';
import { Page } from './page.entity';
import { LinkListModel } from './linklist.model';
import { PageModel } from './page.model';
import { LinkListCollection } from './linklist.collection';
//#endregion

export class PageCollection<E extends Page, M extends PageModel<E>> extends ODataCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}