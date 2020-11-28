import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookChartFont } from './workbookchartfont.entity';
import { WorkbookChartAxisFormat } from './workbookchartaxisformat.entity';
import { WorkbookChartLineFormat } from './workbookchartlineformat.entity';
import { WorkbookChartFontModel } from './workbookchartfont.model';
import { WorkbookChartAxisFormatModel } from './workbookchartaxisformat.model';
import { WorkbookChartLineFormatModel } from './workbookchartlineformat.model';
import { WorkbookChartFontCollection } from './workbookchartfont.collection';
import { WorkbookChartLineFormatCollection } from './workbookchartlineformat.collection';
//#endregion

export class WorkbookChartAxisFormatCollection<E extends WorkbookChartAxisFormat, M extends WorkbookChartAxisFormatModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}