import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppCollection } from './mobileapp.collection';
import { MacOSOfficeSuiteApp } from './macosofficesuiteapp.entity';
import { MacOSOfficeSuiteAppModel } from './macosofficesuiteapp.model';
//#endregion

export class MacOSOfficeSuiteAppCollection<E extends MacOSOfficeSuiteApp, M extends MacOSOfficeSuiteAppModel<E>> extends MobileAppCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}