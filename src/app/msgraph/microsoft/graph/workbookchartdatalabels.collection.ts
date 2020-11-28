import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookChartDataLabels } from './workbookchartdatalabels.entity';
import { WorkbookChartDataLabelFormat } from './workbookchartdatalabelformat.entity';
import { WorkbookChartDataLabelsModel } from './workbookchartdatalabels.model';
import { WorkbookChartDataLabelFormatModel } from './workbookchartdatalabelformat.model';
import { WorkbookChartDataLabelFormatCollection } from './workbookchartdatalabelformat.collection';
//#endregion

export class WorkbookChartDataLabelsCollection<E extends WorkbookChartDataLabels, M extends WorkbookChartDataLabelsModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}