import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoOficina } from '../Recursos/recursooficina.entity';
import { Oficina } from './oficina.entity';
import { Localidad } from './localidad.entity';
import { Empleado } from '../Personas/empleado.entity';
import { DeclaracionJurada } from '../Personas/declaracionjurada.entity';
import { RequirenteEnEspera } from '../Personas/requirenteenespera.entity';
import { RequirenteOficina } from '../Personas/requirenteoficina.entity';
import { Caso } from '../Tramites/caso.entity';
import { RequirenteExpediente } from '../Tramites/requirenteexpediente.entity';
import { Intervencion } from '../Tramites/intervencion.entity';
import { Expediente } from '../Tramites/expediente.entity';
import { Escrito } from '../Tramites/escrito.entity';
import { Avenimiento } from '../Tramites/avenimiento.entity';
import { Materia } from '../Tramites/materia.entity';
import { Cita } from '../Agenda/cita.entity';
import { TemaCita } from '../Agenda/temacita.entity';
import { RecursoOficinaModel } from '../Recursos/recursooficina.model';
import { OficinaModel } from './oficina.model';
import { LocalidadModel } from './localidad.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { DeclaracionJuradaModel } from '../Personas/declaracionjurada.model';
import { RequirenteEnEsperaModel } from '../Personas/requirenteenespera.model';
import { RequirenteOficinaModel } from '../Personas/requirenteoficina.model';
import { CasoModel } from '../Tramites/caso.model';
import { RequirenteExpedienteModel } from '../Tramites/requirenteexpediente.model';
import { IntervencionModel } from '../Tramites/intervencion.model';
import { ExpedienteModel } from '../Tramites/expediente.model';
import { EscritoModel } from '../Tramites/escrito.model';
import { AvenimientoModel } from '../Tramites/avenimiento.model';
import { MateriaModel } from '../Tramites/materia.model';
import { CitaModel } from '../Agenda/cita.model';
import { TemaCitaModel } from '../Agenda/temacita.model';
import { RecursoOficinaCollection } from '../Recursos/recursooficina.collection';
import { LocalidadCollection } from './localidad.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { DeclaracionJuradaCollection } from '../Personas/declaracionjurada.collection';
import { RequirenteEnEsperaCollection } from '../Personas/requirenteenespera.collection';
import { RequirenteOficinaCollection } from '../Personas/requirenteoficina.collection';
import { CasoCollection } from '../Tramites/caso.collection';
import { RequirenteExpedienteCollection } from '../Tramites/requirenteexpediente.collection';
import { IntervencionCollection } from '../Tramites/intervencion.collection';
import { ExpedienteCollection } from '../Tramites/expediente.collection';
import { EscritoCollection } from '../Tramites/escrito.collection';
import { AvenimientoCollection } from '../Tramites/avenimiento.collection';
import { MateriaCollection } from '../Tramites/materia.collection';
import { CitaCollection } from '../Agenda/cita.collection';
import { TemaCitaCollection } from '../Agenda/temacita.collection';
//#endregion

export class OficinaCollection<E extends Oficina, M extends OficinaModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}