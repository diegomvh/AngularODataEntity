import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { SoftwareUpdateStatusSummary } from './softwareupdatestatussummary.entity';
import { SoftwareUpdateStatusSummaryModel } from './softwareupdatestatussummary.model';
//#endregion

export class SoftwareUpdateStatusSummaryCollection<E extends SoftwareUpdateStatusSummary, M extends SoftwareUpdateStatusSummaryModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}