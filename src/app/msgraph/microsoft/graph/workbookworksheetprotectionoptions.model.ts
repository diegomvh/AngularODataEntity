import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WorkbookWorksheetProtectionOptions } from './workbookworksheetprotectionoptions.entity';
import { WorkbookWorksheetProtectionOptionsCollection } from './workbookworksheetprotectionoptions.collection';
//#endregion

export class WorkbookWorksheetProtectionOptionsModel<E extends WorkbookWorksheetProtectionOptions> extends ODataModel<E> {
  //#region ODataApi Properties
  allowAutoFilter: boolean;
  allowDeleteColumns: boolean;
  allowDeleteRows: boolean;
  allowFormatCells: boolean;
  allowFormatColumns: boolean;
  allowFormatRows: boolean;
  allowInsertColumns: boolean;
  allowInsertHyperlinks: boolean;
  allowInsertRows: boolean;
  allowPivotTables: boolean;
  allowSort: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}