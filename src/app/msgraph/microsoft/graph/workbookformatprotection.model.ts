import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookFormatProtection } from './workbookformatprotection.entity';
import { WorkbookFormatProtectionCollection } from './workbookformatprotection.collection';
//#endregion

export class WorkbookFormatProtectionModel<E extends WorkbookFormatProtection> extends EntityModel<E> {
  //#region ODataApi Properties
  formulaHidden?: boolean;
  locked?: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}