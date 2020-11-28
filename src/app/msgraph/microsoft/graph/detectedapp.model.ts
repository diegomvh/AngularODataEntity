import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ManagedDevice } from './manageddevice.entity';
import { DetectedApp } from './detectedapp.entity';
import { ManagedDeviceModel } from './manageddevice.model';
import { ManagedDeviceCollection } from './manageddevice.collection';
import { DetectedAppCollection } from './detectedapp.collection';
//#endregion

export class DetectedAppModel<E extends DetectedApp> extends EntityModel<E> {
  //#region ODataApi Properties
  deviceCount: number;
  displayName?: string;
  sizeInByte: number;
  version?: string;
  managedDevices?: ManagedDeviceCollection<ManagedDevice, ManagedDeviceModel<ManagedDevice>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}