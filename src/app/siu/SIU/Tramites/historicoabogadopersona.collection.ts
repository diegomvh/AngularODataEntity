import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Requirente } from '../Personas/requirente.entity';
import { Empleado } from '../Personas/empleado.entity';
import { RequirenteCaso } from './requirentecaso.entity';
import { CasoPenal } from './casopenal.entity';
import { HistoricoAbogadoPersona } from './historicoabogadopersona.entity';
import { RequirenteModel } from '../Personas/requirente.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { RequirenteCasoModel } from './requirentecaso.model';
import { CasoPenalModel } from './casopenal.model';
import { HistoricoAbogadoPersonaModel } from './historicoabogadopersona.model';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { RequirenteCasoCollection } from './requirentecaso.collection';
import { CasoPenalCollection } from './casopenal.collection';
//#endregion

export class HistoricoAbogadoPersonaCollection<E extends HistoricoAbogadoPersona, M extends HistoricoAbogadoPersonaModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}