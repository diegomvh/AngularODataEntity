import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AlertTrigger } from './alerttrigger.entity';
import { AlertTriggerCollection } from './alerttrigger.collection';
//#endregion

export class AlertTriggerModel<E extends AlertTrigger> extends ODataModel<E> {
  //#region ODataApi Properties
  name?: string;
  type?: string;
  value?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}