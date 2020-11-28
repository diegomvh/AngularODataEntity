import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AlertTrigger } from './alerttrigger.entity';
import { AlertTriggerModel } from './alerttrigger.model';
//#endregion

export class AlertTriggerCollection<E extends AlertTrigger, M extends AlertTriggerModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}