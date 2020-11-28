import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { FileHashType } from './filehashtype.enum';
import { FileHash } from './filehash.complex';
import { FileHashModel } from './filehash.model';
//#endregion

export class FileHashCollection<E extends FileHash, M extends FileHashModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}