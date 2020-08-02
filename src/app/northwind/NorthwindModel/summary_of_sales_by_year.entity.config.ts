﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SummaryOfSalesByYear } from './summary_of_sales_by_year.entity';
//#endregion

export const SummaryOfSalesByYearConfig = {
  name: "SummaryOfSalesByYear",
  annotations: [],
  fields: {
    ShippedDate: {type: 'Edm.DateTimeOffset'},
    OrderID: {type: 'Edm.Int32', key: true, ref: 'OrderID', nullable: false},
    Subtotal: {type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as EntityConfig<SummaryOfSalesByYear>;