import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedEBookCollection } from './managedebook.collection';
import { IosVppEBook } from './iosvppebook.entity';
import { IosVppEBookModel } from './iosvppebook.model';
//#endregion

export class IosVppEBookCollection<E extends IosVppEBook, M extends IosVppEBookModel<E>> extends ManagedEBookCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}