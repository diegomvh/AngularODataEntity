import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileLobAppCollection } from './mobilelobapp.collection';
import { WindowsMobileMSI } from './windowsmobilemsi.entity';
import { WindowsMobileMSIModel } from './windowsmobilemsi.model';
//#endregion

export class WindowsMobileMSICollection<E extends WindowsMobileMSI, M extends WindowsMobileMSIModel<E>> extends MobileLobAppCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}