import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { FileHashType } from './filehashtype.enum';
import { FileHash } from './filehash.complex';
import { FileHashCollection } from './filehash.collection';
//#endregion

export class FileHashModel<E extends FileHash> extends ODataModel<E> {
  //#region ODataApi Properties
  hashType?: FileHashType;
  hashValue?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}