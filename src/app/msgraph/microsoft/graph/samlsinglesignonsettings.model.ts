import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SamlSingleSignOnSettings } from './samlsinglesignonsettings.entity';
import { SamlSingleSignOnSettingsCollection } from './samlsinglesignonsettings.collection';
//#endregion

export class SamlSingleSignOnSettingsModel<E extends SamlSingleSignOnSettings> extends ODataModel<E> {
  //#region ODataApi Properties
  relayState?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}