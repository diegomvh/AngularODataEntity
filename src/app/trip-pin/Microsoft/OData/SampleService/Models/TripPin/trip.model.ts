import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryableOptions,
  ODataFunctionOptions,
  ODataActionOptions,
} from 'angular-odata';

import { Trip } from './trip.entity';
import { Photo } from './photo.entity';
import { PhotoModel } from './photo.model';
import { PhotoCollection } from './photo.collection';
import { PlanItem } from './plan-item.entity';
import { PlanItemModel } from './plan-item.model';
import { PlanItemCollection } from './plan-item.collection';

// #region Custom
// #endregion Custom
@Model()
export class TripModel<E extends Trip> extends ODataModel<E> {
  @ModelField()
  declare TripId: number;
  public $$TripId() {
    return this.property<number>('TripId');
  }
  public $TripId() {
    return this.getAttribute<number>('TripId') as number;
  }
  public TripId$(options?: ODataQueryableOptions<number>) {
    return this.fetchAttribute<number>('TripId', options) as Observable<number>;
  }

  @ModelField()
  declare ShareId: string;
  public $$ShareId() {
    return this.property<string>('ShareId');
  }
  public $ShareId() {
    return this.getAttribute<string>('ShareId') as string;
  }
  public ShareId$(options?: ODataQueryableOptions<string>) {
    return this.fetchAttribute<string>('ShareId', options) as Observable<string>;
  }

  @ModelField()
  declare Description: string;
  public $$Description() {
    return this.property<string>('Description');
  }
  public $Description() {
    return this.getAttribute<string>('Description') as string;
  }
  public Description$(options?: ODataQueryableOptions<string>) {
    return this.fetchAttribute<string>('Description', options) as Observable<string>;
  }

  @ModelField()
  declare Name: string;
  public $$Name() {
    return this.property<string>('Name');
  }
  public $Name() {
    return this.getAttribute<string>('Name') as string;
  }
  public Name$(options?: ODataQueryableOptions<string>) {
    return this.fetchAttribute<string>('Name', options) as Observable<string>;
  }

  @ModelField()
  declare Budget: number;
  public $$Budget() {
    return this.property<number>('Budget');
  }
  public $Budget() {
    return this.getAttribute<number>('Budget') as number;
  }
  public Budget$(options?: ODataQueryableOptions<number>) {
    return this.fetchAttribute<number>('Budget', options) as Observable<number>;
  }

  @ModelField()
  declare StartsAt: Date;
  public $$StartsAt() {
    return this.property<Date>('StartsAt');
  }
  public $StartsAt() {
    return this.getAttribute<Date>('StartsAt') as Date;
  }
  public StartsAt$(options?: ODataQueryableOptions<Date>) {
    return this.fetchAttribute<Date>('StartsAt', options) as Observable<Date>;
  }

  @ModelField()
  declare EndsAt: Date;
  public $$EndsAt() {
    return this.property<Date>('EndsAt');
  }
  public $EndsAt() {
    return this.getAttribute<Date>('EndsAt') as Date;
  }
  public EndsAt$(options?: ODataQueryableOptions<Date>) {
    return this.fetchAttribute<Date>('EndsAt', options) as Observable<Date>;
  }

  @ModelField()
  declare Tags: string[];
  public $$Tags() {
    return this.property<string[]>('Tags');
  }
  public $Tags() {
    return this.getAttribute<string[]>('Tags') as string[];
  }
  public Tags$(options?: ODataQueryableOptions<string[]>) {
    return this.fetchAttribute<string[]>('Tags', options) as Observable<string[]>;
  }

  @ModelField()
  declare Photos?: PhotoCollection<Photo, PhotoModel<Photo>>;
  public $$Photos() {
    return this.navigationProperty<Photo>('Photos');
  }
  public $Photos() {
    return this.getAttribute<Photo>('Photos') as PhotoCollection<Photo, PhotoModel<Photo>>;
  }
  public Photos$$(model: PhotoCollection<Photo, PhotoModel<Photo>> | null, options?: ODataOptions) {
    return this.setReference<Photo>('Photos', model, options);
  }
  public Photos$(options?: ODataQueryableOptions<Photo>) {
    return this.fetchAttribute<Photo>('Photos', options) as Observable<
      PhotoCollection<Photo, PhotoModel<Photo>>
    >;
  }

  @ModelField()
  declare PlanItems?: PlanItemCollection<PlanItem, PlanItemModel<PlanItem>>;
  public $$PlanItems() {
    return this.navigationProperty<PlanItem>('PlanItems');
  }
  public $PlanItems() {
    return this.getAttribute<PlanItem>('PlanItems') as PlanItemCollection<
      PlanItem,
      PlanItemModel<PlanItem>
    >;
  }
  public PlanItems$$(
    model: PlanItemCollection<PlanItem, PlanItemModel<PlanItem>> | null,
    options?: ODataOptions,
  ) {
    return this.setReference<PlanItem>('PlanItems', model, options);
  }
  public PlanItems$(options?: ODataQueryableOptions<PlanItem>) {
    return this.fetchAttribute<PlanItem>('PlanItems', options) as Observable<
      PlanItemCollection<PlanItem, PlanItemModel<PlanItem>>
    >;
  }

  // #region Custom
  // #endregion Custom
}
// #region Custom
// #endregion Custom
