﻿import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ErratumItem } from './erratumitem.complex';
import { ErratumItemCollection } from './erratumitem.collection';
//#endregion

@Model()
export class ErratumItemModel<E extends ErratumItem> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  PresentationTime!: Date;
  
  
  @ModelField()
  Body?: string;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}