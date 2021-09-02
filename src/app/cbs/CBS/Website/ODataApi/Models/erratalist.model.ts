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
import { ErrataList } from './erratalist.complex';
import { ErratumItem } from './erratumitem.complex';
import { ErratumItemModel } from './erratumitem.model';
import { ErrataListCollection } from './erratalist.collection';
import { ErratumItemCollection } from './erratumitem.collection';
//#endregion

@Model()
export class ErrataListModel<E extends ErrataList> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  Items?: ErratumItemCollection<ErratumItem, ErratumItemModel<ErratumItem>>;
  public $Items() {
    return this.property<ErratumItemCollection<ErratumItem, ErratumItemModel<ErratumItem>>>('Items');
  }
  public getItems(options?: HttpOptions) {
    return this.getValue<ErratumItemCollection<ErratumItem, ErratumItemModel<ErratumItem>>>('Items', options) as Observable<ErratumItemCollection<ErratumItem, ErratumItemModel<ErratumItem>>>;
  }
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}