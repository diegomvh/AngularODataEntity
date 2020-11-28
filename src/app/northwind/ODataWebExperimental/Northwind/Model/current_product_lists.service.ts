import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
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
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { CurrentProductList } from '../../../NorthwindModel/current_product_list.entity';
import { CurrentProductListModel } from '../../../NorthwindModel/current_product_list.model';
import { CurrentProductListCollection } from '../../../NorthwindModel/current_product_list.collection';
//#endregion

@Injectable()
export class CurrentProductListsService extends ODataEntityService<CurrentProductList> {
  constructor(protected client: ODataClient) {
    super(client, 'Current_Product_Lists', 'NorthwindModel.Current_Product_List');
  }

  //#region ODataApi Model
  currentProductListModel(): CurrentProductListModel<CurrentProductList> {
    return this.entity().asModel() as CurrentProductListModel<CurrentProductList>;
  }
  //#endregion
  //#region ODataApi Collection
  currentProductListCollection(): CurrentProductListCollection<CurrentProductList, CurrentProductListModel<CurrentProductList>> {
    return this.entities().asCollection() as CurrentProductListCollection<CurrentProductList, CurrentProductListModel<CurrentProductList>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
