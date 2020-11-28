import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Advertisement } from './advertisement.entity';
import { AdvertisementCollection } from './advertisement.collection';
//#endregion

export class AdvertisementModel<E extends Advertisement> extends ODataModel<E> {
  //#region ODataApi Properties
  ID: string;
  Name?: string;
  AirDate: any;
  FeaturedProduct?: FeaturedProductModel<FeaturedProduct>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}