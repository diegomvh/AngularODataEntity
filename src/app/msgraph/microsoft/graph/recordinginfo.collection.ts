import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecordingStatus } from './recordingstatus.enum';
import { IdentitySet } from './identityset.entity';
import { RecordingInfo } from './recordinginfo.entity';
import { IdentitySetModel } from './identityset.model';
import { RecordingInfoModel } from './recordinginfo.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export class RecordingInfoCollection<E extends RecordingInfo, M extends RecordingInfoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}