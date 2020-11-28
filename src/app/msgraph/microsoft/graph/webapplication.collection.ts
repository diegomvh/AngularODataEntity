import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ImplicitGrantSettings } from './implicitgrantsettings.entity';
import { WebApplication } from './webapplication.entity';
import { ImplicitGrantSettingsModel } from './implicitgrantsettings.model';
import { WebApplicationModel } from './webapplication.model';
import { ImplicitGrantSettingsCollection } from './implicitgrantsettings.collection';
//#endregion

export class WebApplicationCollection<E extends WebApplication, M extends WebApplicationModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}