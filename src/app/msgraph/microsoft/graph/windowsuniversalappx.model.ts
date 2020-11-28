import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileLobAppModel } from './mobilelobapp.model';
import { WindowsArchitecture } from './windowsarchitecture.enum';
import { WindowsDeviceType } from './windowsdevicetype.enum';
import { WindowsMinimumOperatingSystem } from './windowsminimumoperatingsystem.entity';
import { WindowsUniversalAppX } from './windowsuniversalappx.entity';
import { WindowsMinimumOperatingSystemModel } from './windowsminimumoperatingsystem.model';
import { WindowsMinimumOperatingSystemCollection } from './windowsminimumoperatingsystem.collection';
import { WindowsUniversalAppXCollection } from './windowsuniversalappx.collection';
//#endregion

export class WindowsUniversalAppXModel<E extends WindowsUniversalAppX> extends MobileLobAppModel<E> {
  //#region ODataApi Properties
  applicableArchitectures: WindowsArchitecture;
  applicableDeviceTypes: WindowsDeviceType;
  identityName?: string;
  identityPublisherHash: string;
  identityResourceIdentifier?: string;
  identityVersion?: string;
  isBundle: boolean;
  minimumSupportedOperatingSystem: WindowsMinimumOperatingSystemModel<WindowsMinimumOperatingSystem>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}