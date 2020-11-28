import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Root } from './root.complex';
import { SiteCollection } from './sitecollection.complex';
import { RootModel } from './root.model';
import { SiteCollectionModel } from './sitecollection.model';
import { RootCollection } from './root.collection';
//#endregion

export class SiteCollectionCollection<E extends SiteCollection, M extends SiteCollectionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}