import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Json } from './json.entity';
import { WorkbookIcon } from './workbookicon.entity';
import { JsonModel } from './json.model';
import { WorkbookIconModel } from './workbookicon.model';
import { JsonCollection } from './json.collection';
import { WorkbookIconCollection } from './workbookicon.collection';
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