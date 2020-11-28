import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LinkList } from './linklist.complex';
import { Link } from './link.complex';
import { LinkModel } from './link.model';
import { LinkListCollection } from './linklist.collection';
import { LinkCollection } from './link.collection';
//#endregion

export class LinkListModel<E extends LinkList> extends ODataModel<E> {
  //#region ODataApi Properties
  Items?: LinkCollection<Link, LinkModel<Link>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}