import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IosMinimumOperatingSystem } from './iosminimumoperatingsystem.entity';
import { IosMinimumOperatingSystemModel } from './iosminimumoperatingsystem.model';
//#endregion

export class IosMinimumOperatingSystemCollection<E extends IosMinimumOperatingSystem, M extends IosMinimumOperatingSystemModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}