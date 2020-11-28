import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IosHomeScreenItemCollection } from './ioshomescreenitem.collection';
import { IosHomeScreenApp } from './ioshomescreenapp.complex';
import { IosHomeScreenAppModel } from './ioshomescreenapp.model';
//#endregion

export class IosHomeScreenAppCollection<E extends IosHomeScreenApp, M extends IosHomeScreenAppModel<E>> extends IosHomeScreenItemCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}