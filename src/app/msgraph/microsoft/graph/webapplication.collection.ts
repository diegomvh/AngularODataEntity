import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WebApplication } from './webapplication.complex';
import { ImplicitGrantSettings } from './implicitgrantsettings.complex';
import { WebApplicationModel } from './webapplication.model';
import { ImplicitGrantSettingsModel } from './implicitgrantsettings.model';
import { ImplicitGrantSettingsCollection } from './implicitgrantsettings.collection';
//#endregion

export class WebApplicationCollection<E extends WebApplication, M extends WebApplicationModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}