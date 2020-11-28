import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Juzgado } from './juzgado.entity';
import { Secretaria } from './secretaria.entity';
import { Expediente } from '../Tramites/expediente.entity';
import { JuzgadoModel } from './juzgado.model';
import { SecretariaModel } from './secretaria.model';
import { ExpedienteModel } from '../Tramites/expediente.model';
import { SecretariaCollection } from './secretaria.collection';
import { ExpedienteCollection } from '../Tramites/expediente.collection';
//#endregion

export class JuzgadoCollection<E extends Juzgado, M extends JuzgadoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}