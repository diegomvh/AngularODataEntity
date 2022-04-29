//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PageType } from './pagetype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const PageTypeConfig = {
  name: 'PageType',
  members: PageType,
  fields: {
    Any: {value: 0},
    Page: {value: 1},
    Visualisation: {value: 2},
    Dossier: {value: 3},
    Overview: {value: 4},
    Form: {value: 5},
    Vacancy: {value: 6},
    Longread: {value: 7},
    LongreadChapter: {value: 8},
    Unknown: {value: -1}
  }
} as EnumTypeConfig<PageType>;
//#endregion