import { ODataModel, ODataCollection, HttpOptions, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SearchResultItem } from './searchresultitem.entity';
import { SearchResultItemModel } from './searchresultitem.model';
//#endregion

export class SearchResultItemCollection<E extends SearchResultItem, M extends SearchResultItemModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}