import { RedSocial } from './red-social';
import { Datos } from './datos';
export interface DatosPersonales {
    titulo?:             string;
    descripcionCorta?:   string;
    datos?:              Datos[];
    redSocial?:          RedSocial[];
}