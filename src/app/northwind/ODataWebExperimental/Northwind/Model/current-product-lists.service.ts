import { Injectable } from '@angular/core';
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
import { CurrentProductList } from '../../../NorthwindModel/current-product-list.entity';
import { CurrentProductListModel } from '../../../NorthwindModel/current-product-list.model';
import { CurrentProductListCollection } from '../../../NorthwindModel/current-product-list.collection';
//#endregion

@Injectable()
export class CurrentProductListsService extends ODataEntitySetService<CurrentProductList> {
  constructor(client: ODataClient) {
    super(client, 'Current_Product_Lists', 'NorthwindModel.Current_Product_List');
  }
  //#region ODataApiGen Model
  currentProductListModel(entity?: Partial<CurrentProductList>): CurrentProductListModel<CurrentProductList> {
    return this.entity().asModel<CurrentProductListModel<CurrentProductList>>(entity);
  }//#endregion
  //#region ODataApiGen Collection
  currentProductListCollection(entities?: Partial<CurrentProductList>[]): CurrentProductListCollection<CurrentProductList, CurrentProductListModel<CurrentProductList>> {
    return this.entities().asCollection<CurrentProductListModel<CurrentProductList>, CurrentProductListCollection<CurrentProductList, CurrentProductListModel<CurrentProductList>>>(entities);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
