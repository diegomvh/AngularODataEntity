import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TableInfo } from './tableinfo.entity';
import { TableInfoCollection } from './tableinfo.collection';
//#endregion

export class TableInfoModel<E extends TableInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  ID!: number;
  Title?: string;
  ShortTitle?: string;
  Identifier?: string;
  Summary?: string;
  Modified?: any;
  ReasonDelivery?: string;
  ExplanatoryText?: string;
  Language?: string;
  Catalog?: string;
  Frequency?: string;
  Period?: string;
  ShortDescription?: string;
  Description?: string;
  DefaultPresentation?: string;
  DefaultSelection?: string;
  GraphTypes?: string;
  OutputStatus?: string;
  Source?: string;
  MetaDataModified?: any;
  SearchPriority?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}