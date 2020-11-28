import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CallOptionsModel } from './calloptions.model';
import { OutgoingCallOptions } from './outgoingcalloptions.entity';
import { OutgoingCallOptionsCollection } from './outgoingcalloptions.collection';
//#endregion

export class OutgoingCallOptionsModel<E extends OutgoingCallOptions> extends CallOptionsModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}