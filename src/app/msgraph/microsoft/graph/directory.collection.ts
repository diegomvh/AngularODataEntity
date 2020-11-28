import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { DirectoryObject } from './directoryobject.entity';
import { Directory } from './directory.entity';
import { DirectoryObjectModel } from './directoryobject.model';
import { DirectoryModel } from './directory.model';
import { DirectoryObjectCollection } from './directoryobject.collection';
//#endregion

export class DirectoryCollection<E extends Directory, M extends DirectoryModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}