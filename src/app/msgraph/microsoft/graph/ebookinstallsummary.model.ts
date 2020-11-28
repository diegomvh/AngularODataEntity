import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { EBookInstallSummary } from './ebookinstallsummary.entity';
import { EBookInstallSummaryCollection } from './ebookinstallsummary.collection';
//#endregion

export class EBookInstallSummaryModel<E extends EBookInstallSummary> extends EntityModel<E> {
  //#region ODataApi Properties
  failedDeviceCount: number;
  failedUserCount: number;
  installedDeviceCount: number;
  installedUserCount: number;
  notInstalledDeviceCount: number;
  notInstalledUserCount: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}