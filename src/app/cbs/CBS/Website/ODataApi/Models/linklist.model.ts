import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  Model, 
  ModelField, 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpQueryOptions, 
  Duration, 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { LinkList } from './linklist.complex';
import { Link } from './link.complex';
import { LinkModel } from './link.model';
import { LinkListCollection } from './linklist.collection';
import { LinkCollection } from './link.collection';
//#endregion

@Model()
export class LinkListModel<E extends LinkList> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  Items?: LinkCollection<Link, LinkModel<Link>>;
  public $Items() {
    return this.property<LinkCollection<Link, LinkModel<Link>>>('Items');
  }
  public getItems(options?: HttpOptions) {
    return this.getValue<LinkCollection<Link, LinkModel<Link>>>('Items', options) as Observable<LinkCollection<Link, LinkModel<Link>>>;
  }
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}