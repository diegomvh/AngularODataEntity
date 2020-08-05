import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { LocationType } from './locationtype.enum';
import { LocationUniqueIdType } from './locationuniqueidtype.enum';
import { PhysicalAddress } from './physicaladdress.entity';
import { OutlookGeoCoordinates } from './outlookgeocoordinates.entity';
//#endregion

export interface Location {
  //#region ODataApi Properties
  displayName?: string;
  locationEmailAddress?: string;
  address?: PhysicalAddress;
  locationUri?: string;
  coordinates?: OutlookGeoCoordinates;
  locationType?: LocationType;
  uniqueId?: string;
  uniqueIdType?: LocationUniqueIdType;
  //#endregion
}