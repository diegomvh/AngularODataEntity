import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookWorksheetProtectionOptions } from './workbookworksheetprotectionoptions.complex';
import { WorkbookWorksheetProtection } from './workbookworksheetprotection.entity';
import { WorkbookWorksheetProtectionOptionsModel } from './workbookworksheetprotectionoptions.model';
import { WorkbookWorksheetProtectionModel } from './workbookworksheetprotection.model';
import { WorkbookWorksheetProtectionOptionsCollection } from './workbookworksheetprotectionoptions.collection';
//#endregion

export class WorkbookWorksheetProtectionCollection<E extends WorkbookWorksheetProtection, M extends WorkbookWorksheetProtectionModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}