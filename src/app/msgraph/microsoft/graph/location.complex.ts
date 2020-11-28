import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { LocationType } from './locationtype.enum';
import { LocationUniqueIdType } from './locationuniqueidtype.enum';
import { PhysicalAddress } from './physicaladdress.complex';
import { OutlookGeoCoordinates } from './outlookgeocoordinates.complex';
import { PhysicalAddressModel } from './physicaladdress.model';
import { OutlookGeoCoordinatesModel } from './outlookgeocoordinates.model';
import { PhysicalAddressCollection } from './physicaladdress.collection';
import { OutlookGeoCoordinatesCollection } from './outlookgeocoordinates.collection';
//#endregion

export interface Location {
  //#region ODataApi Properties
  address?: PhysicalAddress;
  coordinates?: OutlookGeoCoordinates;
  displayName?: string;
  locationEmailAddress?: string;
  locationType?: LocationType;
  locationUri?: string;
  uniqueId?: string;
  uniqueIdType?: LocationUniqueIdType;
  //#endregion
}