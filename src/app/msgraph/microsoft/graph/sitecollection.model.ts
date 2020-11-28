import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Root } from './root.complex';
import { SiteCollection } from './sitecollection.complex';
import { RootModel } from './root.model';
import { RootCollection } from './root.collection';
import { SiteCollectionCollection } from './sitecollection.collection';
//#endregion

export class SiteCollectionModel<E extends SiteCollection> extends ODataModel<E> {
  //#region ODataApi Properties
  dataLocationCode?: string;
  hostname?: string;
  root?: RootModel<Root>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}