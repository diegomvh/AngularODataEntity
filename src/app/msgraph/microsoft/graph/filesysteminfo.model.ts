import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { FileSystemInfo } from './filesysteminfo.entity';
import { FileSystemInfoCollection } from './filesysteminfo.collection';
//#endregion

export class FileSystemInfoModel<E extends FileSystemInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  createdDateTime?: Date;
  lastAccessedDateTime?: Date;
  lastModifiedDateTime?: Date;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}