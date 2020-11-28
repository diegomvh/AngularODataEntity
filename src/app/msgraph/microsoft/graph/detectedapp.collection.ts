import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ManagedDevice } from './manageddevice.entity';
import { DetectedApp } from './detectedapp.entity';
import { ManagedDeviceModel } from './manageddevice.model';
import { DetectedAppModel } from './detectedapp.model';
import { ManagedDeviceCollection } from './manageddevice.collection';
//#endregion

export class DetectedAppCollection<E extends DetectedApp, M extends DetectedAppModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}