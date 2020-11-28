import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CallTranscriptionState } from './calltranscriptionstate.enum';
import { CallTranscriptionInfo } from './calltranscriptioninfo.entity';
import { CallTranscriptionInfoModel } from './calltranscriptioninfo.model';
//#endregion

export class CallTranscriptionInfoCollection<E extends CallTranscriptionInfo, M extends CallTranscriptionInfoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}