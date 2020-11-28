import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PhysicalOfficeAddress } from './physicalofficeaddress.entity';
import { PhysicalOfficeAddressModel } from './physicalofficeaddress.model';
//#endregion

export class PhysicalOfficeAddressCollection<E extends PhysicalOfficeAddress, M extends PhysicalOfficeAddressModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}