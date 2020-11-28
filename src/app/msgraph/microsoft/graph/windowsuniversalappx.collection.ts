import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileLobAppCollection } from './mobilelobapp.collection';
import { WindowsArchitecture } from './windowsarchitecture.enum';
import { WindowsDeviceType } from './windowsdevicetype.enum';
import { WindowsMinimumOperatingSystem } from './windowsminimumoperatingsystem.entity';
import { WindowsUniversalAppX } from './windowsuniversalappx.entity';
import { WindowsMinimumOperatingSystemModel } from './windowsminimumoperatingsystem.model';
import { WindowsUniversalAppXModel } from './windowsuniversalappx.model';
import { WindowsMinimumOperatingSystemCollection } from './windowsminimumoperatingsystem.collection';
//#endregion

export class WindowsUniversalAppXCollection<E extends WindowsUniversalAppX, M extends WindowsUniversalAppXModel<E>> extends MobileLobAppCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}