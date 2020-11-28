import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Fiscal } from './fiscal.entity';
import { Expediente } from '../Tramites/expediente.entity';
import { FiscalModel } from './fiscal.model';
import { ExpedienteModel } from '../Tramites/expediente.model';
import { ExpedienteCollection } from '../Tramites/expediente.collection';
//#endregion

export class FiscalCollection<E extends Fiscal, M extends FiscalModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}