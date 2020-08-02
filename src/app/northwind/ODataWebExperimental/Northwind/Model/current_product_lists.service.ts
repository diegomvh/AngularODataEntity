import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
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
export class CurrentProductListsService extends ODataService<CurrentProductList> {
  constructor(protected client: ODataClient) {
    super(client, 'Current_Product_Lists', 'NorthwindModel.Current_Product_List');
  }

  currentProductListModel(): CurrentProductListModel<CurrentProductList> {
    return super.model() as CurrentProductListModel<CurrentProductList>;
  }
  
  currentProductListsCollection(): CurrentProductListCollection<CurrentProductList, CurrentProductListModel<CurrentProductList>> {
    return super.collection() as CurrentProductListCollection<CurrentProductList, CurrentProductListModel<CurrentProductList>>;
  }
}
