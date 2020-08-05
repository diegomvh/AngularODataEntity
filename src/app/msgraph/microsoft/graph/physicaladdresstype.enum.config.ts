import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { PhysicalAddressType } from './physicaladdresstype.enum';
//#endregion

export const PhysicalAddressTypeConfig = {
  name: "PhysicalAddressType",
  members: PhysicalAddressType
} as EnumConfig<PhysicalAddressType>;