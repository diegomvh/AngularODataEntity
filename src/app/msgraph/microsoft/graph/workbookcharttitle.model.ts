import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookChartTitle } from './workbookcharttitle.entity';
import { WorkbookChartTitleFormat } from './workbookcharttitleformat.entity';
import { WorkbookChartTitleFormatModel } from './workbookcharttitleformat.model';
import { WorkbookChartTitleCollection } from './workbookcharttitle.collection';
import { WorkbookChartTitleFormatCollection } from './workbookcharttitleformat.collection';
//#endregion

export class WorkbookChartTitleModel<E extends WorkbookChartTitle> extends EntityModel<E> {
  //#region ODataApi Properties
  overlay?: boolean;
  text?: string;
  visible: boolean;
  format?: WorkbookChartTitleFormatModel<WorkbookChartTitleFormat>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}