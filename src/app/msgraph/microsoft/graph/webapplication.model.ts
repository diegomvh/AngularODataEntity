import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WebApplication } from './webapplication.complex';
import { ImplicitGrantSettings } from './implicitgrantsettings.complex';
import { ImplicitGrantSettingsModel } from './implicitgrantsettings.model';
import { WebApplicationCollection } from './webapplication.collection';
import { ImplicitGrantSettingsCollection } from './implicitgrantsettings.collection';
//#endregion

export class WebApplicationModel<E extends WebApplication> extends ODataModel<E> {
  //#region ODataApi Properties
  homePageUrl?: string;
  implicitGrantSettings?: ImplicitGrantSettingsModel<ImplicitGrantSettings>;
  logoutUrl?: string;
  redirectUris: string[];
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}