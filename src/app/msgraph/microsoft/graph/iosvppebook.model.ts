import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedEBookModel } from './managedebook.model';
import { IosVppEBook } from './iosvppebook.entity';
import { IosVppEBookCollection } from './iosvppebook.collection';
//#endregion

export class IosVppEBookModel<E extends IosVppEBook> extends ManagedEBookModel<E> {
  //#region ODataApi Properties
  appleId?: string;
  genres?: string[];
  language?: string;
  seller?: string;
  totalLicenseCount: number;
  usedLicenseCount: number;
  vppOrganizationName?: string;
  vppTokenId: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}