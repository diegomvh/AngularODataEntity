import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookWorksheetProtectionOptions } from './workbookworksheetprotectionoptions.entity';
import { WorkbookWorksheetProtection } from './workbookworksheetprotection.entity';
import { WorkbookWorksheetProtectionOptionsModel } from './workbookworksheetprotectionoptions.model';
import { WorkbookWorksheetProtectionOptionsCollection } from './workbookworksheetprotectionoptions.collection';
import { WorkbookWorksheetProtectionCollection } from './workbookworksheetprotection.collection';
//#endregion

export class WorkbookWorksheetProtectionModel<E extends WorkbookWorksheetProtection> extends EntityModel<E> {
  //#region ODataApi Properties
  options?: WorkbookWorksheetProtectionOptionsModel<WorkbookWorksheetProtectionOptions>;
  protected: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}