import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IosHomeScreenItem } from './ioshomescreenitem.complex';
import { IosHomeScreenFolderPage } from './ioshomescreenfolderpage.complex';
import { IosHomeScreenItemModel } from './ioshomescreenitem.model';
import { IosHomeScreenFolderPageModel } from './ioshomescreenfolderpage.model';
import { IosHomeScreenItemCollection } from './ioshomescreenitem.collection';
import { IosHomeScreenFolderPageCollection } from './ioshomescreenfolderpage.collection';
//#endregion

export interface IosHomeScreenFolder extends IosHomeScreenItem {
  //#region ODataApi Properties
  pages: IosHomeScreenFolderPage[];
  //#endregion
}