import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { FileSystemInfo } from './filesysteminfo.complex';
import { DriveItemUploadableProperties } from './driveitemuploadableproperties.complex';
import { FileSystemInfoModel } from './filesysteminfo.model';
import { DriveItemUploadablePropertiesModel } from './driveitemuploadableproperties.model';
import { FileSystemInfoCollection } from './filesysteminfo.collection';
//#endregion

export class DriveItemUploadablePropertiesCollection<E extends DriveItemUploadableProperties, M extends DriveItemUploadablePropertiesModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}