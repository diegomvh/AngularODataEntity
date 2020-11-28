import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ProcessIntegrityLevel } from './processintegritylevel.enum';
import { FileHash } from './filehash.entity';
import { Process } from './process.entity';
import { FileHashModel } from './filehash.model';
import { ProcessModel } from './process.model';
import { FileHashCollection } from './filehash.collection';
//#endregion

export class ProcessCollection<E extends Process, M extends ProcessModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}