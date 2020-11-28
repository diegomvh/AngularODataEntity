import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AcumulacionCarpeta } from './acumulacioncarpeta.entity';
import { CasoPenal } from './casopenal.entity';
import { CasoPenalModel } from './casopenal.model';
import { AcumulacionCarpetaCollection } from './acumulacioncarpeta.collection';
import { CasoPenalCollection } from './casopenal.collection';
//#endregion

export class AcumulacionCarpetaModel<E extends AcumulacionCarpeta> extends ODataModel<E> {
  //#region ODataApi Properties
  casoHijoId: number;
  casoPadreId: number;
  motivo?: string;
  desde: Date;
  hasta?: Date;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  casoHijo?: CasoPenalModel<CasoPenal>;
  casoPadre?: CasoPenalModel<CasoPenal>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}