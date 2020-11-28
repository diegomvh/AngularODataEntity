import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecordingStatus } from './recordingstatus.enum';
import { IdentitySet } from './identityset.entity';
import { RecordingInfo } from './recordinginfo.entity';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
import { RecordingInfoCollection } from './recordinginfo.collection';
//#endregion

export class RecordingInfoModel<E extends RecordingInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  initiator?: IdentitySetModel<IdentitySet>;
  recordingStatus: RecordingStatus;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}