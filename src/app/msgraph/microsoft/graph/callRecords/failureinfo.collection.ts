import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { FailureStage } from './failurestage.enum';
import { FailureInfo } from './failureinfo.entity';
import { FailureInfoModel } from './failureinfo.model';
//#endregion

export class FailureInfoCollection<E extends FailureInfo, M extends FailureInfoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}