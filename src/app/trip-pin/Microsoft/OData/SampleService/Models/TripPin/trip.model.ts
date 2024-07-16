import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions,
  Duration,
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Photo } from './photo.entity';
import { PlanItem } from './plan-item.entity';
import { Trip } from './trip.entity';
import { PhotoModel } from './photo.model';
import { PlanItemModel } from './plan-item.model';
import { PhotoCollection } from './photo.collection';
import { PlanItemCollection } from './plan-item.collection';
import { TripCollection } from './trip.collection';
//#endregion

@Model()
export class TripModel<E extends Trip> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  TripId!: number;
  public $$TripId() {
    return this.property<number>('TripId');
  }
  public $TripId() {
    return this.getAttribute<number>('TripId') as number;
  }
  
  public TripId$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('TripId', options) as Observable<number>;
  }
  @ModelField()
  ShareId?: string;
  public $$ShareId() {
    return this.property<string>('ShareId');
  }
  public $ShareId() {
    return this.getAttribute<string>('ShareId') as string;
  }
  
  public ShareId$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ShareId', options) as Observable<string>;
  }
  @ModelField()
  Description?: string;
  public $$Description() {
    return this.property<string>('Description');
  }
  public $Description() {
    return this.getAttribute<string>('Description') as string;
  }
  
  public Description$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Description', options) as Observable<string>;
  }
  @ModelField()
  Name!: string;
  public $$Name() {
    return this.property<string>('Name');
  }
  public $Name() {
    return this.getAttribute<string>('Name') as string;
  }
  
  public Name$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Name', options) as Observable<string>;
  }
  @ModelField()
  Budget!: number;
  public $$Budget() {
    return this.property<number>('Budget');
  }
  public $Budget() {
    return this.getAttribute<number>('Budget') as number;
  }
  
  public Budget$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('Budget', options) as Observable<number>;
  }
  @ModelField()
  StartsAt!: Date;
  public $$StartsAt() {
    return this.property<Date>('StartsAt');
  }
  public $StartsAt() {
    return this.getAttribute<Date>('StartsAt') as Date;
  }
  
  public StartsAt$(options?: ODataQueryArgumentsOptions<Date>) {
    return this.fetchAttribute<Date>('StartsAt', options) as Observable<Date>;
  }
  @ModelField()
  EndsAt!: Date;
  public $$EndsAt() {
    return this.property<Date>('EndsAt');
  }
  public $EndsAt() {
    return this.getAttribute<Date>('EndsAt') as Date;
  }
  
  public EndsAt$(options?: ODataQueryArgumentsOptions<Date>) {
    return this.fetchAttribute<Date>('EndsAt', options) as Observable<Date>;
  }
  @ModelField()
  Tags!: string[];
  public $$Tags() {
    return this.property<string[]>('Tags');
  }
  public $Tags() {
    return this.getAttribute<string[]>('Tags') as string[];
  }
  
  public Tags$(options?: ODataQueryArgumentsOptions<string[]>) {
    return this.fetchAttribute<string[]>('Tags', options) as Observable<string[]>;
  }
  @ModelField()
  Photos?: PhotoCollection<Photo, PhotoModel<Photo>>;
  public $$Photos() {
    return this.navigationProperty<Photo>('Photos');
  }
  public $Photos() {
    return this.getAttribute<Photo>('Photos') as PhotoCollection<Photo, PhotoModel<Photo>>;
  }
  public Photos$$(model: PhotoCollection<Photo, PhotoModel<Photo>> | null, options?: ODataOptions) {
    return this.setReference<Photo>('Photos', model, options);
  }
  public Photos$(options?: ODataQueryArgumentsOptions<Photo>) {
      return this.fetchAttribute<Photo>('Photos', options) as Observable<PhotoCollection<Photo, PhotoModel<Photo>>>;
    }
  @ModelField()
  PlanItems?: PlanItemCollection<PlanItem, PlanItemModel<PlanItem>>;
  public $$PlanItems() {
    return this.navigationProperty<PlanItem>('PlanItems');
  }
  public $PlanItems() {
    return this.getAttribute<PlanItem>('PlanItems') as PlanItemCollection<PlanItem, PlanItemModel<PlanItem>>;
  }
  public PlanItems$$(model: PlanItemCollection<PlanItem, PlanItemModel<PlanItem>> | null, options?: ODataOptions) {
    return this.setReference<PlanItem>('PlanItems', model, options);
  }
  public PlanItems$(options?: ODataQueryArgumentsOptions<PlanItem>) {
      return this.fetchAttribute<PlanItem>('PlanItems', options) as Observable<PlanItemCollection<PlanItem, PlanItemModel<PlanItem>>>;
    }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}