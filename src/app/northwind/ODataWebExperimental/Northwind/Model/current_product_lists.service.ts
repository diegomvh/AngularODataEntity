import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
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
  Expand, 
  Select,
  HttpOptions,
  HttpActionOptions,
  HttpFunctionOptions,
  HttpNavigationPropertyOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { CurrentProductList } from '../../../NorthwindModel/current_product_list.entity';
import { CurrentProductListModel } from '../../../NorthwindModel/current_product_list.model';
import { CurrentProductListCollection } from '../../../NorthwindModel/current_product_list.collection';
//#endregion

@Injectable()
export class CurrentProductListsService extends ODataEntitySetService<CurrentProductList> {
  constructor(protected client: ODataClient) {
    super(client, 'Current_Product_Lists', 'NorthwindModel.Current_Product_List');
  }
  //#region ODataApi Model
  currentProductListModel(attrs?: Partial<CurrentProductList>): CurrentProductListModel<CurrentProductList> {
    return this.entity().asModel<CurrentProductListModel<CurrentProductList>>(attrs || {});
  }//#endregion
  //#region ODataApi Collection
  currentProductListCollection(models?: Partial<CurrentProductList>[]): CurrentProductListCollection<CurrentProductList, CurrentProductListModel<CurrentProductList>> {
    return this.entities().asCollection<CurrentProductListModel<CurrentProductList>, CurrentProductListCollection<CurrentProductList, CurrentProductListModel<CurrentProductList>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
