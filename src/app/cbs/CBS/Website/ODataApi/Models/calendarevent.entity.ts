import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface CalendarEvent {
  //#region ODataApi Properties
  UniqueId: string;
  Title?: string;
  Url?: string;
  MetaDescription?: string;
  Image?: string;
  ImageAlt?: string;
  Description?: string;
  PlannedPublicationTime: Date;
  ReportingPeriod?: string;
  Priority: number;
  UnderEmbargo: boolean;
  PublishTimeUnknown: boolean;
  RegionalClassification?: string;
  Themes?: string[];
  Language?: string;
  Version: number;
  SortOrder: number;
  ItemNameLowerCase?: string;
  Updated: Date;
  Created: Date;
  Permalink?: string;
  //#endregion
}