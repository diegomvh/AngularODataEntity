import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectModel } from './directoryobject.model';
import { Contract } from './contract.entity';
import { ContractCollection } from './contract.collection';
//#endregion

export class ContractModel<E extends Contract> extends DirectoryObjectModel<E> {
  //#region ODataApi Properties
  contractType?: string;
  customerId?: string;
  defaultDomainName?: string;
  displayName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}