import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectCollection } from './directoryobject.collection';
import { AlternativeSecurityId } from './alternativesecurityid.complex';
import { DirectoryObject } from './directoryobject.entity';
import { Extension } from './extension.entity';
import { Device } from './device.entity';
import { AlternativeSecurityIdModel } from './alternativesecurityid.model';
import { DirectoryObjectModel } from './directoryobject.model';
import { ExtensionModel } from './extension.model';
import { DeviceModel } from './device.model';
import { AlternativeSecurityIdCollection } from './alternativesecurityid.collection';
import { ExtensionCollection } from './extension.collection';
//#endregion

export class DeviceCollection<E extends Device, M extends DeviceModel<E>> extends DirectoryObjectCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}