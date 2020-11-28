import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { File } from './file.entity';
import { Hashes } from './hashes.entity';
import { HashesModel } from './hashes.model';
import { FileCollection } from './file.collection';
import { HashesCollection } from './hashes.collection';
//#endregion

export class FileModel<E extends File> extends ODataModel<E> {
  //#region ODataApi Properties
  hashes?: HashesModel<Hashes>;
  mimeType?: string;
  processingMetadata?: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}