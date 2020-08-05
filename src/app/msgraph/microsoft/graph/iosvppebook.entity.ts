import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedEBook } from './managedebook.entity';
//#endregion

export interface IosVppEBook extends ManagedEBook {
  //#region ODataApi Properties
  vppTokenId: string;
  appleId?: string;
  vppOrganizationName?: string;
  genres?: string[];
  language?: string;
  seller?: string;
  totalLicenseCount: number;
  usedLicenseCount: number;
  //#endregion
}