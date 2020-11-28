import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ImplicitGrantSettings } from './implicitgrantsettings.complex';
import { ImplicitGrantSettingsModel } from './implicitgrantsettings.model';
//#endregion

export class ImplicitGrantSettingsCollection<E extends ImplicitGrantSettings, M extends ImplicitGrantSettingsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}