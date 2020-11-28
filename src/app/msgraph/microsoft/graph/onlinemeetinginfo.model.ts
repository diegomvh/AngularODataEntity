import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Phone } from './phone.complex';
import { OnlineMeetingInfo } from './onlinemeetinginfo.complex';
import { PhoneModel } from './phone.model';
import { PhoneCollection } from './phone.collection';
import { OnlineMeetingInfoCollection } from './onlinemeetinginfo.collection';
//#endregion

export class OnlineMeetingInfoModel<E extends OnlineMeetingInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  conferenceId?: string;
  joinUrl?: string;
  phones?: PhoneCollection<Phone, PhoneModel<Phone>>;
  quickDial?: string;
  tollFreeNumbers?: string[];
  tollNumber?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}