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
  HttpActionOptions, 
  HttpFunctionOptions, 
  HttpNavigationPropertyOptions, 
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
  
  
  @ModelField()
  ShareId?: string;
  
  
  @ModelField()
  Description?: string;
  
  
  @ModelField()
  Name!: string;
  
  
  @ModelField()
  Budget!: number;
  
  
  @ModelField()
  StartsAt!: Date;
  
  
  @ModelField()
  EndsAt!: Date;
  
  
  @ModelField()
  Tags!: string[];
  
  
  @ModelField()
  Photos?: PhotoCollection<Photo, PhotoModel<Photo>>;
  
  
  @ModelField()
  PlanItems?: PlanItemCollection<PlanItem, PlanItemModel<PlanItem>>;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}