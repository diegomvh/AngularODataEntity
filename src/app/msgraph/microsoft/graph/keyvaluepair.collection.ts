import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { KeyValuePair } from './keyvaluepair.complex';
import { KeyValuePairModel } from './keyvaluepair.model';
//#endregion

export class KeyValuePairCollection<E extends KeyValuePair, M extends KeyValuePairModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}