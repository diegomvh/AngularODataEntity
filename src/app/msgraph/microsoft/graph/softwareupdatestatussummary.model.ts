import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { SoftwareUpdateStatusSummary } from './softwareupdatestatussummary.entity';
import { SoftwareUpdateStatusSummaryCollection } from './softwareupdatestatussummary.collection';
//#endregion

export class SoftwareUpdateStatusSummaryModel<E extends SoftwareUpdateStatusSummary> extends EntityModel<E> {
  //#region ODataApi Properties
  compliantDeviceCount: number;
  compliantUserCount: number;
  conflictDeviceCount: number;
  conflictUserCount: number;
  displayName?: string;
  errorDeviceCount: number;
  errorUserCount: number;
  nonCompliantDeviceCount: number;
  nonCompliantUserCount: number;
  notApplicableDeviceCount: number;
  notApplicableUserCount: number;
  remediatedDeviceCount: number;
  remediatedUserCount: number;
  unknownDeviceCount: number;
  unknownUserCount: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}