import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConditionalAccessDevicePlatform } from './conditionalaccessdeviceplatform.enum';
import { ConditionalAccessPlatforms } from './conditionalaccessplatforms.entity';
import { ConditionalAccessPlatformsModel } from './conditionalaccessplatforms.model';
//#endregion

export class ConditionalAccessPlatformsCollection<E extends ConditionalAccessPlatforms, M extends ConditionalAccessPlatformsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}