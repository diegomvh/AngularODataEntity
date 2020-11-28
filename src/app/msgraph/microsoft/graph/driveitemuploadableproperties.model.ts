import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { FileSystemInfo } from './filesysteminfo.complex';
import { DriveItemUploadableProperties } from './driveitemuploadableproperties.complex';
import { FileSystemInfoModel } from './filesysteminfo.model';
import { FileSystemInfoCollection } from './filesysteminfo.collection';
import { DriveItemUploadablePropertiesCollection } from './driveitemuploadableproperties.collection';
//#endregion

export class DriveItemUploadablePropertiesModel<E extends DriveItemUploadableProperties> extends ODataModel<E> {
  //#region ODataApi Properties
  description?: string;
  fileSize?: number;
  fileSystemInfo?: FileSystemInfoModel<FileSystemInfo>;
  name?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}