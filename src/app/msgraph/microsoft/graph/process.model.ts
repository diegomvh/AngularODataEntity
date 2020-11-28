import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ProcessIntegrityLevel } from './processintegritylevel.enum';
import { FileHash } from './filehash.entity';
import { Process } from './process.entity';
import { FileHashModel } from './filehash.model';
import { FileHashCollection } from './filehash.collection';
import { ProcessCollection } from './process.collection';
//#endregion

export class ProcessModel<E extends Process> extends ODataModel<E> {
  //#region ODataApi Properties
  accountName?: string;
  commandLine?: string;
  createdDateTime?: Date;
  fileHash?: FileHashModel<FileHash>;
  integrityLevel?: ProcessIntegrityLevel;
  isElevated?: boolean;
  name?: string;
  parentProcessCreatedDateTime?: Date;
  parentProcessId?: number;
  parentProcessName?: string;
  path?: string;
  processId?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}