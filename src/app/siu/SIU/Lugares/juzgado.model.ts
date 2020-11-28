import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Juzgado } from './juzgado.entity';
import { Secretaria } from './secretaria.entity';
import { Expediente } from '../Tramites/expediente.entity';
import { SecretariaModel } from './secretaria.model';
import { ExpedienteModel } from '../Tramites/expediente.model';
import { JuzgadoCollection } from './juzgado.collection';
import { SecretariaCollection } from './secretaria.collection';
import { ExpedienteCollection } from '../Tramites/expediente.collection';
//#endregion

export class JuzgadoModel<E extends Juzgado> extends ODataModel<E> {
  //#region ODataApi Properties
  nombresJuez?: string;
  apellidosJuez?: string;
  fuero?: string;
  telefono?: string;
  guid: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  expedientes?: ExpedienteCollection<Expediente, ExpedienteModel<Expediente>>;
  secretarias?: SecretariaCollection<Secretaria, SecretariaModel<Secretaria>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}