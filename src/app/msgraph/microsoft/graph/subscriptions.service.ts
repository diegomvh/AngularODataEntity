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
import { Subscription } from './subscription.entity';
import { SubscriptionModel } from './subscription.model';
import { SubscriptionCollection } from './subscription.collection';
//#endregion

@Injectable()
export class SubscriptionsService extends ODataEntityService<Subscription> {
  constructor(protected client: ODataClient) {
    super(client, 'subscriptions', 'microsoft.graph.subscription');
  }

  //#region ODataApi Model
  subscriptionModel(): SubscriptionModel<Subscription> {
    return super.model() as SubscriptionModel<Subscription>;
  }
  //#endregion
  //#region ODataApi Collection
  subscriptionCollection(): SubscriptionCollection<Subscription, SubscriptionModel<Subscription>> {
    return super.collection() as SubscriptionCollection<Subscription, SubscriptionModel<Subscription>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
