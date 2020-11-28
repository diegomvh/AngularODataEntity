import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Hashes } from './hashes.complex';
import { HashesCollection } from './hashes.collection';
//#endregion

export class HashesModel<E extends Hashes> extends ODataModel<E> {
  //#region ODataApi Properties
  crc32Hash?: string;
  quickXorHash?: string;
  sha1Hash?: string;
  sha256Hash?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}