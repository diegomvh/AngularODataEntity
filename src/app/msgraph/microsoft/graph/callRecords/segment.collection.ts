import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from '../entity.collection';
import { Endpoint } from './endpoint.entity';
import { FailureInfo } from './failureinfo.entity';
import { Media } from './media.entity';
import { Segment } from './segment.entity';
import { EndpointModel } from './endpoint.model';
import { FailureInfoModel } from './failureinfo.model';
import { MediaModel } from './media.model';
import { SegmentModel } from './segment.model';
import { EndpointCollection } from './endpoint.collection';
import { FailureInfoCollection } from './failureinfo.collection';
import { MediaCollection } from './media.collection';
//#endregion

export class SegmentCollection<E extends Segment, M extends SegmentModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}