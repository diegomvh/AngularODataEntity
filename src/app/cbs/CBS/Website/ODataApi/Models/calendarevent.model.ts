import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CalendarEvent } from './calendarevent.entity';
import { CalendarEventCollection } from './calendarevent.collection';
//#endregion

export class CalendarEventModel<E extends CalendarEvent> extends ODataModel<E> {
  //#region ODataApi Properties
  UniqueId!: string;
  Title?: string;
  Url?: string;
  MetaDescription?: string;
  Image?: string;
  ImageAlt?: string;
  Description?: string;
  PlannedPublicationTime!: Date;
  ReportingPeriod?: string;
  Priority!: number;
  UnderEmbargo!: boolean;
  PublishTimeUnknown!: boolean;
  RegionalClassification?: string;
  Themes?: string[];
  Language?: string;
  Version!: number;
  SortOrder!: number;
  ItemNameLowerCase?: string;
  Updated!: Date;
  Created!: Date;
  Permalink?: string;
  //#endregion
  //#region ODataApi Setters
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}