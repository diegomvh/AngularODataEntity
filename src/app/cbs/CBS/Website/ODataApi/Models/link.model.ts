﻿import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Link } from './link.complex';
import { LinkCollection } from './link.collection';
//#endregion

@Model()
export class LinkModel<E extends Link> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  Text?: string;
  
  
  @ModelField()
  Url?: string;
  
  
  @ModelField()
  Prefix?: string;
  
  
  @ModelField()
  TargetId?: string;
  
  
  @ModelField()
  Icon?: string;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}