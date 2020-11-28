import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WindowsInformationProtectionAppLockerFile } from './windowsinformationprotectionapplockerfile.entity';
import { WindowsInformationProtectionAppLockerFileModel } from './windowsinformationprotectionapplockerfile.model';
//#endregion

export class WindowsInformationProtectionAppLockerFileCollection<E extends WindowsInformationProtectionAppLockerFile, M extends WindowsInformationProtectionAppLockerFileModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}