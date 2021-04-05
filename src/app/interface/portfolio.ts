import { RedSocial } from "./red-social";
import { Skill } from "./skill";
import { TimeLine } from './time-line';
import { Certificacion } from './certificacion';
import { Servicio } from './servicio';
import { Proyectos } from './proyectos';
import { Testimonio } from './testimonio';

export interface Portfolio {
    nombre?:             string;
    fechaNacimiento?:    string;
    localidad?:          string;
    codigoPostal?:       string;
    email?:              string;
    telefonoMovil?:      string;
    titulo?:             string;
    presentacion?:       string;
    descripcionCorta?:   string;
    urlCurriculum?:      string;
    redSocial?:          RedSocial[];
    experienciaLaboral?: TimeLine[];
    estudios?:           TimeLine[];
    skills?:             Skill[];
    cursos?:             Certificacion[];
    certificacion?:      Certificacion[];
    servicios?:          Servicio[];
    proyectos?:          Proyectos[];
    testimonios?:        Testimonio[];
}
