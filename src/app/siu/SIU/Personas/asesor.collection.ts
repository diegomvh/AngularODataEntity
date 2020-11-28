import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Asesor } from './asesor.entity';
import { Expediente } from '../Tramites/expediente.entity';
import { AsesorModel } from './asesor.model';
import { ExpedienteModel } from '../Tramites/expediente.model';
import { ExpedienteCollection } from '../Tramites/expediente.collection';
//#endregion

export class AsesorCollection<E extends Asesor, M extends AsesorModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}