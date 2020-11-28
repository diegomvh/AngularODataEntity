import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { NetworkConnectionType } from './networkconnectiontype.enum';
import { WifiBand } from './wifiband.enum';
import { WifiRadioType } from './wifiradiotype.enum';
import { NetworkInfo } from './networkinfo.entity';
import { NetworkInfoModel } from './networkinfo.model';
//#endregion

export class NetworkInfoCollection<E extends NetworkInfo, M extends NetworkInfoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}