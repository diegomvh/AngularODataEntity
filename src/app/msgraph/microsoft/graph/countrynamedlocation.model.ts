import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { NamedLocationModel } from './namedlocation.model';
import { CountryNamedLocation } from './countrynamedlocation.entity';
import { CountryNamedLocationCollection } from './countrynamedlocation.collection';
//#endregion

export class CountryNamedLocationModel<E extends CountryNamedLocation> extends NamedLocationModel<E> {
  //#region ODataApi Properties
  countriesAndRegions: string[];
  includeUnknownCountriesAndRegions: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}