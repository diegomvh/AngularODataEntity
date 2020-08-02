﻿import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SummaryOfSalesByQuarter } from './summary_of_sales_by_quarter.entity';
import { SummaryOfSalesByQuarterModel } from './summary_of_sales_by_quarter.model';
//#endregion

export class SummaryOfSalesByQuarterCollection<E extends SummaryOfSalesByQuarter, M extends SummaryOfSalesByQuarterModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}