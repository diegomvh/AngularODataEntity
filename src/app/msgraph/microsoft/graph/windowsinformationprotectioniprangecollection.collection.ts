import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IpRange } from './iprange.complex';
import { WindowsInformationProtectionIPRangeCollection } from './windowsinformationprotectioniprangecollection.complex';
import { IpRangeModel } from './iprange.model';
import { WindowsInformationProtectionIPRangeCollectionModel } from './windowsinformationprotectioniprangecollection.model';
import { IpRangeCollection } from './iprange.collection';
//#endregion

export class WindowsInformationProtectionIPRangeCollectionCollection<E extends WindowsInformationProtectionIPRangeCollection, M extends WindowsInformationProtectionIPRangeCollectionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}