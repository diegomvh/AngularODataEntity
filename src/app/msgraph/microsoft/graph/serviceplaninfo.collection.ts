import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ServicePlanInfo } from './serviceplaninfo.entity';
import { ServicePlanInfoModel } from './serviceplaninfo.model';
//#endregion

export class ServicePlanInfoCollection<E extends ServicePlanInfo, M extends ServicePlanInfoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}