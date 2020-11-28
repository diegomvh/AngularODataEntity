import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from '../entity.model';
import { Endpoint } from './endpoint.entity';
import { FailureInfo } from './failureinfo.entity';
import { Media } from './media.entity';
import { Segment } from './segment.entity';
import { EndpointModel } from './endpoint.model';
import { FailureInfoModel } from './failureinfo.model';
import { MediaModel } from './media.model';
import { EndpointCollection } from './endpoint.collection';
import { FailureInfoCollection } from './failureinfo.collection';
import { MediaCollection } from './media.collection';
import { SegmentCollection } from './segment.collection';
//#endregion

export class SegmentModel<E extends Segment> extends EntityModel<E> {
  //#region ODataApi Properties
  callee?: EndpointModel<Endpoint>;
  caller?: EndpointModel<Endpoint>;
  endDateTime: Date;
  failureInfo?: FailureInfoModel<FailureInfo>;
  media?: MediaCollection<Media, MediaModel<Media>>;
  startDateTime: Date;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}