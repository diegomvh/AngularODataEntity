import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Json } from './json.entity';
import { WorkbookIcon } from './workbookicon.entity';
//#endregion

export interface WorkbookFilterCriteria {
  //#region ODataApi Properties
  color?: string;
  criterion1?: string;
  criterion2?: string;
  dynamicCriteria: string;
  filterOn: string;
  icon?: WorkbookIcon;
  operator: string;
  values?: Json;
  //#endregion
}