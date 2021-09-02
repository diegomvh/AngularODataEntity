import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  Model, 
  ModelField, 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpQueryOptions, 
  Duration, 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Photo } from './photo.entity';
import { PlanItem } from './planitem.entity';
import { Trip } from './trip.entity';
import { PhotoModel } from './photo.model';
import { PlanItemModel } from './planitem.model';
import { PhotoCollection } from './photo.collection';
import { PlanItemCollection } from './planitem.collection';
import { TripCollection } from './trip.collection';
//#endregion

@Model()
export class TripModel<E extends Trip> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  TripId!: number;
  public $TripId() {
    return this.property<number>('TripId');
  }
  public getTripId(options?: HttpOptions) {
    return this.getValue<number>('TripId', options) as Observable<number>;
  }
  
  @ModelField()
  ShareId?: string;
  public $ShareId() {
    return this.property<string>('ShareId');
  }
  public getShareId(options?: HttpOptions) {
    return this.getValue<string>('ShareId', options) as Observable<string>;
  }
  
  @ModelField()
  Description?: string;
  public $Description() {
    return this.property<string>('Description');
  }
  public getDescription(options?: HttpOptions) {
    return this.getValue<string>('Description', options) as Observable<string>;
  }
  
  @ModelField()
  Name!: string;
  public $Name() {
    return this.property<string>('Name');
  }
  public getName(options?: HttpOptions) {
    return this.getValue<string>('Name', options) as Observable<string>;
  }
  
  @ModelField()
  Budget!: number;
  public $Budget() {
    return this.property<number>('Budget');
  }
  public getBudget(options?: HttpOptions) {
    return this.getValue<number>('Budget', options) as Observable<number>;
  }
  
  @ModelField()
  StartsAt!: Date;
  public $StartsAt() {
    return this.property<Date>('StartsAt');
  }
  public getStartsAt(options?: HttpOptions) {
    return this.getValue<Date>('StartsAt', options) as Observable<Date>;
  }
  
  @ModelField()
  EndsAt!: Date;
  public $EndsAt() {
    return this.property<Date>('EndsAt');
  }
  public getEndsAt(options?: HttpOptions) {
    return this.getValue<Date>('EndsAt', options) as Observable<Date>;
  }
  
  @ModelField()
  Tags!: string[];
  public $Tags() {
    return this.property<string[]>('Tags');
  }
  public getTags(options?: HttpOptions) {
    return this.getValue<string[]>('Tags', options) as Observable<string[]>;
  }
  
  @ModelField()
  Photos?: PhotoCollection<Photo, PhotoModel<Photo>>;
  public $Photos() {
    return this.navigationProperty<Photo>('Photos');
  }
  public getPhotos() {
    return this.getReference<Photo>('Photos') as PhotoCollection<Photo, PhotoModel<Photo>>;
  }
  public setPhotos(model: PhotoCollection<Photo, PhotoModel<Photo>> | null, options?: HttpOptions) {
    return this.setReference<Photo>('Photos', model, options);
  }
  @ModelField()
  PlanItems?: PlanItemCollection<PlanItem, PlanItemModel<PlanItem>>;
  public $PlanItems() {
    return this.navigationProperty<PlanItem>('PlanItems');
  }
  public getPlanItems() {
    return this.getReference<PlanItem>('PlanItems') as PlanItemCollection<PlanItem, PlanItemModel<PlanItem>>;
  }
  public setPlanItems(model: PlanItemCollection<PlanItem, PlanItemModel<PlanItem>> | null, options?: HttpOptions) {
    return this.setReference<PlanItem>('PlanItems', model, options);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}