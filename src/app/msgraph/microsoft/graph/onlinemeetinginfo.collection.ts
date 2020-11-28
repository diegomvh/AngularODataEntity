import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Phone } from './phone.entity';
import { OnlineMeetingInfo } from './onlinemeetinginfo.entity';
import { PhoneModel } from './phone.model';
import { OnlineMeetingInfoModel } from './onlinemeetinginfo.model';
import { PhoneCollection } from './phone.collection';
//#endregion

export class OnlineMeetingInfoCollection<E extends OnlineMeetingInfo, M extends OnlineMeetingInfoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}