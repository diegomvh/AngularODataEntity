import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ResourceVisualization } from './resourcevisualization.entity';
import { ResourceVisualizationCollection } from './resourcevisualization.collection';
//#endregion

export class ResourceVisualizationModel<E extends ResourceVisualization> extends ODataModel<E> {
  //#region ODataApi Properties
  containerDisplayName?: string;
  containerType?: string;
  containerWebUrl?: string;
  mediaType?: string;
  previewImageUrl?: string;
  previewText?: string;
  title?: string;
  type?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}