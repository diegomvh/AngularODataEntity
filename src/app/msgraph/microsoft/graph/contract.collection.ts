import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectCollection } from './directoryobject.collection';
import { Contract } from './contract.entity';
import { ContractModel } from './contract.model';
//#endregion

export class ContractCollection<E extends Contract, M extends ContractModel<E>> extends DirectoryObjectCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}