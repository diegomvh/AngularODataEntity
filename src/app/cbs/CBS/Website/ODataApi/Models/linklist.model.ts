import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  Duration,
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { LinkList } from './linklist.complex';
import { Link } from './link.complex';
import { LinkModel } from './link.model';
import { LinkListCollection } from './linklist.collection';
import { LinkCollection } from './link.collection';
//#endregion

@Model()
export class LinkListModel<E extends LinkList> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  Items?: LinkCollection<Link, LinkModel<Link>>;
  public $Items() {
    return this.property<LinkCollection<Link, LinkModel<Link>>>('Items');
  }
  public getItems(options?: ODataOptions) {
    return this.getValue<LinkCollection<Link, LinkModel<Link>>>('Items', options) as Observable<LinkCollection<Link, LinkModel<Link>>>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}