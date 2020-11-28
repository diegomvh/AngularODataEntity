import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ServicePlanInfo } from './serviceplaninfo.complex';
import { LicenseDetails } from './licensedetails.entity';
import { ServicePlanInfoModel } from './serviceplaninfo.model';
import { LicenseDetailsModel } from './licensedetails.model';
import { ServicePlanInfoCollection } from './serviceplaninfo.collection';
//#endregion

export class LicenseDetailsCollection<E extends LicenseDetails, M extends LicenseDetailsModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}