import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PhysicalAddress } from './physicaladdress.complex';
import { PhysicalAddressModel } from './physicaladdress.model';
//#endregion

export class PhysicalAddressCollection<E extends PhysicalAddress, M extends PhysicalAddressModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}