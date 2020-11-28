import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ProductFamily } from './productfamily.enum';
//#endregion

export const ProductFamilyConfig = {
  name: "productFamily",
  members: ProductFamily
} as EnumTypeConfig<ProductFamily>;