import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PhysicalAddressType } from './physicaladdresstype.enum';
//#endregion

export const PhysicalAddressTypeConfig = {
  name: "physicalAddressType",
  members: PhysicalAddressType
} as EnumTypeConfig<PhysicalAddressType>;