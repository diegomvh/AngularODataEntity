import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { FileHash } from './filehash.complex';
import { FileSecurityState } from './filesecuritystate.complex';
import { FileHashModel } from './filehash.model';
import { FileHashCollection } from './filehash.collection';
import { FileSecurityStateCollection } from './filesecuritystate.collection';
//#endregion

export class FileSecurityStateModel<E extends FileSecurityState> extends ODataModel<E> {
  //#region ODataApi Properties
  fileHash?: FileHashModel<FileHash>;
  name?: string;
  path?: string;
  riskScore?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}