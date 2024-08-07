﻿import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataClient,
  ODataEntitySetService,
  ODataEntity,
  ODataEntities,
  ODataProperty,
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SummaryOfSalesByQuarter } from '../../../NorthwindModel/summary-of-sales-by-quarter.entity';
import { SummaryOfSalesByQuarterModel } from '../../../NorthwindModel/summary-of-sales-by-quarter.model';
import { SummaryOfSalesByQuarterCollection } from '../../../NorthwindModel/summary-of-sales-by-quarter.collection';
//#endregion

@Injectable()
export class SummaryOfSalesByQuartersService extends ODataEntitySetService<SummaryOfSalesByQuarter> {
  constructor(client: ODataClient) {
    super(client, 'Summary_of_Sales_by_Quarters', 'NorthwindModel.Summary_of_Sales_by_Quarter');
  }
  //#region ODataApiGen Model
  summaryOfSalesByQuarterModel(entity?: Partial<SummaryOfSalesByQuarter>): SummaryOfSalesByQuarterModel<SummaryOfSalesByQuarter> {
    return this.entity().asModel<SummaryOfSalesByQuarterModel<SummaryOfSalesByQuarter>>(entity);
  }//#endregion
  //#region ODataApiGen Collection
  summaryOfSalesByQuarterCollection(entities?: Partial<SummaryOfSalesByQuarter>[]): SummaryOfSalesByQuarterCollection<SummaryOfSalesByQuarter, SummaryOfSalesByQuarterModel<SummaryOfSalesByQuarter>> {
    return this.entities().asCollection<SummaryOfSalesByQuarterModel<SummaryOfSalesByQuarter>, SummaryOfSalesByQuarterCollection<SummaryOfSalesByQuarter, SummaryOfSalesByQuarterModel<SummaryOfSalesByQuarter>>>(entities);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
