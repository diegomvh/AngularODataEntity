import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { FileEncryptionInfo } from './fileencryptioninfo.complex';
import { FileEncryptionInfoModel } from './fileencryptioninfo.model';
//#endregion

export class FileEncryptionInfoCollection<E extends FileEncryptionInfo, M extends FileEncryptionInfoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}