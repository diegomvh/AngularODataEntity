import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileLobAppModel } from './mobilelobapp.model';
import { WindowsMobileMSI } from './windowsmobilemsi.entity';
import { WindowsMobileMSICollection } from './windowsmobilemsi.collection';
//#endregion

export class WindowsMobileMSIModel<E extends WindowsMobileMSI> extends MobileLobAppModel<E> {
  //#region ODataApi Properties
  commandLine?: string;
  ignoreVersionDetection: boolean;
  productCode?: string;
  productVersion?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}