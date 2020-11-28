import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IosHomeScreenItemModel } from './ioshomescreenitem.model';
import { IosHomeScreenApp } from './ioshomescreenapp.entity';
import { IosHomeScreenAppCollection } from './ioshomescreenapp.collection';
//#endregion

export class IosHomeScreenAppModel<E extends IosHomeScreenApp> extends IosHomeScreenItemModel<E> {
  //#region ODataApi Properties
  bundleID: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}