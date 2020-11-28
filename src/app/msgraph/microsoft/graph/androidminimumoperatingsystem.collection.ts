import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AndroidMinimumOperatingSystem } from './androidminimumoperatingsystem.entity';
import { AndroidMinimumOperatingSystemModel } from './androidminimumoperatingsystem.model';
//#endregion

export class AndroidMinimumOperatingSystemCollection<E extends AndroidMinimumOperatingSystem, M extends AndroidMinimumOperatingSystemModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}