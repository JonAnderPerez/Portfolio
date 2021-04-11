import { RedSocial } from "./red-social";
import { Skill } from "./skill";
import { TimeLine } from './time-line';
import { Certificacion } from './certificacion';
import { Servicio } from './servicio';
import { Proyectos } from './proyectos';
import { Testimonio } from './testimonio';
import { DatosPersonales } from './datos-personales';

export interface Portfolio {
    urlCurriculum?:      string;
    datosPersonales?:    DatosPersonales[];
    experienciaLaboral?: TimeLine[];
    estudios?:           TimeLine[];
    skills?:             Skill[];
    cursos?:             Certificacion[];
    certificacion?:      Certificacion[];
    servicios?:          Servicio[];
    proyectos?:          Proyectos[];
    testimonios?:        Testimonio[];
}
