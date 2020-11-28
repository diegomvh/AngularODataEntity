import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { DeviceConfigurationUserOverview } from './deviceconfigurationuseroverview.entity';
import { DeviceConfigurationUserOverviewModel } from './deviceconfigurationuseroverview.model';
//#endregion

export class DeviceConfigurationUserOverviewCollection<E extends DeviceConfigurationUserOverview, M extends DeviceConfigurationUserOverviewModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}