import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ParentalControlSettings } from './parentalcontrolsettings.entity';
import { ParentalControlSettingsModel } from './parentalcontrolsettings.model';
//#endregion

export class ParentalControlSettingsCollection<E extends ParentalControlSettings, M extends ParentalControlSettingsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}