import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ApplicationType } from './applicationtype.enum';
import { WindowsInformationProtectionAppLearningSummary } from './windowsinformationprotectionapplearningsummary.entity';
import { WindowsInformationProtectionAppLearningSummaryCollection } from './windowsinformationprotectionapplearningsummary.collection';
//#endregion

export class WindowsInformationProtectionAppLearningSummaryModel<E extends WindowsInformationProtectionAppLearningSummary> extends EntityModel<E> {
  //#region ODataApi Properties
  applicationName?: string;
  applicationType: ApplicationType;
  deviceCount: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}