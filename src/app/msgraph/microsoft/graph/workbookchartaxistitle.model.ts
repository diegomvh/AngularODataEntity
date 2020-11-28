import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookChartAxisTitle } from './workbookchartaxistitle.entity';
import { WorkbookChartAxisTitleFormat } from './workbookchartaxistitleformat.entity';
import { WorkbookChartAxisTitleFormatModel } from './workbookchartaxistitleformat.model';
import { WorkbookChartAxisTitleCollection } from './workbookchartaxistitle.collection';
import { WorkbookChartAxisTitleFormatCollection } from './workbookchartaxistitleformat.collection';
//#endregion

export class WorkbookChartAxisTitleModel<E extends WorkbookChartAxisTitle> extends EntityModel<E> {
  //#region ODataApi Properties
  text?: string;
  visible: boolean;
  format?: WorkbookChartAxisTitleFormatModel<WorkbookChartAxisTitleFormat>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}