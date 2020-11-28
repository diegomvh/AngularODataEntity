import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppModel } from './mobileapp.model';
import { WebApp } from './webapp.entity';
import { WebAppCollection } from './webapp.collection';
//#endregion

export class WebAppModel<E extends WebApp> extends MobileAppModel<E> {
  //#region ODataApi Properties
  appUrl?: string;
  useManagedBrowser: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}