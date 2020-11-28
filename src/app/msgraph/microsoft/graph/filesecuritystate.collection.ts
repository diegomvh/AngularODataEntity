import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { FileHash } from './filehash.complex';
import { FileSecurityState } from './filesecuritystate.complex';
import { FileHashModel } from './filehash.model';
import { FileSecurityStateModel } from './filesecuritystate.model';
import { FileHashCollection } from './filehash.collection';
//#endregion

export class FileSecurityStateCollection<E extends FileSecurityState, M extends FileSecurityStateModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}