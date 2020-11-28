import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { KeyValue } from './keyvalue.complex';
import { AddIn } from './addin.complex';
import { KeyValueModel } from './keyvalue.model';
import { AddInModel } from './addin.model';
import { KeyValueCollection } from './keyvalue.collection';
//#endregion

export class AddInCollection<E extends AddIn, M extends AddInModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}