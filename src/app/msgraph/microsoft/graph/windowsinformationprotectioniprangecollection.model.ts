import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IpRange } from './iprange.entity';
import { WindowsInformationProtectionIPRangeCollection } from './windowsinformationprotectioniprangecollection.entity';
import { IpRangeModel } from './iprange.model';
import { IpRangeCollection } from './iprange.collection';
import { WindowsInformationProtectionIPRangeCollectionCollection } from './windowsinformationprotectioniprangecollection.collection';
//#endregion

export class WindowsInformationProtectionIPRangeCollectionModel<E extends WindowsInformationProtectionIPRangeCollection> extends ODataModel<E> {
  //#region ODataApi Properties
  displayName: string;
  ranges: IpRangeCollection<IpRange, IpRangeModel<IpRange>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}