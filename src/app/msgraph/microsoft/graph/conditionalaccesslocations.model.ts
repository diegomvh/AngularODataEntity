import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConditionalAccessLocations } from './conditionalaccesslocations.entity';
import { ConditionalAccessLocationsCollection } from './conditionalaccesslocations.collection';
//#endregion

export class ConditionalAccessLocationsModel<E extends ConditionalAccessLocations> extends ODataModel<E> {
  //#region ODataApi Properties
  excludeLocations: string[];
  includeLocations: string[];
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}