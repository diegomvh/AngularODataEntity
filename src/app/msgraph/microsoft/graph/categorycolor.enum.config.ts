import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { CategoryColor } from './categorycolor.enum';
//#endregion

export const CategoryColorConfig = {
  name: "CategoryColor",
  members: CategoryColor
} as EnumConfig<CategoryColor>;