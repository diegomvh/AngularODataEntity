import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { CategoryColor } from './categorycolor.enum';
//#endregion

export const CategoryColorConfig = {
  name: "categoryColor",
  members: CategoryColor
} as EnumTypeConfig<CategoryColor>;