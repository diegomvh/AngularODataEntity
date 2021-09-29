//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
//#endregion

export interface CalendarEvent {
  //#region ODataApiGen Properties
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