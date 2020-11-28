import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LinkList } from './linklist.complex';
import { Link } from './link.complex';
import { LinkListModel } from './linklist.model';
import { LinkModel } from './link.model';
import { LinkCollection } from './link.collection';
//#endregion

export class LinkListCollection<E extends LinkList, M extends LinkListModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}