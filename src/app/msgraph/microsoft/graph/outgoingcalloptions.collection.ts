import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CallOptionsCollection } from './calloptions.collection';
import { OutgoingCallOptions } from './outgoingcalloptions.entity';
import { OutgoingCallOptionsModel } from './outgoingcalloptions.model';
//#endregion

export class OutgoingCallOptionsCollection<E extends OutgoingCallOptions, M extends OutgoingCallOptionsModel<E>> extends CallOptionsCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}