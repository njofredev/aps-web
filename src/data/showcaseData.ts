export interface DocumentoOficio {
  id: string;
  codigo: string;
  titulo: string;
  tipo: 'Oficio MINSAL' | 'Protocolo Clínico' | 'Acta de Sector' | 'Farmacia & Insumos';
  sector: 'Sector Azul' | 'Sector Verde' | 'Sector Rojo' | 'Transversal' | 'Dirección';
  fecha: string;
  estadoIa: 'Clasificado y Resumido' | 'Pendiente Validación' | 'Indexado en Búsqueda';
  resumenIa: string;
  vigenteAcreditacion: boolean;
}

export interface Funcionario {
  id: string;
  nombre: string;
  estamento: string;
  sector: 'Sector Azul' | 'Sector Verde' | 'Sector Rojo' | 'Transversal / SOME';
  anexo: string;
  box: string;
  disponible: boolean;
}

export interface RedComunitaria {
  id: string;
  entidad: string;
  tipo: 'Junta de Vecinos' | 'Establecimiento Educacional' | 'Club Adulto Mayor' | 'COSOC';
  sectorAsociado: string;
  contacto: string;
  direccion: string;
}

export interface IndicadorGestion {
  codigo: string;
  nombre: string;
  meta: string;
  actual: string;
  avance: number;
  estado: 'Al día' | 'En seguimiento' | 'Requiere atención';
  fuente: string;
}

export const OFICIOS_MOCK: DocumentoOficio[] = [
  {
    id: 'doc-1',
    codigo: 'ORD-1420/2026',
    titulo: 'Actualización Protocolo Derivación Cardiovascular GES',
    tipo: 'Protocolo Clínico',
    sector: 'Transversal',
    fecha: '12 nov 2026',
    estadoIa: 'Clasificado y Resumido',
    resumenIa:
      'Actualiza criterios de referencia secundaria en HTA refractaria y ajuste de metas de LDL. Sin datos sensibles de pacientes.',
    vigenteAcreditacion: true,
  },
  {
    id: 'doc-2',
    codigo: 'MEMO-089/2026',
    titulo: 'Recepción Lote Insulinas NPH y Metformina Farmacia Central',
    tipo: 'Farmacia & Insumos',
    sector: 'Transversal',
    fecha: '11 nov 2026',
    estadoIa: 'Clasificado y Resumido',
    resumenIa:
      'Stock confirmado para abastecimiento quincenal. Se notifica a encargados de programa de los sectores Azul y Verde.',
    vigenteAcreditacion: true,
  },
  {
    id: 'doc-3',
    codigo: 'ORD-098/2026',
    titulo: 'Lineamientos Campaña Vacunación e Inmunización Escolar',
    tipo: 'Oficio MINSAL',
    sector: 'Sector Azul',
    fecha: '09 nov 2026',
    estadoIa: 'Indexado en Búsqueda',
    resumenIa:
      'Calendario de rondas territoriales en colegios del cuadrante norte. Coordina equipo TENS y Enfermería.',
    vigenteAcreditacion: true,
  },
  {
    id: 'doc-4',
    codigo: 'ACT-045/2026',
    titulo: 'Reunión de Sector Amarillo: Asignación de Boxes y Turnos',
    tipo: 'Acta de Sector',
    sector: 'Sector Verde',
    fecha: '06 nov 2026',
    estadoIa: 'Clasificado y Resumido',
    resumenIa:
      'Reordenamiento de boxes para procedimientos y extensión horaria de profesionales durante el mes en curso.',
    vigenteAcreditacion: true,
  },
];

export const FUNCIONARIOS_MOCK: Funcionario[] = [
  {
    id: '1',
    nombre: 'Dra. Camila Soto Vallejos',
    estamento: 'Médico de Familia (Adulto Mayor)',
    sector: 'Sector Azul',
    anexo: '201',
    box: 'Box 04',
    disponible: true,
  },
  {
    id: '2',
    nombre: 'Enf. Rodrigo Morales Castro',
    estamento: 'Enfermero Encargado Cardiovascular',
    sector: 'Sector Verde',
    anexo: '208',
    box: 'Box 07',
    disponible: true,
  },
  {
    id: '3',
    nombre: 'TENS Marcela Fuentes Silva',
    estamento: 'TENS Sala Procedimientos',
    sector: 'Transversal / SOME',
    anexo: '105',
    box: 'Sala Curaciones',
    disponible: true,
  },
  {
    id: '4',
    nombre: 'Mat. Paulina Vera Gallardo',
    estamento: 'Matrona Salud Sexual y Reproductiva',
    sector: 'Sector Verde',
    anexo: '214',
    box: 'Box 11',
    disponible: false,
  },
  {
    id: '5',
    nombre: 'Ps. Cristóbal Henríquez Mena',
    estamento: 'Psicólogo Programa Salud Mental',
    sector: 'Sector Azul',
    anexo: '204',
    box: 'Box 02',
    disponible: true,
  },
  {
    id: '6',
    nombre: 'QF. Esteban Rivas Maldonado',
    estamento: 'Químico Farmacéutico de Centro',
    sector: 'Transversal / SOME',
    anexo: '301',
    box: 'Farmacia Central',
    disponible: true,
  },
];

export const REDES_COMUNITARIAS_MOCK: RedComunitaria[] = [
  {
    id: 'rc-1',
    entidad: 'Junta de Vecinos Villa La Esperanza',
    tipo: 'Junta de Vecinos',
    sectorAsociado: 'Sector Azul',
    contacto: 'Presidenta Sra. Marta Gómez (Fono 9 8452 1120)',
    direccion: 'Av. Los Aromos 1240',
  },
  {
    id: 'rc-2',
    entidad: 'Colegio Polivalente San Francisco',
    tipo: 'Establecimiento Educacional',
    sectorAsociado: 'Sector Verde',
    contacto: 'Prof. Orientador Carlos Navarrete',
    direccion: 'Calle Lautaro 890',
  },
  {
    id: 'rc-3',
    entidad: 'Club de Adulto Mayor Los Años Dorados',
    tipo: 'Club Adulto Mayor',
    sectorAsociado: 'Sector Azul',
    contacto: 'Don Raúl Valenzuela',
    direccion: 'Pasaje El Roble 34',
  },
  {
    id: 'rc-4',
    entidad: 'Consejo de Desarrollo Local (COSOC Salud)',
    tipo: 'COSOC',
    sectorAsociado: 'Transversal',
    contacto: 'Directorio Comunitario de Salud',
    direccion: 'Sede Social Central',
  },
];

export const INDICADORES_MOCK: IndicadorGestion[] = [
  {
    codigo: 'REM A01',
    nombre: 'Cobertura Control de Salud Cardiovascular',
    meta: '80.0%',
    actual: '83.4%',
    avance: 83.4,
    estado: 'Al día',
    fuente: 'Consolidado REM mensual automatizado',
  },
  {
    codigo: 'REM B04',
    nombre: 'Cobertura Examen PAP en Mujeres de 25 a 64 años',
    meta: '75.0%',
    actual: '71.8%',
    avance: 71.8,
    estado: 'En seguimiento',
    fuente: 'Reporte interno de matronería',
  },
  {
    codigo: 'GEST-01',
    nombre: 'Documentos Institucionales Vigentes para Acreditación',
    meta: '90.0%',
    actual: '94.2%',
    avance: 94.2,
    estado: 'Al día',
    fuente: 'Nextcloud DMS con control de versiones',
  },
  {
    codigo: 'BURN-02',
    nombre: 'Tiempo Promedio de Búsqueda de Protocolos por Funcionario',
    meta: '< 3 min',
    actual: '1.2 min (-58%)',
    avance: 88,
    estado: 'Al día',
    fuente: 'Estudio de impacto pre/post MBI-HSS',
  },
];
