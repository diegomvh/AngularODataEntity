import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { KeyValue } from './keyvalue.entity';
import { AddIn } from './addin.entity';
import { KeyValueModel } from './keyvalue.model';
import { KeyValueCollection } from './keyvalue.collection';
import { AddInCollection } from './addin.collection';
//#endregion

export class AddInModel<E extends AddIn> extends ODataModel<E> {
  //#region ODataApi Properties
  id?: string;
  properties: KeyValueCollection<KeyValue, KeyValueModel<KeyValue>>;
  type: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}