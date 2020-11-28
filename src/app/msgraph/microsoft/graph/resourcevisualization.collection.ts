import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ResourceVisualization } from './resourcevisualization.complex';
import { ResourceVisualizationModel } from './resourcevisualization.model';
//#endregion

export class ResourceVisualizationCollection<E extends ResourceVisualization, M extends ResourceVisualizationModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}