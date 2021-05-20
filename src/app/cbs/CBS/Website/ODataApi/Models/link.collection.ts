import { ODataModel, ODataCollection, HttpOptions, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Link } from './link.complex';
import { LinkModel } from './link.model';
//#endregion

export class LinkCollection<E extends Link, M extends LinkModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}