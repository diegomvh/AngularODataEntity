import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CasoPenalReporte } from './casopenalreporte.entity';
import { CasoPenalReporteCollection } from './casopenalreporte.collection';
//#endregion

export class CasoPenalReporteModel<E extends CasoPenalReporte> extends ODataModel<E> {
  //#region ODataApi Properties
  id: number;
  nuf?: string;
  nic?: string;
  nej?: string;
  fiscalia?: string;
  hecho?: Date;
  desde: Date;
  caratula?: string;
  subMateria?: string;
  observaciones?: string;
  principal?: string;
  alternativo?: string;
  participantes?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}