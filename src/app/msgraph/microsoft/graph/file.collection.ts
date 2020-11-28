import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { File } from './file.entity';
import { Hashes } from './hashes.entity';
import { FileModel } from './file.model';
import { HashesModel } from './hashes.model';
import { HashesCollection } from './hashes.collection';
//#endregion

export class FileCollection<E extends File, M extends FileModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}