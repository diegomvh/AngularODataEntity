import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { NamedLocationCollection } from './namedlocation.collection';
import { CountryNamedLocation } from './countrynamedlocation.entity';
import { CountryNamedLocationModel } from './countrynamedlocation.model';
//#endregion

export class CountryNamedLocationCollection<E extends CountryNamedLocation, M extends CountryNamedLocationModel<E>> extends NamedLocationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}