import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IosHomeScreenItem } from './ioshomescreenitem.entity';
import { IosHomeScreenFolderPage } from './ioshomescreenfolderpage.entity';
//#endregion

export interface IosHomeScreenFolder extends IosHomeScreenItem {
  //#region ODataApi Properties
  pages: IosHomeScreenFolderPage[];
  //#endregion
}