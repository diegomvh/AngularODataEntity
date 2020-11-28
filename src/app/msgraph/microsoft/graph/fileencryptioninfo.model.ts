import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { FileEncryptionInfo } from './fileencryptioninfo.entity';
import { FileEncryptionInfoCollection } from './fileencryptioninfo.collection';
//#endregion

export class FileEncryptionInfoModel<E extends FileEncryptionInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  encryptionKey?: ArrayBuffer;
  fileDigest?: ArrayBuffer;
  fileDigestAlgorithm?: string;
  initializationVector?: ArrayBuffer;
  mac?: ArrayBuffer;
  macKey?: ArrayBuffer;
  profileIdentifier?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}