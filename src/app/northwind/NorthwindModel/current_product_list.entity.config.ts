﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Current_Product_List } from './current_product_list.entity';
//#endregion

export const Current_Product_ListConfig = {
  name: "Current_Product_List",
  annotations: [],
  fields: {
    ProductID: {type: 'number', key: true, ref: 'ProductID', nullable: false},
    ProductName: {type: 'string', key: true, ref: 'ProductName', nullable: false, maxLength: 40}
  }
} as EntityConfig<Current_Product_List>;