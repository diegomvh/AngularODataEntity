import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ApplicationType } from './applicationtype.enum';
import { WindowsInformationProtectionAppLearningSummary } from './windowsinformationprotectionapplearningsummary.entity';
import { WindowsInformationProtectionAppLearningSummaryModel } from './windowsinformationprotectionapplearningsummary.model';
//#endregion

export class WindowsInformationProtectionAppLearningSummaryCollection<E extends WindowsInformationProtectionAppLearningSummary, M extends WindowsInformationProtectionAppLearningSummaryModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}