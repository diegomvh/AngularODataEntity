import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CalendarEvent } from './calendarevent.entity';
import { CalendarEventCollection } from './calendarevent.collection';
//#endregion

@Model()
export class CalendarEventModel<E extends CalendarEvent> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  UniqueId!: string;
  
  
  @ModelField()
  Title?: string;
  
  
  @ModelField()
  Url?: string;
  
  
  @ModelField()
  MetaDescription?: string;
  
  
  @ModelField()
  Image?: string;
  
  
  @ModelField()
  ImageAlt?: string;
  
  
  @ModelField()
  Description?: string;
  
  
  @ModelField()
  PlannedPublicationTime!: Date;
  
  
  @ModelField()
  ReportingPeriod?: string;
  
  
  @ModelField()
  Priority!: number;
  
  
  @ModelField()
  UnderEmbargo!: boolean;
  
  
  @ModelField()
  PublishTimeUnknown!: boolean;
  
  
  @ModelField()
  RegionalClassification?: string;
  
  
  @ModelField()
  Themes?: string[];
  
  
  @ModelField()
  Language?: string;
  
  
  @ModelField()
  Version!: number;
  
  
  @ModelField()
  SortOrder!: number;
  
  
  @ModelField()
  ItemNameLowerCase?: string;
  
  
  @ModelField()
  Updated!: Date;
  
  
  @ModelField()
  Created!: Date;
  
  
  @ModelField()
  Permalink?: string;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}