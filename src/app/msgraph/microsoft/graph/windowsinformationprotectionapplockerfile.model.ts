import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WindowsInformationProtectionAppLockerFile } from './windowsinformationprotectionapplockerfile.entity';
import { WindowsInformationProtectionAppLockerFileCollection } from './windowsinformationprotectionapplockerfile.collection';
//#endregion

export class WindowsInformationProtectionAppLockerFileModel<E extends WindowsInformationProtectionAppLockerFile> extends EntityModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  file?: ArrayBuffer;
  fileHash?: string;
  version?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}