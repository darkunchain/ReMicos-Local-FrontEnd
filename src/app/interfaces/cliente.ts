export interface Cliente {
  turno?: number;
  nombre: string;
  telefono?: number;
  tiempo: number;
  ingresos: number,
  accion: string;
  blink: Boolean;
  createdAt?: Date | String;
  isoDate: Date;
}
