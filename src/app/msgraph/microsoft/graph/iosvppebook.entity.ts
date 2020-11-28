import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedEBook } from './managedebook.entity';
import { ManagedEBookModel } from './managedebook.model';
import { ManagedEBookCollection } from './managedebook.collection';
//#endregion

export interface IosVppEBook extends ManagedEBook {
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
}