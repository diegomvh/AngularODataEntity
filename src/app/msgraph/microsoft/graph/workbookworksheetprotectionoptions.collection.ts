import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WorkbookWorksheetProtectionOptions } from './workbookworksheetprotectionoptions.complex';
import { WorkbookWorksheetProtectionOptionsModel } from './workbookworksheetprotectionoptions.model';
//#endregion

export class WorkbookWorksheetProtectionOptionsCollection<E extends WorkbookWorksheetProtectionOptions, M extends WorkbookWorksheetProtectionOptionsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}