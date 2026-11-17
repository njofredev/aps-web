'use client';

import React, { useState, useEffect } from 'react';
import { ApsLogo } from '@/components/ApsLogo';
import {
  Grid,
  Search,
  Bell,
  Home,
  Folder,
  BrainCircuit,
  BarChart2,
  Pill,
  Map,
  Monitor,
  Activity,
  Image as ImageIcon,
  Calendar,
  Users,
  Layers,
  Newspaper,
  Edit3,
  FileText,
  CheckSquare,
  Zap,
  MessageSquare,
  Contact,
  Smile,
  ChevronDown,
  Lock,
  Send,
  Sparkles,
  ArrowLeft,
  MapPin,
  Video,
  CheckCircle2,
  Plus,
  Minus,
  Crosshair,
  Building2,
  Car,
  HelpCircle,
} from 'lucide-react';

interface HealthCenter {
  id: string;
  tipo: string;
  nombre: string;
  comuna: string;
  servicioSalud: string;
  dotacion: string;
}

const HEALTH_CENTERS: HealthCenter[] = [
  {
    id: 'damianovic',
    tipo: 'SAR',
    nombre: 'SAR Dr. Juan Damianovic',
    comuna: 'Punta Arenas',
    servicioSalud: 'Servicio de Salud Magallanes',
    dotacion: '110 funcionarios',
  },
  {
    id: 'san-geronimo',
    tipo: 'CESFAM',
    nombre: 'CESFAM San Gerónimo',
    comuna: 'Puente Alto',
    servicioSalud: 'Servicio de Salud Metropolitano Sur Oriente',
    dotacion: '185 funcionarios',
  },
  {
    id: 'bachelet',
    tipo: 'CESFAM',
    nombre: 'CESFAM Dr. Alberto Bachelet',
    comuna: 'Conchalí',
    servicioSalud: 'Servicio de Salud Metropolitano Norte',
    dotacion: '140 funcionarios',
  },
  {
    id: 'sapunar',
    tipo: 'CESFAM',
    nombre: 'CESFAM Dr. Remigio Sapunar',
    comuna: 'Arica',
    servicioSalud: 'Servicio de Salud Arica y Parinacota',
    dotacion: '160 funcionarios',
  },
  {
    id: 'volcanes',
    tipo: 'CESFAM',
    nombre: 'CESFAM Los Volcanes',
    comuna: 'Chillán',
    servicioSalud: 'Servicio de Salud Ñuble',
    dotacion: '130 funcionarios',
  },
  {
    id: 'silva-henriquez',
    tipo: 'CESFAM',
    nombre: 'CESFAM Cardenal Silva Henríquez',
    comuna: 'Pudahuel',
    servicioSalud: 'Servicio de Salud Metropolitano Occidente',
    dotacion: '175 funcionarios',
  },
];

type AppKey =
  | 'inicio'
  | 'archivos'
  | 'asistente'
  | 'estadistica'
  | 'farmacia'
  | 'territorio'
  | 'totem'
  | 'epidemiologia'
  | 'fotos'
  | 'calendario'
  | 'contactos'
  | 'deck'
  | 'intravox'
  | 'notas'
  | 'oficina'
  | 'tareas'
  | 'actividad'
  | 'talk';

interface AppItem {
  id: AppKey;
  nombre: string;
  icono: React.ElementType;
  descripcion: string;
}

const ALL_17_APPS: AppItem[] = [
  { id: 'archivos', nombre: 'Archivos', icono: Folder, descripcion: 'Gestión documental y circulares ministeriales con acuse de lectura legal.' },
  { id: 'asistente', nombre: 'Asistente de Decisiones', icono: BrainCircuit, descripcion: 'Síntesis y clasificación de oficios mediante IA local en el rack.' },
  { id: 'estadistica', nombre: 'Estadística', icono: BarChart2, descripcion: 'Monitoreo de metas REM (Ley 19.813) y reportes de gestión comunal.' },
  { id: 'farmacia', nombre: 'Farmacia', icono: Pill, descripcion: 'Control de petitorio comunal de fármacos y alerta de quiebres de stock.' },
  { id: 'territorio', nombre: 'Territorio', icono: Map, descripcion: 'Sectorización MAIS en cuadrantes y georreferenciación de pacientes PADI.' },
  { id: 'totem', nombre: 'Totem', icono: Monitor, descripcion: 'Pantallas informativas y turnos en salas de espera de los centros.' },
  { id: 'epidemiologia', nombre: 'Epidemiología', icono: Activity, descripcion: 'Vigilancia de brotes comunales y seguimiento de alertas sanitarias ENO.' },
  { id: 'fotos', nombre: 'Fotos', icono: ImageIcon, descripcion: 'Registro fotográfico seguro de operativos en terreno y comités técnicos.' },
  { id: 'calendario', nombre: 'Calendario', icono: Calendar, descripcion: 'Coordinación y reserva de boxes clínicos y turnos de extensión horaria.' },
  { id: 'contactos', nombre: 'Contactos', icono: Users, descripcion: 'Directorio telefónico interno de anexos por sector, SOME y red territorial.' },
  { id: 'deck', nombre: 'Deck', icono: Layers, descripcion: 'Tableros Kanban visuales para comités de compras y proyectos comunales.' },
  { id: 'intravox', nombre: 'IntraVox', icono: Newspaper, descripcion: 'Boletín interno del CESFAM, protocolos actualizados y normativas vigentes.' },
  { id: 'notas', nombre: 'Notas', icono: Edit3, descripcion: 'Bitácoras clínicas de enlace rápido entre profesionales y cambio de turno.' },
  { id: 'oficina', nombre: 'Oficina', icono: FileText, descripcion: 'Editor colaborativo de actas de sector y documentos clínicos institucionales.' },
  { id: 'tareas', nombre: 'Tareas', icono: CheckSquare, descripcion: 'Listas de verificación para entrega de box, auditorías y pautas de calidad.' },
  { id: 'actividad', nombre: 'Actividad', icono: Zap, descripcion: 'Registro cronológico inmutable de auditoría institucional según Ley 19.628.' },
  { id: 'talk', nombre: 'Talk', icono: MessageSquare, descripcion: 'Mensajería cifrada y videollamadas locales entre sectores sin usar WhatsApp.' },
];

interface CommentItem {
  id: string;
  author: string;
  role: string;
  avatarBg: string;
  avatarText: string;
  text: string;
  time: string;
}

const INITIAL_COMMENTS: CommentItem[] = [
  {
    id: 'c1',
    author: 'Dra. Marcela Gómez',
    role: 'Médico Sector Verde',
    avatarBg: 'bg-emerald-600',
    avatarText: 'MG',
    text: 'Se actualizó en «Archivos / 01-Acreditación» el protocolo de derivación cardiovascular GES con los nuevos criterios de corte.',
    time: 'Hace 25 min',
  },
  {
    id: 'c2',
    author: 'SOME Central',
    role: 'Admisión y Turnos',
    avatarBg: 'bg-blue-600',
    avatarText: 'SC',
    text: 'Roles de turno de fin de semana confirmados en el calendario institucional del establecimiento.',
    time: 'Hace 1 hora',
  },
];

interface GisSector {
  id: 'azul' | 'verde' | 'rojo' | 'amarillo';
  nombre: string;
  tagColor: string;
  borderStroke: string;
  fillColor: string;
  poblacion: string;
  cronicos: string;
  postrados: number;
  jefeSector: string;
  enfermeraPadi: string;
  tens: string;
  asistenteSocial: string;
  visitasHoy: number;
  visitasCompletadas: number;
  barrios: string[];
}

const GIS_SECTORS: Record<'azul' | 'verde' | 'rojo' | 'amarillo', GisSector> = {
  azul: {
    id: 'azul',
    nombre: 'Sector 1 Azul (Norte)',
    tagColor: 'bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700/50',
    borderStroke: '#3b82f6',
    fillColor: '#1d4ed8',
    poblacion: '8.420 inscritos',
    cronicos: '2.140 usuarios',
    postrados: 38,
    jefeSector: 'Dra. Carolina Vega (Médico de Familia)',
    enfermeraPadi: 'Enf. Rodrigo Salinas',
    tens: 'TENS Marcela Gómez',
    asistenteSocial: 'AS Cristian Valenzuela',
    visitasHoy: 5,
    visitasCompletadas: 3,
    barrios: ['Villa Los Aromos', 'Población Prat', 'Condominio El Cobre'],
  },
  verde: {
    id: 'verde',
    nombre: 'Sector 2 Verde (Centro)',
    tagColor: 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700/50',
    borderStroke: '#10b981',
    fillColor: '#047857',
    poblacion: '7.950 inscritos',
    cronicos: '1.980 usuarios',
    postrados: 32,
    jefeSector: 'Dr. Matías Carrasco (Médico General)',
    enfermeraPadi: 'Enf. Paulina Soto',
    tens: 'TENS Cristian Muñoz',
    asistenteSocial: 'AS Francisca Mora',
    visitasHoy: 4,
    visitasCompletadas: 2,
    barrios: ['Casco Histórico', 'Plaza Central', 'Villa Magisterio'],
  },
  rojo: {
    id: 'rojo',
    nombre: 'Sector 3 Rojo (Sur)',
    tagColor: 'bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-700/50',
    borderStroke: '#ef4444',
    fillColor: '#b91c1c',
    poblacion: '9.110 inscritos',
    cronicos: '2.450 usuarios',
    postrados: 46,
    jefeSector: 'Dra. Daniela Pizarro (Médico de Familia)',
    enfermeraPadi: 'Enf. Javier Morales',
    tens: 'TENS Sandra Castro',
    asistenteSocial: 'AS Gabriel Toledo',
    visitasHoy: 6,
    visitasCompletadas: 4,
    barrios: ['Población San Pedro', 'Sector Industrial', 'Villa Las Rosas'],
  },
  amarillo: {
    id: 'amarillo',
    nombre: 'Sector 4 Amarillo (Oriente)',
    tagColor: 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-700/50',
    borderStroke: '#f59e0b',
    fillColor: '#b45309',
    poblacion: '6.840 inscritos',
    cronicos: '1.620 usuarios',
    postrados: 26,
    jefeSector: 'Dr. Felipe Alarcón (Médico General)',
    enfermeraPadi: 'Enf. Claudia Reyes',
    tens: 'TENS Héctor Valdés',
    asistenteSocial: 'AS Patricia Henríquez',
    visitasHoy: 3,
    visitasCompletadas: 2,
    barrios: ['Villa Los Fundadores', 'Sector Rural Poniente', 'Barrio Estación'],
  },
};

export default function HeroInteractivePreview() {
  // Rotación suave continua de centros
  const [centerIndex, setCenterIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Aplicación activa en pantalla: por defecto 'inicio'
  const [activeApp, setActiveApp] = useState<AppKey>('inicio');

  // Contacto seleccionado para la vista de contactos
  const [selectedContact, setSelectedContact] = useState<string>('admin');

  // Estado interactivo para la vista de Territorio (GIS)
  const [selectedSector, setSelectedSector] = useState<'todos' | 'azul' | 'verde' | 'rojo' | 'amarillo'>('todos');
  const [activeLayers, setActiveLayers] = useState<{
    postrados: boolean;
    comunitarios: boolean;
    ruta: boolean;
  }>({
    postrados: true,
    comunitarios: true,
    ruta: true,
  });
  const [selectedPin, setSelectedPin] = useState<{
    id: string;
    titulo: string;
    tipo: 'padi' | 'comunidad' | 'movil' | 'cesfam';
    detalle: string;
    horario?: string;
    sector: string;
    responsable: string;
  } | null>(null);
  const [mapZoom, setMapZoom] = useState<number>(1);
  const [hoveredAppTooltip, setHoveredAppTooltip] = useState<{
    app: AppItem;
    top: number;
    left: number;
  } | null>(null);

  // Reacciones interactivas
  const [reactions, setReactions] = useState<{ count: number; userReacted: boolean }>({
    count: 24,
    userReacted: false,
  });

  // Comentarios interactivos
  const [comments, setComments] = useState<CommentItem[]>(INITIAL_COMMENTS);
  const [newCommentText, setNewCommentText] = useState('');

  // Rotación suave cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCenterIndex((prev) => (prev + 1) % HEALTH_CENTERS.length);
        setIsFading(false);
      }, 350);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentCenter = HEALTH_CENTERS[centerIndex];

  const handleToggleReaction = () => {
    setReactions((prev) => ({
      count: prev.userReacted ? prev.count - 1 : prev.count + 1,
      userReacted: !prev.userReacted,
    }));
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment: CommentItem = {
      id: `c-${Date.now()}`,
      author: 'Tú (Funcionario de Salud)',
      role: currentCenter.nombre,
      avatarBg: 'bg-[#761df1]',
      avatarText: 'TU',
      text: newCommentText.trim(),
      time: 'Recién',
    };

    setComments([newComment, ...comments]);
    setNewCommentText('');
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto text-left select-none">
      {/* Resplandor violeta ambiental posterior */}
      <div
        className="absolute -inset-3 sm:-inset-6 bg-gradient-to-t from-[#7f21fe]/25 via-[#7f21fe]/10 to-transparent rounded-[32px] blur-2xl pointer-events-none opacity-80"
        aria-hidden="true"
      />

      {/* Contenedor principal de la ventana Nextcloud */}
      <div className="relative rounded-2xl sm:rounded-3xl border border-slate-300/80 dark:border-white/10 bg-white dark:bg-[#0c101d] text-slate-800 dark:text-slate-100 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4),0_0_40px_-10px_rgba(127,33,254,0.3)] overflow-hidden transition-all duration-200">

        {/* =========================================================================
            BARRA SUPERIOR NEXTCLOUD (MORADO #5414ad)
        ========================================================================= */}
        <div className="bg-[#5414ad] text-white px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-4 shrink-0">

          {/* Lado izquierdo: Botón de aplicaciones + Logo Constelación + Nombre dinámico rotatorio */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => {
                setSidebarOpen(!sidebarOpen);
              }}
              className="p-1.5 rounded-md hover:bg-white/15 transition-colors cursor-pointer text-white flex items-center gap-1"
              title="Abrir o alternar menú de 17 aplicaciones"
              aria-label="Alternar menú de aplicaciones"
            >
              <Grid className="w-4 h-4 sm:w-4.5 sm:h-4.5" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <ApsLogo size={22} monochrome className="text-white shrink-0" />

              {/* Nombre dinámico de centro en rotación suave */}
              <div className="overflow-hidden">
                <span
                  className={`inline-block font-bold text-xs sm:text-sm tracking-tight text-white transition-all duration-500 ease-in-out ${isFading ? 'opacity-0 -translate-y-1' : 'opacity-100 translate-y-0'
                    }`}
                >
                  {currentCenter.nombre}
                </span>
              </div>
            </div>
          </div>

          {/* Centro / Derecha: Buscador Nextcloud */}
          <div className="flex items-center gap-2 flex-1 max-w-xs sm:max-w-md lg:max-w-lg justify-end">
            <div className="flex items-center gap-2 bg-[#420d8a] hover:bg-[#3b0b7c] px-3 py-1.5 rounded-lg text-xs text-purple-100 w-full transition-colors border border-purple-400/20">
              <Search className="w-3.5 h-3.5 text-purple-200 shrink-0" aria-hidden="true" />
              <input
                type="text"
                readOnly
                value="Busca aplicaciones, archivos, etiquetas, mensajes ..."
                aria-label="Buscar en Nextcloud"
                className="bg-transparent border-none outline-none text-xs text-purple-100 placeholder:text-purple-300/80 w-full cursor-default truncate"
              />
            </div>

            <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
              <button
                type="button"
                className="p-1.5 rounded-lg hover:bg-white/15 text-purple-200 hover:text-white transition-colors cursor-pointer"
                title="Notificaciones institucionales"
                aria-label="Ver notificaciones"
              >
                <Bell className="w-4 h-4" aria-hidden="true" />
              </button>

              <div
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-[#5414ad] font-bold text-xs flex items-center justify-center shadow-xs cursor-pointer"
                title={`Sesión activa: Administrador de ${currentCenter.nombre}`}
              >
                A
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CUERPO: BARRA LATERAL (17 APPS) + LIENZO DINÁMICO QUE CAMBIA SEGÚN LA APP
        ========================================================================= */}
        <div className="flex h-[560px] sm:h-[600px] lg:h-[620px] overflow-hidden relative">

          {/* BACKDROP PARA MÓVIL CUANDO LA BARRA LATERAL ESTÁ ABIERTA */}
          {sidebarOpen && (
            <div
              onClick={() => setSidebarOpen(false)}
              className="absolute inset-0 bg-black/50 z-20 md:hidden backdrop-blur-xs transition-opacity"
              aria-hidden="true"
            />
          )}

          {/* BARRA LATERAL DE 17 APPS (RESPONSIVE: DRAWER EN MÓVIL, FIJA EN MD+) */}
          <div
            className={`w-52 sm:w-56 bg-[#5012a4] text-white shrink-0 flex flex-col justify-between border-r border-purple-900/50 shadow-2xl md:shadow-inner select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden overflow-y-auto z-30 transition-all duration-300 ${
              sidebarOpen
                ? 'absolute inset-y-0 left-0 translate-x-0'
                : 'absolute inset-y-0 left-0 -translate-x-full md:relative md:translate-x-0'
            }`}
          >

            <div className="p-2 sm:p-2.5 space-y-1.5">
              {/* Botón de acceso a Inicio */}
              <button
                type="button"
                onClick={() => {
                  setActiveApp('inicio');
                  setSidebarOpen(false);
                }}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer ${activeApp === 'inicio'
                    ? 'bg-white text-[#5012a4] shadow-sm font-bold'
                    : 'text-purple-100 hover:bg-white/10 hover:text-white'
                  }`}
              >
                <Home className="w-3.5 h-3.5 shrink-0" />
                <span>Inicio (Intranet)</span>
              </button>

              <div className="pt-1 pb-1 border-t border-purple-400/20 text-center">
                <div className="flex justify-center mb-0.5">
                  <ApsLogo size={24} monochrome className="text-white" />
                </div>
                <div className="font-bold text-[11px] tracking-tight text-white leading-none">
                  APS Conecta
                </div>
                <div className="text-[9px] font-mono uppercase tracking-widest text-purple-200">
                  GESTIÓN
                </div>
              </div>

              {/* Listado de las 17 aplicaciones: al hacer clic cambia el contenido y botón de ayuda con tooltip */}
              <div className="space-y-0.5">
                {ALL_17_APPS.map((app) => {
                  const AppIcon = app.icono;
                  const isActive = activeApp === app.id;
                  return (
                    <div
                      key={app.id}
                      className={`group/item relative flex items-center justify-between rounded-md text-[11px] font-medium transition-colors ${isActive
                          ? 'bg-white/25 text-white font-bold shadow-2xs'
                          : 'text-purple-100 hover:bg-white/10 hover:text-white'
                        }`}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setActiveApp(app.id);
                          setSidebarOpen(false);
                        }}
                        className="flex-1 text-left px-2 py-1 flex items-center gap-2 cursor-pointer min-w-0"
                        title={app.nombre}
                      >
                        <AppIcon className="w-3.5 h-3.5 text-purple-200 shrink-0" />
                        <span className="truncate">{app.nombre}</span>
                      </button>

                      {/* Botón de pregunta (?) */}
                      <button
                        type="button"
                        tabIndex={0}
                        aria-label={`Información sobre ${app.nombre}`}
                        className="w-4 h-4 mr-1.5 rounded-full flex items-center justify-center text-purple-300 hover:text-white hover:bg-white/20 transition-all opacity-40 group-hover/item:opacity-100 focus:opacity-100 cursor-help shrink-0"
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoveredAppTooltip({
                            app,
                            top: rect.top + rect.height / 2,
                            left: rect.right + 10,
                          });
                        }}
                        onMouseLeave={() => setHoveredAppTooltip(null)}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <HelpCircle className="w-3 h-3" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pie de la barra lateral con estado */}
            <div className="p-2 border-t border-purple-400/20 text-[10px] text-purple-200/90 font-mono flex items-center gap-1.5 bg-[#450e93]/50">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="truncate">Servidor On-Prem Local</span>
            </div>
          </div>

          {/* =========================================================================
              LIENZO PRINCIPAL DINÁMICO QUE CAMBIA SEGÚN LA APLICACIÓN SELECCIONADA
          ========================================================================= */}
          <div className="flex-1 flex flex-col bg-white dark:bg-[#0c101d] overflow-y-auto [scrollbar-width:thin]">

            {/* Cabecera contextual con botón de retorno rápido a Inicio */}
            <div className="px-3 sm:px-6 py-2.5 border-b border-slate-200 dark:border-white/10 flex items-center justify-between gap-2 sm:gap-3 bg-white dark:bg-[#0c101d] sticky top-0 z-10">
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                {/* Botón rápido en móvil para abrir menú de aplicaciones si la barra está oculta */}
                <button
                  type="button"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="md:hidden p-1 rounded-md bg-purple-50 dark:bg-purple-950/50 text-[#761df1] dark:text-purple-300 hover:bg-purple-100 flex items-center gap-1 text-[11px] font-bold shrink-0"
                  title="Ver 17 Apps"
                >
                  <Grid className="w-3.5 h-3.5" />
                  <span>Apps</span>
                </button>

                {activeApp !== 'inicio' && (
                  <button
                    type="button"
                    onClick={() => setActiveApp('inicio')}
                    className="p-1 rounded-md text-slate-500 hover:text-[#761df1] hover:bg-purple-50 dark:hover:bg-purple-950/40 transition-colors flex items-center gap-1 text-xs font-semibold cursor-pointer shrink-0"
                    title="Volver a Inicio"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Inicio</span>
                  </button>
                )}

                <h2 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight capitalize truncate">
                  {activeApp === 'inicio' && 'Inicio'}
                  {activeApp === 'archivos' && 'Archivos'}
                  {activeApp === 'asistente' && 'Asistente de Decisiones'}
                  {activeApp === 'estadistica' && 'Estadística y Metas REM'}
                  {activeApp === 'farmacia' && 'Farmacia y Existencias'}
                  {activeApp === 'territorio' && 'Territorio y Georreferencia'}
                  {activeApp === 'totem' && 'Tótems de Sala'}
                  {activeApp === 'epidemiologia' && 'Epidemiología y Alertas'}
                  {activeApp === 'fotos' && 'Galería de Registros'}
                  {activeApp === 'calendario' && 'Agenda y Turnos'}
                  {activeApp === 'contactos' && 'Directorio de Contactos'}
                  {activeApp === 'deck' && 'Tableros Deck'}
                  {activeApp === 'intravox' && 'Boletín IntraVox'}
                  {activeApp === 'notas' && 'Notas Clínicas'}
                  {activeApp === 'oficina' && 'OnlyOffice Local'}
                  {activeApp === 'tareas' && 'Tareas y Compromisos'}
                  {activeApp === 'actividad' && 'Registro de Actividad'}
                  {activeApp === 'talk' && 'Nextcloud Talk'}
                </h2>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-mono text-[11px] text-purple-600 dark:text-purple-400 font-semibold">
                  {currentCenter.comuna}
                </span>
                <span className="text-slate-300 dark:text-slate-600">&bull;</span>
                <span>{currentCenter.dotacion}</span>
              </div>
            </div>

            {/* CONTENEDOR SEGÚN APLICACIÓN */}
            <div className="p-4 sm:p-6 lg:p-7 space-y-4 sm:space-y-5">

              {/* =========================================================================
                  VISTA 1: INICIO (PÁGINA PRINCIPAL / BOLETÍN INTRAVOX)
              ========================================================================= */}
              {(activeApp === 'inicio' || activeApp === 'intravox') && (
                <div className="space-y-4 sm:space-y-5 animate-fadeIn">
                  {/* Gran banner morado dinámico */}
                  <div className="rounded-2xl sm:rounded-3xl bg-[#761df1] p-6 sm:p-8 text-white shadow-md relative overflow-hidden transition-all duration-500">
                    <div className="relative z-10">
                      <span className="text-base sm:text-lg font-bold text-white tracking-tight block">
                        Bienvenida
                      </span>

                      <h3
                        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mt-4 sm:mt-5 mb-2 transition-all duration-500 ease-in-out ${isFading ? 'opacity-0 translate-y-1.5' : 'opacity-100 translate-y-0'
                          }`}
                      >
                        {currentCenter.nombre}
                      </h3>

                      <p
                        className={`text-xs sm:text-sm text-purple-100 font-medium transition-all duration-500 ease-in-out ${isFading ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'
                          }`}
                      >
                        {currentCenter.comuna} &bull; {currentCenter.servicioSalud}
                      </p>
                    </div>
                  </div>

                  {/* 4 Accesos directos a las aplicaciones clave */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 pt-1">
                    <button
                      type="button"
                      onClick={() => setActiveApp('archivos')}
                      className="p-3.5 rounded-xl bg-white dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 hover:border-purple-400 dark:hover:border-purple-400 hover:shadow-md transition-all text-left flex items-center gap-3 group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-[#761df1] dark:text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Folder className="w-4 h-4 fill-[#761df1] text-[#761df1] dark:fill-purple-400 dark:text-purple-400" />
                      </div>
                      <span className="text-xs sm:text-[13px] font-semibold text-slate-800 dark:text-slate-100 group-hover:text-[#761df1] dark:group-hover:text-purple-300 transition-colors">
                        Las carpetas del establecimiento
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveApp('calendario')}
                      className="p-3.5 rounded-xl bg-white dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 hover:border-purple-400 dark:hover:border-purple-400 hover:shadow-md transition-all text-left flex items-center gap-3 group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-[#761df1] dark:text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Calendar className="w-4 h-4 text-[#761df1] dark:text-purple-400" />
                      </div>
                      <span className="text-xs sm:text-[13px] font-semibold text-slate-800 dark:text-slate-100 group-hover:text-[#761df1] dark:group-hover:text-purple-300 transition-colors">
                        La agenda del equipo
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveApp('contactos')}
                      className="p-3.5 rounded-xl bg-white dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 hover:border-purple-400 dark:hover:border-purple-400 hover:shadow-md transition-all text-left flex items-center gap-3 group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-[#761df1] dark:text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Contact className="w-4 h-4 text-[#761df1] dark:text-purple-400" />
                      </div>
                      <span className="text-xs sm:text-[13px] font-semibold text-slate-800 dark:text-slate-100 group-hover:text-[#761df1] dark:group-hover:text-purple-300 transition-colors">
                        Teléfonos y correos
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveApp('talk')}
                      className="p-3.5 rounded-xl bg-white dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 hover:border-purple-400 dark:hover:border-purple-400 hover:shadow-md transition-all text-left flex items-center gap-3 group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-[#761df1] dark:text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <MessageSquare className="w-4 h-4 text-[#761df1] dark:text-purple-400" />
                      </div>
                      <span className="text-xs sm:text-[13px] font-semibold text-slate-800 dark:text-slate-100 group-hover:text-[#761df1] dark:group-hover:text-purple-300 transition-colors">
                        Mensajes y videollamadas
                      </span>
                    </button>
                  </div>

                  {/* Reacción interactiva */}
                  <div className="pt-1 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleToggleReaction}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${reactions.userReacted
                          ? 'bg-purple-50 dark:bg-purple-950/70 border-purple-400 text-[#761df1] dark:text-purple-300 shadow-xs'
                          : 'bg-white dark:bg-[#131a2d] border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5'
                        }`}
                      title="Reaccionar a la publicación"
                    >
                      <Smile className="w-4 h-4 text-[#761df1] dark:text-purple-400" />
                      <span>Reaccionar</span>
                      <span className="ml-1 text-[11px] font-mono font-bold px-1.5 py-0.2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                        {reactions.count}
                      </span>
                    </button>
                    {reactions.userReacted && (
                      <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                        &bull; ¡Reacción guardada localmente!
                      </span>
                    )}
                  </div>

                  {/* Comentarios */}
                  <div className="pt-4 border-t border-slate-200 dark:border-white/10 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100">
                        <MessageSquare className="w-4 h-4 text-[#761df1] dark:text-purple-400" />
                        <span>Comentarios</span>
                        <span className="text-xs font-mono font-normal text-slate-400">
                          ({comments.length})
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 px-2.5 py-1 rounded-lg">
                        <span>Más nuevas primero</span>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <form onSubmit={handleAddComment} className="flex gap-2">
                      <input
                        type="text"
                        value={newCommentText}
                        onChange={(e) => setNewCommentText(e.target.value)}
                        placeholder={`Escribe un aviso para el equipo de ${currentCenter.nombre}...`}
                        className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#101626] text-xs text-slate-800 dark:text-slate-200 placeholder:text-slate-400 outline-none focus:border-purple-400 transition-colors"
                      />
                      <button
                        type="submit"
                        className="px-3 py-1.5 rounded-lg bg-[#761df1] hover:bg-[#6818d6] text-white text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Send className="w-3 h-3" />
                        <span>Enviar</span>
                      </button>
                    </form>

                    <div className="space-y-2 pt-1">
                      {comments.map((comm) => (
                        <div
                          key={comm.id}
                          className="p-3 rounded-xl bg-slate-50 dark:bg-[#101626] border border-slate-100 dark:border-white/5 space-y-1 text-xs"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div
                                className={`w-5 h-5 rounded-full ${comm.avatarBg} text-white font-bold text-[10px] flex items-center justify-center`}
                              >
                                {comm.avatarText}
                              </div>
                              <span className="font-bold text-slate-800 dark:text-slate-200">
                                {comm.author}
                              </span>
                              <span className="text-[10px] text-slate-400 font-mono">
                                ({comm.role})
                              </span>
                            </div>
                            <span className="text-[10px] text-slate-400">{comm.time}</span>
                          </div>
                          <p className="text-slate-600 dark:text-slate-300 pl-7 leading-relaxed">
                            {comm.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================================
                  VISTA 2: ARCHIVOS (SEGUNDO PANTALLAZO DEL USUARIO)
              ========================================================================= */}
              {activeApp === 'archivos' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="px-3 py-1.5 rounded-lg bg-[#761df1] text-white text-xs font-semibold flex items-center gap-1.5 shadow-2xs"
                      >
                        <span>+ Nuevo</span>
                      </button>
                      <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                        Todos los archivos ⌵
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">
                      /establecimiento/{currentCenter.comuna.toLowerCase()}/
                    </span>
                  </div>

                  {/* Banner descriptivo estilo Nextcloud Files */}
                  <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-500/20 text-xs space-y-1">
                    <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span>Repositorio Documental Institucional</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-200 dark:bg-purple-900 text-purple-900 dark:text-purple-200">
                        {currentCenter.nombre}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">
                      Carpetas compartidas por estamento con control de versiones y trazabilidad de acreditación.
                    </p>
                  </div>

                  {/* Carpetas destacadas */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 hover:border-purple-400 transition-colors cursor-pointer">
                      <Folder className="w-5 h-5 text-purple-600 dark:text-purple-400 mb-1.5" />
                      <div className="font-bold text-xs text-slate-800 dark:text-white truncate">01-Acreditación IAAS</div>
                      <div className="text-[10px] text-slate-400">12 protocolos</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 hover:border-purple-400 transition-colors cursor-pointer">
                      <Folder className="w-5 h-5 text-purple-600 dark:text-purple-400 mb-1.5" />
                      <div className="font-bold text-xs text-slate-800 dark:text-white truncate">02-Sector Verde</div>
                      <div className="text-[10px] text-slate-400">24 planes</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 hover:border-purple-400 transition-colors cursor-pointer">
                      <Folder className="w-5 h-5 text-purple-600 dark:text-purple-400 mb-1.5" />
                      <div className="font-bold text-xs text-slate-800 dark:text-white truncate">03-Farmacia Comunal</div>
                      <div className="text-[10px] text-slate-400">9 planillas</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 hover:border-purple-400 transition-colors cursor-pointer">
                      <Lock className="w-5 h-5 text-amber-500 mb-1.5" />
                      <div className="font-bold text-xs text-slate-800 dark:text-white truncate">Dirección y SAR</div>
                      <div className="text-[10px] text-amber-500">Solo Directivos</div>
                    </div>
                  </div>

                  {/* Tabla de documentos */}
                  <div className="border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden text-xs">
                    <div className="bg-slate-100 dark:bg-[#141b2e] px-3 py-2 font-bold text-slate-700 dark:text-slate-300 grid grid-cols-12 gap-2">
                      <span className="col-span-7">Nombre del documento</span>
                      <span className="col-span-3">Tamaño</span>
                      <span className="col-span-2 text-right">Modificado</span>
                    </div>
                    <div className="divide-y divide-slate-100 dark:divide-white/5">
                      <div className="px-3 py-2.5 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-purple-500 shrink-0" />
                          <span className="font-semibold text-slate-800 dark:text-slate-200">ORD-1420-Derivacion-Cardiovascular-GES.pdf</span>
                        </div>
                        <span className="text-slate-400 font-mono text-[11px]">1.4 MB</span>
                        <span className="text-slate-400 text-[11px]">Hoy 08:30</span>
                      </div>
                      <div className="px-3 py-2.5 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span className="font-semibold text-slate-800 dark:text-slate-200">Rol-Turnos-Medicos-Urgencia.xlsx</span>
                        </div>
                        <span className="text-slate-400 font-mono text-[11px]">420 KB</span>
                        <span className="text-slate-400 text-[11px]">Ayer</span>
                      </div>
                      <div className="px-3 py-2.5 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-blue-500 shrink-0" />
                          <span className="font-semibold text-slate-800 dark:text-slate-200">Protocolo-Vigilancia-IAAS-2026.docx</span>
                        </div>
                        <span className="text-slate-400 font-mono text-[11px]">890 KB</span>
                        <span className="text-slate-400 text-[11px]">Hace 3 días</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================================
                  VISTA 3: ASISTENTE DE DECISIONES (BRIEFING MATUTINO LOCAL)
              ========================================================================= */}
              {activeApp === 'asistente' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                        Briefing de Gestión: 2026-11-15
                      </h3>
                      <span className="text-[10px] font-mono font-bold bg-rose-500 text-white px-2 py-0.5 rounded uppercase">
                        Alerta Roja
                      </span>
                    </div>
                    <button
                      type="button"
                      className="px-2.5 py-1 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs font-semibold hover:bg-purple-200 transition-colors cursor-pointer"
                    >
                      Forzar análisis ahora
                    </button>
                  </div>

                  <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/30 text-xs space-y-1">
                    <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Síntesis Ejecutiva para la Dirección de {currentCenter.nombre}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Informe matutino generado en servidor local con modelos Qwen/Mistral (Ollama). Se detectaron 2 presiones prioritarias en tiempos de espera en Triage y riesgo de quiebre en farmacia.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-rose-200 dark:border-rose-500/30 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-rose-700 dark:text-rose-400 uppercase font-mono">
                          ESPERA &bull; Saturación en Triage / Urgencia ({currentCenter.tipo})
                        </span>
                        <span className="text-[10px] font-bold bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 px-2 py-0.5 rounded">
                          PRIORIDAD ALTA
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-300">
                        El tiempo promedio de espera superó los 35 minutos entre 17:00 y 19:30 con 108 turnos registrados.
                      </p>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] text-slate-500">Acción sugerida: Refuerzo en box de apoyo o SOME continuo.</span>
                        <div className="flex gap-2">
                          <button type="button" className="px-2.5 py-1 rounded bg-[#761df1] text-white text-xs font-semibold cursor-pointer">Tomar medida</button>
                          <button type="button" className="px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-700 text-xs cursor-pointer">Resolver</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================================
                  VISTA 4: ESTADÍSTICA (METAS SANITARIAS 2027)
              ========================================================================= */}
              {activeApp === 'estadistica' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="pb-2 border-b border-slate-200 dark:border-white/10">
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      Metas Sanitarias de Atención Primaria 2027 (Ley 19.813)
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Trazabilidad de corte mensual por sector territorial
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-500/30 text-xs text-sky-900 dark:text-sky-200">
                    <span className="font-bold">Aviso REM: </span>
                    Orientaciones Técnicas del MINSAL sincronizadas. Cada meta espera su trazabilidad oficial sin estimaciones arbitrarias.
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 space-y-1.5">
                      <span className="text-[10px] font-mono text-purple-600 dark:text-purple-400 font-bold uppercase">Meta I &bull; 2027</span>
                      <div className="font-bold text-slate-900 dark:text-white">Recuperación del Desarrollo Psicomotor</div>
                      <div className="text-emerald-600 dark:text-emerald-400 font-mono text-[11px]">88.4% bajo cobertura (Meta: 85%)</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 space-y-1.5">
                      <span className="text-[10px] font-mono text-purple-600 dark:text-purple-400 font-bold uppercase">Meta II &bull; 2027</span>
                      <div className="font-bold text-slate-900 dark:text-white">Tamizaje vigente cáncer cervicouterino (PAP)</div>
                      <div className="text-amber-600 dark:text-amber-400 font-mono text-[11px]">76.5% vigente (Meta: 80%)</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 space-y-1.5">
                      <span className="text-[10px] font-mono text-purple-600 dark:text-purple-400 font-bold uppercase">Meta V &bull; 2027</span>
                      <div className="font-bold text-slate-900 dark:text-white">Compensación Diabetes Mellitus 2 (HbA1c &lt; 7%)</div>
                      <div className="text-emerald-600 dark:text-emerald-400 font-mono text-[11px]">68.4% compensados (Meta: 65%)</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 space-y-1.5">
                      <span className="text-[10px] font-mono text-purple-600 dark:text-purple-400 font-bold uppercase">Meta VI &bull; 2027</span>
                      <div className="font-bold text-slate-900 dark:text-white">Compensación Hipertensión Arterial (HTA)</div>
                      <div className="text-emerald-600 dark:text-emerald-400 font-mono text-[11px]">71.2% en control (Meta: 70%)</div>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================================
                  VISTA 5: FARMACIA (EXISTENCIAS Y PERITORIO)
              ========================================================================= */}
              {activeApp === 'farmacia' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/10">
                    <div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">
                        Peritorio y Existencias Farmacéuticas
                      </h3>
                      <p className="text-xs text-slate-500">Farmacia Comunal de {currentCenter.nombre}</p>
                    </div>
                    <button type="button" className="px-3 py-1.5 rounded-lg bg-[#761df1] text-white text-xs font-semibold cursor-pointer">
                      + Ingresar Medicamento
                    </button>
                  </div>

                  <div className="border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden text-xs">
                    <div className="bg-slate-100 dark:bg-[#141b2e] px-3 py-2 font-bold text-slate-700 dark:text-slate-300 grid grid-cols-12 gap-2">
                      <span className="col-span-6">Medicamento / Presentación</span>
                      <span className="col-span-3">Stock Disponible</span>
                      <span className="col-span-3 text-right">Estado</span>
                    </div>
                    <div className="divide-y divide-slate-100 dark:divide-white/5">
                      <div className="px-3 py-2.5 flex items-center justify-between">
                        <span className="font-semibold text-slate-800 dark:text-white">Paracetamol 500mg comprimidos</span>
                        <span className="font-mono text-slate-500">4,200 comp.</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">Normal ✓</span>
                      </div>
                      <div className="px-3 py-2.5 flex items-center justify-between">
                        <span className="font-semibold text-slate-800 dark:text-white">Losartán 50mg comprimidos</span>
                        <span className="font-mono text-rose-500 font-bold">380 comp.</span>
                        <span className="text-rose-600 dark:text-rose-400 font-bold">Stock Bajo ⚠️</span>
                      </div>
                      <div className="px-3 py-2.5 flex items-center justify-between">
                        <span className="font-semibold text-slate-800 dark:text-white">Metformina 850mg comprimidos</span>
                        <span className="font-mono text-slate-500">3,100 comp.</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">Normal ✓</span>
                      </div>
                      <div className="px-3 py-2.5 flex items-center justify-between">
                        <span className="font-semibold text-slate-800 dark:text-white">Salbutamol 100mcg aerosol inhalador</span>
                        <span className="font-mono text-amber-500 font-bold">42 inhaladores</span>
                        <span className="text-amber-600 dark:text-amber-400 font-bold">Reponer</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================================
                  VISTA 6: TERRITORIO (MAPA GIS)
              ========================================================================= */}
              {activeApp === 'territorio' && (
                <div className="space-y-4 animate-fadeIn">
                  {/* Cabecera de la herramienta GIS */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-white/10">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                          <span>Visor Territorial y Sectorización MAIS (GIS)</span>
                        </h3>
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/50">
                          PostGIS On-Prem
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Sectorización georreferenciada de {currentCenter.nombre} en {currentCenter.comuna}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="px-2.5 py-1 rounded-lg bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 font-semibold border border-purple-200 dark:border-purple-800/40">
                        EPSG:5361 (SIRGAS-Chile)
                      </span>
                      <button
                        type="button"
                        onClick={() => setSelectedSector('todos')}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium transition-colors cursor-pointer border border-slate-200 dark:border-white/10"
                      >
                        Reiniciar Vista
                      </button>
                    </div>
                  </div>

                  {/* Barra de Filtros de Sectores y Capas */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-slate-500 font-medium mr-1">Sectores:</span>
                      <button
                        type="button"
                        onClick={() => setSelectedSector('todos')}
                        className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${selectedSector === 'todos'
                            ? 'bg-[#761df1] text-white shadow-sm'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                          }`}
                      >
                        Todos (4)
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedSector('azul')}
                        className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer border ${selectedSector === 'azul'
                            ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                            : 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/40 hover:bg-blue-100'
                          }`}
                      >
                        ● Sector 1 Azul
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedSector('verde')}
                        className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer border ${selectedSector === 'verde'
                            ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                            : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/40 hover:bg-emerald-100'
                          }`}
                      >
                        ● Sector 2 Verde
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedSector('rojo')}
                        className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer border ${selectedSector === 'rojo'
                            ? 'bg-rose-600 text-white border-rose-500 shadow-sm'
                            : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/40 hover:bg-rose-100'
                          }`}
                      >
                        ● Sector 3 Rojo
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedSector('amarillo')}
                        className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer border ${selectedSector === 'amarillo'
                            ? 'bg-amber-600 text-white border-amber-500 shadow-sm'
                            : 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/40 hover:bg-amber-100'
                          }`}
                      >
                        ● Sector 4 Amarillo
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-slate-500">
                        {selectedSector === 'todos' ? 'Mostrando 32.320 usuarios' : GIS_SECTORS[selectedSector].poblacion}
                      </span>
                    </div>
                  </div>

                  {/* Lienzo del Mapa GIS Interactivo con estilo vector urbano profesional */}
                  <div className="relative w-full h-[360px] sm:h-[400px] rounded-2xl bg-[#0a0f1d] border border-slate-700/60 dark:border-white/10 overflow-hidden shadow-inner select-none">

                    {/* SVG Vectorial del Mapa */}
                    <div
                      className="w-full h-full cursor-grab active:cursor-grabbing transition-transform duration-300 ease-out flex items-center justify-center"
                      style={{ transform: `scale(${mapZoom})`, transformOrigin: 'center center' }}
                    >
                      <svg
                        viewBox="0 0 920 480"
                        className="w-full h-full"
                        style={{ minWidth: '100%', minHeight: '100%' }}
                      >
                        <defs>
                          {/* Patrón de fondo para cuadrícula urbana */}
                          <pattern id="urbanGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#161f36" strokeWidth="0.8" />
                          </pattern>
                          <radialGradient id="cesfamPulse" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#7f21fe" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#7f21fe" stopOpacity="0" />
                          </radialGradient>
                        </defs>

                        {/* Capa 0: Fondo con cuadrícula base */}
                        <rect width="920" height="480" fill="#090d18" />
                        <rect width="920" height="480" fill="url(#urbanGrid)" />

                        {/* Capa 1: Manzanas censales residenciales (bloques urbanos) */}
                        <g opacity="0.45">
                          {/* Manzanas Sector Norponiente */}
                          <rect x="70" y="60" width="75" height="50" rx="4" fill="#131c31" stroke="#22304e" strokeWidth="1" />
                          <rect x="160" y="60" width="95" height="50" rx="4" fill="#131c31" stroke="#22304e" strokeWidth="1" />
                          <rect x="270" y="60" width="75" height="50" rx="4" fill="#131c31" stroke="#22304e" strokeWidth="1" />
                          <rect x="70" y="125" width="85" height="60" rx="4" fill="#131c31" stroke="#22304e" strokeWidth="1" />
                          <rect x="170" y="125" width="85" height="60" rx="4" fill="#131c31" stroke="#22304e" strokeWidth="1" />
                          <rect x="270" y="125" width="85" height="60" rx="4" fill="#131c31" stroke="#22304e" strokeWidth="1" />

                          {/* Manzanas Sector Nororiente */}
                          <rect x="520" y="60" width="90" height="50" rx="4" fill="#131c31" stroke="#22304e" strokeWidth="1" />
                          <rect x="625" y="60" width="105" height="50" rx="4" fill="#131c31" stroke="#22304e" strokeWidth="1" />
                          <rect x="745" y="60" width="85" height="50" rx="4" fill="#131c31" stroke="#22304e" strokeWidth="1" />
                          <rect x="520" y="125" width="90" height="60" rx="4" fill="#131c31" stroke="#22304e" strokeWidth="1" />
                          <rect x="625" y="125" width="90" height="60" rx="4" fill="#131c31" stroke="#22304e" strokeWidth="1" />
                          <rect x="730" y="125" width="100" height="60" rx="4" fill="#131c31" stroke="#22304e" strokeWidth="1" />

                          {/* Manzanas Sector Surponiente */}
                          <rect x="70" y="275" width="90" height="65" rx="4" fill="#131c31" stroke="#22304e" strokeWidth="1" />
                          <rect x="175" y="275" width="80" height="65" rx="4" fill="#131c31" stroke="#22304e" strokeWidth="1" />
                          <rect x="270" y="275" width="85" height="65" rx="4" fill="#131c31" stroke="#22304e" strokeWidth="1" />
                          <rect x="70" y="355" width="95" height="65" rx="4" fill="#131c31" stroke="#22304e" strokeWidth="1" />
                          <rect x="180" y="355" width="80" height="65" rx="4" fill="#131c31" stroke="#22304e" strokeWidth="1" />
                          <rect x="275" y="355" width="85" height="65" rx="4" fill="#131c31" stroke="#22304e" strokeWidth="1" />

                          {/* Manzanas Sector Suroriente */}
                          <rect x="520" y="275" width="90" height="65" rx="4" fill="#131c31" stroke="#22304e" strokeWidth="1" />
                          <rect x="625" y="275" width="95" height="65" rx="4" fill="#131c31" stroke="#22304e" strokeWidth="1" />
                          <rect x="735" y="275" width="95" height="65" rx="4" fill="#131c31" stroke="#22304e" strokeWidth="1" />
                          <rect x="520" y="355" width="90" height="65" rx="4" fill="#131c31" stroke="#22304e" strokeWidth="1" />
                          <rect x="625" y="355" width="95" height="65" rx="4" fill="#131c31" stroke="#22304e" strokeWidth="1" />
                          <rect x="735" y="355" width="95" height="65" rx="4" fill="#131c31" stroke="#22304e" strokeWidth="1" />
                        </g>

                        {/* Capa 2: Áreas verdes y parques urbanos */}
                        <g>
                          <rect x="365" y="60" width="70" height="125" rx="8" fill="#064e3b" fillOpacity="0.45" stroke="#059669" strokeWidth="1" />
                          <text x="400" y="125" fill="#34d399" fontSize="9" fontWeight="600" textAnchor="middle" opacity="0.85">
                            Parque Los Alerces
                          </text>

                          <rect x="520" y="200" width="110" height="30" rx="6" fill="#064e3b" fillOpacity="0.35" stroke="#059669" strokeWidth="0.8" />
                          <text x="575" y="219" fill="#34d399" fontSize="8" fontWeight="600" textAnchor="middle" opacity="0.85">
                            Plaza Comunitaria
                          </text>
                        </g>

                        {/* Capa 3: Red Vial y Calles Principales */}
                        <g>
                          {/* Gran Avenida Este-Oeste: Av. Bernardo O'Higgins */}
                          <line x1="20" y1="240" x2="900" y2="240" stroke="#1e293b" strokeWidth="22" strokeLinecap="round" />
                          <line x1="20" y1="240" x2="900" y2="240" stroke="#334155" strokeWidth="16" strokeLinecap="round" />
                          <line x1="20" y1="240" x2="900" y2="240" stroke="#94a3b8" strokeWidth="1" strokeDasharray="8 8" opacity="0.7" />

                          {/* Gran Avenida Norte-Sur: Av. Diego Portales */}
                          <line x1="460" y1="20" x2="460" y2="460" stroke="#1e293b" strokeWidth="22" strokeLinecap="round" />
                          <line x1="460" y1="20" x2="460" y2="460" stroke="#334155" strokeWidth="16" strokeLinecap="round" />
                          <line x1="460" y1="20" x2="460" y2="460" stroke="#94a3b8" strokeWidth="1" strokeDasharray="8 8" opacity="0.7" />

                          {/* Calles Secundarias */}
                          <line x1="40" y1="120" x2="450" y2="120" stroke="#253248" strokeWidth="7" />
                          <line x1="470" y1="120" x2="880" y2="120" stroke="#253248" strokeWidth="7" />
                          <line x1="40" y1="350" x2="450" y2="350" stroke="#253248" strokeWidth="7" />
                          <line x1="470" y1="350" x2="880" y2="350" stroke="#253248" strokeWidth="7" />

                          <line x1="260" y1="40" x2="260" y2="440" stroke="#253248" strokeWidth="7" />
                          <line x1="620" y1="40" x2="620" y2="440" stroke="#253248" strokeWidth="7" />
                          <line x1="730" y1="40" x2="730" y2="440" stroke="#253248" strokeWidth="7" />

                          {/* Nombres de Calles y Avenidas */}
                          <text x="140" y="236" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="1">
                            AV. BERNARDO O&apos;HIGGINS
                          </text>
                          <text x="660" y="236" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="1">
                            AV. BERNARDO O&apos;HIGGINS
                          </text>
                          <text
                            x="453"
                            y="90"
                            fill="#cbd5e1"
                            fontSize="9"
                            fontWeight="700"
                            letterSpacing="1"
                            transform="rotate(-90 453 90)"
                            textAnchor="middle"
                          >
                            AV. DIEGO PORTALES
                          </text>
                          <text
                            x="453"
                            y="390"
                            fill="#cbd5e1"
                            fontSize="9"
                            fontWeight="700"
                            letterSpacing="1"
                            transform="rotate(-90 453 390)"
                            textAnchor="middle"
                          >
                            AV. LAS AMÉRICAS
                          </text>
                        </g>

                        {/* Capa 4: Polígonos de los 4 Sectores MAIS con interactividad */}
                        <g>
                          {/* Polígono Sector 1: Azul (Norponiente) */}
                          <polygon
                            points="45,40 445,40 445,225 250,225 45,150"
                            fill="#1d4ed8"
                            fillOpacity={selectedSector === 'azul' ? 0.38 : selectedSector === 'todos' ? 0.18 : 0.06}
                            stroke="#3b82f6"
                            strokeWidth={selectedSector === 'azul' ? 3.5 : 2}
                            strokeDasharray={selectedSector === 'azul' ? 'none' : '6 4'}
                            className="cursor-pointer transition-all duration-300 hover:fill-opacity-35"
                            onClick={() => setSelectedSector('azul')}
                          />

                          {/* Polígono Sector 2: Verde (Nororiente) */}
                          <polygon
                            points="475,40 875,40 875,200 645,225 475,225"
                            fill="#047857"
                            fillOpacity={selectedSector === 'verde' ? 0.38 : selectedSector === 'todos' ? 0.18 : 0.06}
                            stroke="#10b981"
                            strokeWidth={selectedSector === 'verde' ? 3.5 : 2}
                            strokeDasharray={selectedSector === 'verde' ? 'none' : '6 4'}
                            className="cursor-pointer transition-all duration-300 hover:fill-opacity-35"
                            onClick={() => setSelectedSector('verde')}
                          />

                          {/* Polígono Sector 3: Rojo (Surponiente) */}
                          <polygon
                            points="45,170 245,255 445,255 445,445 45,445"
                            fill="#b91c1c"
                            fillOpacity={selectedSector === 'rojo' ? 0.38 : selectedSector === 'todos' ? 0.18 : 0.06}
                            stroke="#ef4444"
                            strokeWidth={selectedSector === 'rojo' ? 3.5 : 2}
                            strokeDasharray={selectedSector === 'rojo' ? 'none' : '6 4'}
                            className="cursor-pointer transition-all duration-300 hover:fill-opacity-35"
                            onClick={() => setSelectedSector('rojo')}
                          />

                          {/* Polígono Sector 4: Amarillo (Suroriente) */}
                          <polygon
                            points="475,255 645,255 875,225 875,445 475,445"
                            fill="#b45309"
                            fillOpacity={selectedSector === 'amarillo' ? 0.38 : selectedSector === 'todos' ? 0.18 : 0.06}
                            stroke="#f59e0b"
                            strokeWidth={selectedSector === 'amarillo' ? 3.5 : 2}
                            strokeDasharray={selectedSector === 'amarillo' ? 'none' : '6 4'}
                            className="cursor-pointer transition-all duration-300 hover:fill-opacity-35"
                            onClick={() => setSelectedSector('amarillo')}
                          />

                          {/* Etiquetas de Sector Flotantes */}
                          <g
                            className="cursor-pointer"
                            onClick={() => setSelectedSector('azul')}
                            opacity={selectedSector === 'azul' || selectedSector === 'todos' ? 1 : 0.35}
                          >
                            <rect x="90" y="70" width="140" height="26" rx="6" fill="#0f172a" fillOpacity="0.9" stroke="#3b82f6" strokeWidth="1.2" />
                            <circle cx="104" cy="83" r="4" fill="#3b82f6" />
                            <text x="116" y="87" fill="#93c5fd" fontSize="10" fontWeight="bold">
                              Sector 1 Azul (8.420)
                            </text>
                          </g>

                          <g
                            className="cursor-pointer"
                            onClick={() => setSelectedSector('verde')}
                            opacity={selectedSector === 'verde' || selectedSector === 'todos' ? 1 : 0.35}
                          >
                            <rect x="680" y="70" width="145" height="26" rx="6" fill="#0f172a" fillOpacity="0.9" stroke="#10b981" strokeWidth="1.2" />
                            <circle cx="694" cy="83" r="4" fill="#10b981" />
                            <text x="706" y="87" fill="#6ee7b7" fontSize="10" fontWeight="bold">
                              Sector 2 Verde (7.950)
                            </text>
                          </g>

                          <g
                            className="cursor-pointer"
                            onClick={() => setSelectedSector('rojo')}
                            opacity={selectedSector === 'rojo' || selectedSector === 'todos' ? 1 : 0.35}
                          >
                            <rect x="90" y="380" width="140" height="26" rx="6" fill="#0f172a" fillOpacity="0.9" stroke="#ef4444" strokeWidth="1.2" />
                            <circle cx="104" cy="393" r="4" fill="#ef4444" />
                            <text x="116" y="397" fill="#fca5a5" fontSize="10" fontWeight="bold">
                              Sector 3 Rojo (9.110)
                            </text>
                          </g>

                          <g
                            className="cursor-pointer"
                            onClick={() => setSelectedSector('amarillo')}
                            opacity={selectedSector === 'amarillo' || selectedSector === 'todos' ? 1 : 0.35}
                          >
                            <rect x="680" y="380" width="155" height="26" rx="6" fill="#0f172a" fillOpacity="0.9" stroke="#f59e0b" strokeWidth="1.2" />
                            <circle cx="694" cy="393" r="4" fill="#f59e0b" />
                            <text x="706" y="397" fill="#fde68a" fontSize="10" fontWeight="bold">
                              Sector 4 Amarillo (6.840)
                            </text>
                          </g>
                        </g>

                        {/* Capa 5: Ruta Activa del Móvil APS en Terreno */}
                        {activeLayers.ruta && (
                          <g>
                            {/* Trayectoria de la ruta */}
                            <path
                              d="M 460 240 L 360 240 L 360 350 L 260 350 L 260 380"
                              fill="none"
                              stroke="#c084fc"
                              strokeWidth="3.5"
                              strokeDasharray="6 4"
                              strokeLinecap="round"
                            />
                            {/* Icono del móvil en ruta */}
                            <g
                              className="cursor-pointer"
                              onClick={() =>
                                setSelectedPin({
                                  id: 'movil-aps',
                                  titulo: 'Móvil Terreno APS-02',
                                  tipo: 'movil',
                                  detalle: 'Ruta activa de visitas domiciliarias PADI en Sector Rojo y Surponiente.',
                                  horario: 'En trayecto (Velocidad: 34 km/h)',
                                  sector: 'Sector 3 Rojo',
                                  responsable: 'Conductor: Marcos Loyola • Equipo: Enf. Javier Morales',
                                })
                              }
                            >
                              <circle cx="360" cy="300" r="14" fill="#7f21fe" stroke="#ffffff" strokeWidth="2" />
                              <text x="360" y="304" textAnchor="middle" fill="#fff" fontSize="10">
                                🚐
                              </text>
                              <rect x="380" y="290" width="130" height="22" rx="4" fill="#1e1035" stroke="#a855f7" strokeWidth="1" />
                              <text x="388" y="304" fill="#e9d5ff" fontSize="9" fontWeight="bold">
                                Móvil APS-02 (En ruta)
                              </text>
                            </g>
                          </g>
                        )}

                        {/* Capa 6: Puntos Comunitarios y Educacionales */}
                        {activeLayers.comunitarios && (
                          <g>
                            {/* Sede Vecinal N° 12 */}
                            <g
                              className="cursor-pointer"
                              onClick={() =>
                                setSelectedPin({
                                  id: 'sede-vecinal',
                                  titulo: 'Sede Junta Vecinal N° 12 "El Roble"',
                                  tipo: 'comunidad',
                                  detalle: 'Punto de encuentro para talleres del Programa Más Adultos Mayores Autovalentes.',
                                  horario: 'Reunión semanal: Jueves 15:30 hrs',
                                  sector: 'Sector 2 Verde',
                                  responsable: 'Presidenta: Sra. María Angélica Fuentes',
                                })
                              }
                            >
                              <circle cx="580" cy="85" r="11" fill="#047857" stroke="#ffffff" strokeWidth="1.8" />
                              <text x="580" y="89" textAnchor="middle" fill="#fff" fontSize="9">
                                🏛️
                              </text>
                              <rect x="600" y="75" width="140" height="20" rx="4" fill="#062e24" stroke="#10b981" strokeWidth="1" />
                              <text x="608" y="89" fill="#a7f3d0" fontSize="9" fontWeight="600">
                                Junta Vecinal N° 12
                              </text>
                            </g>

                            {/* Escuela República de Chile */}
                            <g
                              className="cursor-pointer"
                              onClick={() =>
                                setSelectedPin({
                                  id: 'escuela-chile',
                                  titulo: 'Escuela Básica República de Chile',
                                  tipo: 'comunidad',
                                  detalle: 'Punto de control escolar de salud del niño y vacunatorio estacional ministerial.',
                                  horario: 'Operativo escolar: Próximo martes',
                                  sector: 'Sector 1 Azul',
                                  responsable: 'Coordinador Escolar: Enf. Rodrigo Salinas',
                                })
                              }
                            >
                              <circle cx="210" cy="155" r="11" fill="#1d4ed8" stroke="#ffffff" strokeWidth="1.8" />
                              <text x="210" y="159" textAnchor="middle" fill="#fff" fontSize="9">
                                🏫
                              </text>
                              <rect x="230" y="145" width="135" height="20" rx="4" fill="#0c1e3d" stroke="#3b82f6" strokeWidth="1" />
                              <text x="238" y="159" fill="#bfdbfe" fontSize="9" fontWeight="600">
                                Escuela Rep. de Chile
                              </text>
                            </g>
                          </g>
                        )}

                        {/* Capa 7: Pacientes Postrados PADI (Visitas en Domicilio) */}
                        {activeLayers.postrados && (
                          <g>
                            {/* Paciente 1 (Sector Azul) */}
                            <g
                              className="cursor-pointer"
                              onClick={() =>
                                setSelectedPin({
                                  id: 'padi-1',
                                  titulo: 'Visita Domiciliaria PADI: Don Carlos M. (84 años)',
                                  tipo: 'padi',
                                  detalle: 'Curación avanzada de úlcera venosa en extremidad inferior. Requiere apósitos hidrocoloides.',
                                  horario: '11:30 hrs • Visita Programada Hoy',
                                  sector: 'Sector 1 Azul (Villa Los Aromos)',
                                  responsable: 'TENS Marcela Gómez y Enf. Rodrigo Salinas',
                                })
                              }
                            >
                              <circle cx="160" cy="95" r="10" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
                              <circle cx="160" cy="95" r="4" fill="#ffffff" />
                              <rect x="80" y="108" width="165" height="20" rx="4" fill="#0f172a" stroke="#60a5fa" strokeWidth="1" opacity="0.95" />
                              <text x="86" y="122" fill="#dbeafe" fontSize="9" fontWeight="600">
                                🏠 Don Carlos M. (PADI 11:30)
                              </text>
                            </g>

                            {/* Paciente 2 (Sector Verde) */}
                            <g
                              className="cursor-pointer"
                              onClick={() =>
                                setSelectedPin({
                                  id: 'padi-2',
                                  titulo: 'Visita Domiciliaria PADI: Sra. Elena V. (78 años)',
                                  tipo: 'padi',
                                  detalle: 'Control crónico cardiovascular y entrega de arsenal farmacológico mensual a domicilio.',
                                  horario: '12:15 hrs • Visita Programada Hoy',
                                  sector: 'Sector 2 Verde (Casco Histórico)',
                                  responsable: 'Enf. Paulina Soto',
                                })
                              }
                            >
                              <circle cx="760" cy="115" r="10" fill="#059669" stroke="#ffffff" strokeWidth="2" />
                              <circle cx="760" cy="115" r="4" fill="#ffffff" />
                              <rect x="680" y="128" width="165" height="20" rx="4" fill="#0f172a" stroke="#34d399" strokeWidth="1" opacity="0.95" />
                              <text x="686" y="142" fill="#d1fae5" fontSize="9" fontWeight="600">
                                🏠 Sra. Elena V. (HTA 12:15)
                              </text>
                            </g>

                            {/* Paciente 3 (Sector Rojo) */}
                            <g
                              className="cursor-pointer"
                              onClick={() =>
                                setSelectedPin({
                                  id: 'padi-3',
                                  titulo: 'Visita Domiciliaria PADI: Don Mario T. (86 años)',
                                  tipo: 'padi',
                                  detalle: 'Kinesioterapia motora y respiratoria domiciliaria. Dependencia severa Grado III.',
                                  horario: '14:00 hrs • En Ruta Móvil APS-02',
                                  sector: 'Sector 3 Rojo (Población San Pedro)',
                                  responsable: 'Kinesiólogo Felipe Oyarzún y TENS Sandra Castro',
                                })
                              }
                            >
                              <circle cx="260" cy="380" r="10" fill="#dc2626" stroke="#ffffff" strokeWidth="2" />
                              <circle cx="260" cy="380" r="4" fill="#ffffff" />
                              <rect x="180" y="393" width="165" height="20" rx="4" fill="#0f172a" stroke="#f87171" strokeWidth="1" opacity="0.95" />
                              <text x="186" y="407" fill="#fee2e2" fontSize="9" fontWeight="600">
                                🏠 Don Mario T. (Kine 14:00)
                              </text>
                            </g>
                          </g>
                        )}

                        {/* Capa 8: Base Central CESFAM (Punto Neurálgico) */}
                        <g
                          className="cursor-pointer"
                          onClick={() =>
                            setSelectedPin({
                              id: 'cesfam-base',
                              titulo: `${currentCenter.nombre}`,
                              tipo: 'cesfam',
                              detalle: `Establecimiento base de Atención Primaria. Dotación: ${currentCenter.dotacion}. Coordinación central de los 4 sectores territoriales.`,
                              horario: 'Atención continuada: 08:00 - 20:00 hrs',
                              sector: 'Sede Central del Establecimiento',
                              responsable: `Director/a y Jefatura Técnica en ${currentCenter.comuna}`,
                            })
                          }
                        >
                          {/* Anillo de pulso radar animado */}
                          <circle cx="460" cy="240" r="32" className="animate-ping fill-purple-500/25 stroke-purple-400/50 pointer-events-none" />
                          <circle cx="460" cy="240" r="22" fill="#7f21fe" fillOpacity="0.4" />
                          <circle cx="460" cy="240" r="15" fill="#7f21fe" stroke="#ffffff" strokeWidth="2.5" />
                          <text x="460" y="244" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">
                            🏥
                          </text>

                          {/* Badge flotante del CESFAM */}
                          <rect x="365" y="195" width="190" height="24" rx="6" fill="#4c1d95" stroke="#a78bfa" strokeWidth="1.2" />
                          <text x="460" y="211" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">
                            🏥 {currentCenter.nombre}
                          </text>
                        </g>
                      </svg>
                    </div>

                    {/* Controles Flotantes Superiores Izquierdos: Selector de Capas */}
                    <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10">
                      <button
                        type="button"
                        onClick={() => setActiveLayers((prev) => ({ ...prev, postrados: !prev.postrados }))}
                        className={`px-2 py-1 rounded-md text-[11px] font-semibold transition-all flex items-center gap-1 cursor-pointer backdrop-blur-md border ${activeLayers.postrados
                            ? 'bg-blue-600/90 text-white border-blue-400 shadow-sm'
                            : 'bg-slate-900/80 text-slate-400 border-white/10 hover:text-white'
                          }`}
                      >
                        <MapPin className="w-3 h-3" />
                        <span>Postrados PADI (3)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveLayers((prev) => ({ ...prev, comunitarios: !prev.comunitarios }))}
                        className={`px-2 py-1 rounded-md text-[11px] font-semibold transition-all flex items-center gap-1 cursor-pointer backdrop-blur-md border ${activeLayers.comunitarios
                            ? 'bg-emerald-600/90 text-white border-emerald-400 shadow-sm'
                            : 'bg-slate-900/80 text-slate-400 border-white/10 hover:text-white'
                          }`}
                      >
                        <Building2 className="w-3 h-3" />
                        <span>Puntos Vecinales (2)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveLayers((prev) => ({ ...prev, ruta: !prev.ruta }))}
                        className={`px-2 py-1 rounded-md text-[11px] font-semibold transition-all flex items-center gap-1 cursor-pointer backdrop-blur-md border ${activeLayers.ruta
                            ? 'bg-purple-600/90 text-white border-purple-400 shadow-sm'
                            : 'bg-slate-900/80 text-slate-400 border-white/10 hover:text-white'
                          }`}
                      >
                        <Car className="w-3 h-3" />
                        <span>Ruta Móvil Terreno</span>
                      </button>
                    </div>

                    {/* Controles Flotantes Superiores Derechos: Zoom y Recentrado */}
                    <div className="absolute top-3 right-3 flex flex-col gap-1 z-10">
                      <button
                        type="button"
                        onClick={() => setMapZoom((prev) => Math.min(1.4, prev + 0.15))}
                        className="w-7 h-7 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-white border border-white/15 flex items-center justify-center text-xs shadow-md cursor-pointer transition-colors"
                        title="Acercar mapa"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setMapZoom((prev) => Math.max(0.75, prev - 0.15))}
                        className="w-7 h-7 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-white border border-white/15 flex items-center justify-center text-xs shadow-md cursor-pointer transition-colors"
                        title="Alejar mapa"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setMapZoom(1);
                          setSelectedSector('todos');
                          setSelectedPin(null);
                        }}
                        className="w-7 h-7 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-white border border-white/15 flex items-center justify-center text-xs shadow-md cursor-pointer transition-colors"
                        title="Centrar en el CESFAM"
                      >
                        <Crosshair className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Ficha Flotante de Detalle al Clic en un Marcador */}
                    {selectedPin && (
                      <div className="absolute bottom-10 left-3 right-3 sm:right-auto sm:max-w-md p-3 rounded-xl bg-slate-900/95 border border-purple-500/40 text-white text-xs shadow-2xl backdrop-blur-md animate-fadeIn z-20 space-y-1.5">
                        <div className="flex items-start justify-between gap-2">
                          <div className="font-bold text-sm text-purple-300 flex items-center gap-1.5">
                            <span>{selectedPin.titulo}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setSelectedPin(null)}
                            className="text-slate-400 hover:text-white p-0.5 rounded cursor-pointer"
                          >
                            ✕
                          </button>
                        </div>
                        <p className="text-slate-300 text-[11px] leading-relaxed">{selectedPin.detalle}</p>
                        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-white/10 text-[10px] text-slate-400 font-mono">
                          {selectedPin.horario && (
                            <span className="px-1.5 py-0.5 rounded bg-purple-950 text-purple-300">
                              {selectedPin.horario}
                            </span>
                          )}
                          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                            {selectedPin.sector}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Barra Inferior del Mapa: Coordenadas y Escala Cartográfica */}
                    <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] text-slate-400 font-mono pointer-events-none z-10">
                      <div className="flex items-center gap-2 bg-slate-950/80 px-2 py-0.5 rounded border border-white/10 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>PostGIS Local • Capa SIRGAS-Chile 19S</span>
                      </div>
                      <div className="bg-slate-950/80 px-2 py-0.5 rounded border border-white/10 backdrop-blur-sm">
                        <span>Escala 1:5.000 &bull; 250 m</span>
                      </div>
                    </div>
                  </div>

                  {/* Panel de Información del Sector o Resumen Global */}
                  {selectedSector === 'todos' ? (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 space-y-1">
                        <div className="text-[11px] text-slate-500 font-medium">Población Total FONASA</div>
                        <div className="text-lg font-extrabold text-slate-900 dark:text-white">32.320</div>
                        <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                          100% Validada en MAIS
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 space-y-1">
                        <div className="text-[11px] text-slate-500 font-medium">Equipos de Cabecera</div>
                        <div className="text-lg font-extrabold text-purple-600 dark:text-purple-400">4 Sectores</div>
                        <div className="text-[10px] text-slate-500">Multidisciplinarios completos</div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 space-y-1">
                        <div className="text-[11px] text-slate-500 font-medium">Visitas en Terreno Hoy</div>
                        <div className="text-lg font-extrabold text-blue-600 dark:text-blue-400">18 Programadas</div>
                        <div className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">12 Realizadas (66%)</div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 space-y-1">
                        <div className="text-[11px] text-slate-500 font-medium">Pacientes PADI Postrados</div>
                        <div className="text-lg font-extrabold text-rose-600 dark:text-rose-400">142 Usuarios</div>
                        <div className="text-[10px] text-slate-500">Coordenadas 100% locales</div>
                      </div>
                    </div>
                  ) : (
                    /* Ficha Detallada del Sector Seleccionado */
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 space-y-3 animate-fadeIn text-xs">
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-white/10">
                        <div>
                          <div className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                            <span>{GIS_SECTORS[selectedSector].nombre}</span>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${GIS_SECTORS[selectedSector].tagColor}`}>
                              Activo
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Barrios a cargo: {GIS_SECTORS[selectedSector].barrios.join(', ')}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setSelectedSector('todos')}
                          className="text-[11px] font-semibold text-purple-600 dark:text-purple-400 hover:underline cursor-pointer"
                        >
                          Ver todos los sectores &rarr;
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-2.5 rounded-lg bg-white dark:bg-[#0c101d] border border-slate-200 dark:border-white/5 space-y-1">
                          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                            Equipo de Cabecera
                          </span>
                          <div className="text-slate-800 dark:text-slate-200 font-semibold text-[11px]">
                            {GIS_SECTORS[selectedSector].jefeSector}
                          </div>
                          <div className="text-slate-500 text-[10px]">{GIS_SECTORS[selectedSector].enfermeraPadi}</div>
                          <div className="text-slate-500 text-[10px]">{GIS_SECTORS[selectedSector].tens}</div>
                          <div className="text-slate-500 text-[10px]">{GIS_SECTORS[selectedSector].asistenteSocial}</div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-white dark:bg-[#0c101d] border border-slate-200 dark:border-white/5 space-y-1">
                          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                            Población y Crónicos
                          </span>
                          <div className="text-slate-800 dark:text-slate-200 font-bold text-sm">
                            {GIS_SECTORS[selectedSector].poblacion}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            Crónicos activos: <span className="font-semibold text-slate-700 dark:text-slate-300">{GIS_SECTORS[selectedSector].cronicos}</span>
                          </div>
                          <div className="text-[11px] text-slate-500">
                            Postrados PADI: <span className="font-semibold text-rose-600 dark:text-rose-400">{GIS_SECTORS[selectedSector].postrados} usuarios</span>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-white dark:bg-[#0c101d] border border-slate-200 dark:border-white/5 space-y-1">
                          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                            Visitas Domiciliarias Hoy
                          </span>
                          <div className="text-slate-800 dark:text-slate-200 font-bold text-sm">
                            {GIS_SECTORS[selectedSector].visitasCompletadas} de {GIS_SECTORS[selectedSector].visitasHoy} realizadas
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden mt-1">
                            <div
                              className="bg-emerald-500 h-full rounded-full"
                              style={{
                                width: `${Math.round(
                                  (GIS_SECTORS[selectedSector].visitasCompletadas /
                                    GIS_SECTORS[selectedSector].visitasHoy) *
                                  100
                                )}%`,
                              }}
                            />
                          </div>
                          <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                            Móvil de terreno asignado en ruta
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Garantía de Privacidad y Soberanía Territorial */}
                  <div className="px-3.5 py-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/30 flex items-center gap-3 text-xs">
                    <span className="text-base">🛡️</span>
                    <p className="text-purple-900 dark:text-purple-200 text-[11px] leading-relaxed">
                      <strong>Privacidad Radical en Georreferenciación:</strong> Las coordenadas de domicilios de pacientes postrados y rutas médicas nunca se envían a Google Maps ni a servidores externos. Todo el motor cartográfico corre en PostgreSQL / PostGIS dentro del rack de tu CESFAM (Leyes 19.628 y 21.656).
                    </p>
                  </div>
                </div>
              )}

              {/* =========================================================================
                  VISTA 7: TÓTEM (PANTALLAS EN SALAS DE ESPERA)
              ========================================================================= */}
              {activeApp === 'totem' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/10">
                    <div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">
                        Tótems de Autoatención en Salas de Espera
                      </h3>
                      <p className="text-xs text-slate-500">Pantallas táctiles para emisión de turnos</p>
                    </div>
                    <button type="button" className="px-3 py-1.5 rounded-lg bg-[#761df1] text-white text-xs font-semibold cursor-pointer">
                      + Nuevo Tótem
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 dark:text-white">Tótem 01 &bull; SOME</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      </div>
                      <div className="text-[11px] text-slate-500">Ofrece: Citas, Informaciones y Turnos</div>
                      <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400">En línea &bull; Papel 85%</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 dark:text-white">Tótem 02 &bull; Farmacia</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      </div>
                      <div className="text-[11px] text-slate-500">Ofrece: Retiro de Medicamentos</div>
                      <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400">En línea &bull; Papel 92%</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 dark:text-white">Tótem 03 &bull; Urgencia</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      </div>
                      <div className="text-[11px] text-slate-500">Ofrece: Admisión Triage Urgente</div>
                      <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400">En línea &bull; Papel 70%</div>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================================
                  VISTA 8: EPIDEMIOLOGÍA (ALERTAS SANITARIAS MINSAL / ISP)
              ========================================================================= */}
              {activeApp === 'epidemiologia' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="pb-2 border-b border-slate-200 dark:border-white/10">
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      Vigilancia Epidemiológica y Notificaciones (ENO)
                    </h3>
                    <p className="text-xs text-slate-500">
                      Sincronización de alertas sanitarias MINSAL, ISP y circulación viral regional
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 space-y-2">
                      <div className="text-[10px] font-bold text-rose-600 uppercase font-mono">MINSAL &bull; Alertas Vigentes</div>
                      <div className="font-bold text-slate-900 dark:text-white leading-snug">
                        Modifica Decreto N°28 alerta sanitaria por virus respiratorios
                      </div>
                      <div className="text-[10px] text-purple-600 dark:text-purple-400 font-semibold cursor-pointer">
                        Ver 13 alertas vigentes &rarr;
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 space-y-2">
                      <div className="text-[10px] font-bold text-purple-600 uppercase font-mono">Dpto. Epidemiología</div>
                      <div className="font-bold text-slate-900 dark:text-white leading-snug">
                        Oficio CP N°22695 / 2026 Alerta Epidemiológica por viruela del mono
                      </div>
                      <div className="text-[10px] text-purple-600 dark:text-purple-400 font-semibold cursor-pointer">
                        Ver 78 circulares &rarr;
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 space-y-2">
                      <div className="text-[10px] font-bold text-amber-600 uppercase font-mono">ISP &bull; Farmacovigilancia</div>
                      <div className="font-bold text-slate-900 dark:text-white leading-snug">
                        Alerta de retiro de lote por laboratorio Sanderson en inyectable
                      </div>
                      <div className="text-[10px] text-purple-600 dark:text-purple-400 font-semibold cursor-pointer">
                        Ver 10 alertas &rarr;
                      </div>
                    </div>
                  </div>

                  {/* Circulación de virus respiratorios */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
                      <span>Circulación de Virus Respiratorios (ISP)</span>
                      <span className="text-[11px] text-purple-600 font-medium cursor-pointer">Ver reporte completo</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-white dark:bg-[#172138] border border-slate-200 dark:border-white/10 text-center">
                        <div className="font-bold text-slate-900 dark:text-white text-sm">44 SEMANA</div>
                        <div className="text-[10px] text-slate-500">Influenza y VRS</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-[#172138] border border-slate-200 dark:border-white/10 text-center">
                        <div className="font-bold text-slate-900 dark:text-white text-sm">43 SEMANA</div>
                        <div className="text-[10px] text-slate-500">SARS-CoV-2</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-[#172138] border border-slate-200 dark:border-white/10 text-center">
                        <div className="font-bold text-slate-900 dark:text-white text-sm">42 SEMANA</div>
                        <div className="text-[10px] text-slate-500">Metaneumovirus</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================================
                  VISTA 9: FOTOS (GALERÍA DE MEDIOS / PRIMER PANTALLAZO DEL SEGUNDO LOTE)
              ========================================================================= */}
              {activeApp === 'fotos' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/10">
                    <div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">Todos sus medios</h3>
                      <p className="text-xs text-slate-500">Fotografías y registros visuales del establecimiento</p>
                    </div>
                    <button type="button" className="px-3 py-1 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs font-semibold cursor-pointer">
                      + Crear álbum nuevo
                    </button>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <div className="font-bold text-slate-800 dark:text-slate-200 mb-1.5">noviembre 2026</div>
                      <div className="h-32 rounded-xl bg-gradient-to-r from-purple-800 to-indigo-900 flex items-center justify-center text-white border border-white/10 relative overflow-hidden">
                        <div className="text-center space-y-1 z-10">
                          <div className="font-bold text-sm">Jornada Anual del Equipo de Salud &bull; {currentCenter.nombre}</div>
                          <div className="text-[11px] text-purple-200">Foto oficial en frontis del establecimiento</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="font-bold text-slate-800 dark:text-slate-200 mb-1.5">octubre 2026</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-24 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 border border-white/10 text-center p-2">
                          <span>Simulacro IAAS y Acreditación</span>
                        </div>
                        <div className="h-24 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 border border-white/10 text-center p-2">
                          <span>Nuevo equipamiento en Farmacia</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================================
                  VISTA 10: CALENDARIO (SEGUNDO PANTALLAZO DEL SEGUNDO LOTE)
              ========================================================================= */}
              {activeApp === 'calendario' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/10">
                    <div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">Agenda Mensual de Turnos</h3>
                      <p className="text-xs text-slate-500">Boxes clínicos, SAPU/SAR y comités técnicos</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">Noviembre 2026</span>
                  </div>

                  {/* Grilla simplificada de calendario estilo Nextcloud Calendar */}
                  <div className="border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden text-xs">
                    <div className="grid grid-cols-7 bg-slate-100 dark:bg-[#141b2e] text-center font-bold text-slate-700 dark:text-slate-300 py-2 border-b border-slate-200 dark:border-white/10">
                      <span>lun.</span><span>mar.</span><span>mié.</span><span>jue.</span><span>vie.</span><span>sáb.</span><span>dom.</span>
                    </div>
                    <div className="grid grid-cols-7 divide-x divide-y divide-slate-100 dark:divide-white/5 text-center min-h-[180px]">
                      <div className="p-2 text-slate-400">9</div>
                      <div className="p-2 text-slate-400">10</div>
                      <div className="p-2 text-slate-400">11</div>
                      <div className="p-2 text-slate-400">12</div>
                      <div className="p-2 text-slate-400">13</div>
                      <div className="p-2 text-slate-400">14</div>
                      <div className="p-2 bg-purple-50 dark:bg-purple-950/40 font-bold text-purple-600 dark:text-purple-300">
                        15
                        <div className="mt-1 text-[9px] bg-[#761df1] text-white rounded p-0.5 font-normal">Hoy</div>
                      </div>

                      <div className="p-2 text-slate-700 dark:text-slate-300">16</div>
                      <div className="p-2 text-slate-700 dark:text-slate-300">17</div>
                      <div className="p-2 text-slate-700 dark:text-slate-300">18</div>
                      <div className="p-2 text-slate-700 dark:text-slate-300">19</div>
                      <div className="p-2 text-slate-700 dark:text-slate-300">20</div>
                      <div className="p-2 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300">
                        21
                        <div className="mt-1 text-[9px] text-blue-600 font-medium">Turno Urgencia</div>
                      </div>
                      <div className="p-2 text-slate-700 dark:text-slate-300">22</div>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================================
                  VISTA 11: CONTACTOS (TERCER PANTALLAZO DEL SEGUNDO LOTE)
              ========================================================================= */}
              {activeApp === 'contactos' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="pb-2 border-b border-slate-200 dark:border-white/10">
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">Directorio de Contactos y Anexos</h3>
                    <p className="text-xs text-slate-500">Personal de {currentCenter.nombre}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 text-xs">
                    {/* Lista lateral de contactos */}
                    <div className="md:col-span-4 border border-slate-200 dark:border-white/10 rounded-xl p-2 space-y-1">
                      <button
                        type="button"
                        onClick={() => setSelectedContact('admin')}
                        className={`w-full text-left p-2 rounded-lg flex items-center gap-2 cursor-pointer ${selectedContact === 'admin'
                            ? 'bg-purple-50 dark:bg-purple-950/70 border border-purple-300 font-bold text-purple-700 dark:text-purple-300'
                            : 'hover:bg-slate-50 dark:hover:bg-white/5'
                          }`}
                      >
                        <div className="w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-[10px] flex items-center justify-center">A</div>
                        <span className="truncate">admin (Dirección)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedContact('director')}
                        className={`w-full text-left p-2 rounded-lg flex items-center gap-2 cursor-pointer ${selectedContact === 'director'
                            ? 'bg-purple-50 dark:bg-purple-950/70 border border-purple-300 font-bold text-purple-700 dark:text-purple-300'
                            : 'hover:bg-slate-50 dark:hover:bg-white/5'
                          }`}
                      >
                        <div className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center">DD</div>
                        <span className="truncate">Director/a de {currentCenter.tipo}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedContact('some')}
                        className={`w-full text-left p-2 rounded-lg flex items-center gap-2 cursor-pointer ${selectedContact === 'some'
                            ? 'bg-purple-50 dark:bg-purple-950/70 border border-purple-300 font-bold text-purple-700 dark:text-purple-300'
                            : 'hover:bg-slate-50 dark:hover:bg-white/5'
                          }`}
                      >
                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center">SOME</div>
                        <span className="truncate">Jefe/a de SOME</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedContact('farmacia')}
                        className={`w-full text-left p-2 rounded-lg flex items-center gap-2 cursor-pointer ${selectedContact === 'farmacia'
                            ? 'bg-purple-50 dark:bg-purple-950/70 border border-purple-300 font-bold text-purple-700 dark:text-purple-300'
                            : 'hover:bg-slate-50 dark:hover:bg-white/5'
                          }`}
                      >
                        <div className="w-6 h-6 rounded-full bg-amber-600 text-white font-bold text-[10px] flex items-center justify-center">QF</div>
                        <span className="truncate">Jefe/a de Farmacia</span>
                      </button>
                    </div>

                    {/* Detalle del contacto seleccionado */}
                    <div className="md:col-span-8 p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#131a2d] space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#761df1] text-white font-bold text-base flex items-center justify-center">
                          {selectedContact === 'admin' && 'A'}
                          {selectedContact === 'director' && 'DD'}
                          {selectedContact === 'some' && 'SO'}
                          {selectedContact === 'farmacia' && 'QF'}
                        </div>
                        <div>
                          <div className="font-bold text-sm text-slate-900 dark:text-white">
                            {selectedContact === 'admin' && 'Administrador General del Sistema'}
                            {selectedContact === 'director' && `Director/a de ${currentCenter.nombre}`}
                            {selectedContact === 'some' && 'Mauricio Alarcón Vera (Jefatura SOME)'}
                            {selectedContact === 'farmacia' && 'QF. Viviana Castro Silva (Farmacia)'}
                          </div>
                          <div className="text-[11px] text-purple-600 font-mono">
                            {selectedContact === 'admin' && `admin@${currentCenter.comuna.toLowerCase()}.apsconecta.cl`}
                            {selectedContact === 'director' && `direccion@${currentCenter.comuna.toLowerCase()}.apsconecta.cl`}
                            {selectedContact === 'some' && 'some@saludmunicipal.cl • Anexo 4110'}
                            {selectedContact === 'farmacia' && 'farmacia@saludmunicipal.cl • Anexo 4125'}
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-200 dark:border-white/10 text-[11px] space-y-1.5 text-slate-600 dark:text-slate-300">
                        <div><strong>Establecimiento:</strong> {currentCenter.nombre} ({currentCenter.comuna})</div>
                        <div><strong>Servicio de Salud:</strong> {currentCenter.servicioSalud}</div>
                        <div><strong>Libreta institucional:</strong> Cuentas del Personal Clínico y Administrativo</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================================
                  VISTA 12: DECK (CUARTO PANTALLAZO DEL SEGUNDO LOTE - KANBAN)
              ========================================================================= */}
              {activeApp === 'deck' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/10">
                    <div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">Tableros Kanban (Deck)</h3>
                      <p className="text-xs text-slate-500">Proyectos de mejora continua y comités de {currentCenter.nombre}</p>
                    </div>
                    <button type="button" className="px-3 py-1 rounded-lg bg-[#761df1] text-white text-xs font-semibold cursor-pointer">
                      + Nueva Tarjeta
                    </button>
                  </div>

                  {/* Columnas Kanban simplificadas */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 space-y-2">
                      <div className="font-bold text-slate-800 dark:text-white pb-1 border-b border-slate-200 dark:border-white/10 flex justify-between">
                        <span>Por hacer</span>
                        <span className="text-slate-400 font-mono">2</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-[#182035] border border-slate-200 dark:border-white/10 shadow-2xs space-y-1">
                        <div className="font-semibold text-slate-800 dark:text-white">1. Actualizar nómina de pacientes crónicos HTA</div>
                        <div className="text-[10px] text-purple-600 font-mono">Sector Verde</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-[#182035] border border-slate-200 dark:border-white/10 shadow-2xs space-y-1">
                        <div className="font-semibold text-slate-800 dark:text-white">2. Revisar stock de jeringas en box curación</div>
                        <div className="text-[10px] text-amber-600 font-mono">Enfermería</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 space-y-2">
                      <div className="font-bold text-slate-800 dark:text-white pb-1 border-b border-slate-200 dark:border-white/10 flex justify-between">
                        <span>En progreso</span>
                        <span className="text-purple-600 font-mono">1</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-[#182035] border border-purple-300 dark:border-purple-500/40 shadow-2xs space-y-1">
                        <div className="font-semibold text-slate-800 dark:text-white">3. Auditoría de fichas clínicas IAAS</div>
                        <div className="text-[10px] text-emerald-600 font-mono">Comité de Calidad</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 space-y-2">
                      <div className="font-bold text-slate-800 dark:text-white pb-1 border-b border-slate-200 dark:border-white/10 flex justify-between">
                        <span>Hecho / Verificado</span>
                        <span className="text-emerald-600 font-mono">1</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-[#182035] border border-slate-200 dark:border-white/10 shadow-2xs space-y-1">
                        <div className="font-semibold text-slate-800 dark:text-white">4. Turnos SAPU fin de semana validados</div>
                        <div className="text-[10px] text-emerald-600 font-mono">Listo para corte</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================================
                  VISTA 13: NOTAS (SEXTO PANTALLAZO DEL SEGUNDO LOTE)
              ========================================================================= */}
              {activeApp === 'notas' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/10">
                    <div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">Notas Rápidas y Traspasos</h3>
                      <p className="text-xs text-slate-500">Apuntes internos para relevos de turno en box</p>
                    </div>
                    <button type="button" className="px-3 py-1.5 rounded-lg bg-[#761df1] text-white text-xs font-semibold cursor-pointer">
                      + Nueva Nota
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-500/30 space-y-2">
                      <div className="font-bold text-slate-900 dark:text-white">Entrega de Box 01 (Sector Verde)</div>
                      <p className="text-slate-600 dark:text-slate-300">
                        Quedaron 3 exámenes de sangre pendientes de entrega por SOME para la tarde. Se coordinó con la enfermera de turno.
                      </p>
                      <div className="text-[10px] text-slate-400">Hoy 13:15 &bull; Dra. Camila Soto</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 space-y-2">
                      <div className="font-bold text-slate-900 dark:text-white">Aviso de Vacunatorio Móvil</div>
                      <p className="text-slate-600 dark:text-slate-300">
                        Mañana jueves operativo en Junta de Vecinos N° 14 desde las 09:30 hrs. Llevar termos y registro en planilla local.
                      </p>
                      <div className="text-[10px] text-slate-400">Ayer 16:40 &bull; SOME</div>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================================
                  VISTA 14: OFICINA (SÉPTIMO PANTALLAZO DEL SEGUNDO LOTE - ONLYOFFICE)
              ========================================================================= */}
              {activeApp === 'oficina' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="pb-2 border-b border-slate-200 dark:border-white/10">
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">OnlyOffice Local On-Premise</h3>
                    <p className="text-xs text-slate-500">Co-edición en tiempo real sin salir de la red local</p>
                  </div>

                  {/* Plantillas de creación rápida */}
                  <div>
                    <div className="font-bold text-xs text-slate-700 dark:text-slate-300 mb-2">Crear nuevo documento</div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      <div className="p-3 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#131a2d] hover:border-purple-400 transition-colors cursor-pointer text-center space-y-1">
                        <FileText className="w-5 h-5 text-purple-600 mx-auto" />
                        <div className="font-semibold text-slate-800 dark:text-white">Documento Vacío</div>
                      </div>
                      <div className="p-3 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#131a2d] hover:border-purple-400 transition-colors cursor-pointer text-center space-y-1">
                        <FileText className="w-5 h-5 text-emerald-600 mx-auto" />
                        <div className="font-semibold text-slate-800 dark:text-white">Planilla de Turnos</div>
                      </div>
                      <div className="p-3 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#131a2d] hover:border-purple-400 transition-colors cursor-pointer text-center space-y-1">
                        <FileText className="w-5 h-5 text-blue-600 mx-auto" />
                        <div className="font-semibold text-slate-800 dark:text-white">Acta de Comité</div>
                      </div>
                      <div className="p-3 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#131a2d] hover:border-purple-400 transition-colors cursor-pointer text-center space-y-1">
                        <FileText className="w-5 h-5 text-amber-600 mx-auto" />
                        <div className="font-semibold text-slate-800 dark:text-white">Informe Estadístico</div>
                      </div>
                    </div>
                  </div>

                  {/* Documentos de texto recientes */}
                  <div className="pt-2 border-t border-slate-200 dark:border-white/10 text-xs">
                    <div className="font-bold text-slate-700 dark:text-slate-300 mb-2">Documentos recientes</div>
                    <div className="space-y-1.5">
                      <div className="p-2 rounded-lg bg-slate-50 dark:bg-[#131a2d] flex justify-between">
                        <span className="font-semibold text-slate-800 dark:text-white">Acta-Comite-Calidad-Noviembre.docx</span>
                        <span className="text-slate-400">Modificado hoy</span>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-50 dark:bg-[#131a2d] flex justify-between">
                        <span className="font-semibold text-slate-800 dark:text-white">Protocolo-Limpieza-Superficies.docx</span>
                        <span className="text-slate-400">Ayer</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================================
                  VISTA 15: TAREAS (OCTAVO PANTALLAZO DEL SEGUNDO LOTE)
              ========================================================================= */}
              {activeApp === 'tareas' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/10">
                    <div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">Tareas y Compromisos Institucionales</h3>
                      <p className="text-xs text-slate-500">Supervisión de acreditación y logística</p>
                    </div>
                    <button type="button" className="px-3 py-1.5 rounded-lg bg-[#761df1] text-white text-xs font-semibold cursor-pointer">
                      + Añadir tarea
                    </button>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span className="font-semibold text-slate-800 dark:text-white">Validar libro de estupefacientes en Farmacia</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-600 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded">Completado</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded border border-slate-400" />
                        <span className="font-semibold text-slate-800 dark:text-white">Revisar fecha de caducidad en carro de paro (Urgencia)</span>
                      </div>
                      <span className="text-[10px] font-mono text-amber-600 bg-amber-100 dark:bg-amber-950 px-2 py-0.5 rounded">Pendiente Hoy</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#131a2d] border border-slate-200 dark:border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded border border-slate-400" />
                        <span className="font-semibold text-slate-800 dark:text-white">Envío de resumen estadístico mensual a DISAM</span>
                      </div>
                      <span className="text-[10px] font-mono text-purple-600 bg-purple-100 dark:bg-purple-950 px-2 py-0.5 rounded">Vence en 3 días</span>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================================
                  VISTA 16: ACTIVIDAD (NOVENO PANTALLAZO DEL SEGUNDO LOTE - AUDITORÍA)
              ========================================================================= */}
              {activeApp === 'actividad' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="pb-2 border-b border-slate-200 dark:border-white/10">
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">Registro de Actividad y Auditoría Local</h3>
                    <p className="text-xs text-slate-500">Trazabilidad inmutable de acciones en el servidor físico</p>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="font-bold text-slate-700 dark:text-slate-300">Hoy</div>

                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#131a2d] flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                        <span className="text-emerald-500 font-bold">+</span>
                        <span>Se firmó acuse de lectura en <strong>ORD-1420 Derivación Cardiovascular</strong></span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">hace 5 min</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#131a2d] flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                        <span className="text-purple-500 font-bold">+</span>
                        <span>Se creó la tarjeta <strong>Auditoría de fichas clínicas</strong> en Deck</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">hace 18 min</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#131a2d] flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                        <span className="text-blue-500 font-bold">&bull;</span>
                        <span>Asistente de IA (Ollama) ejecutó análisis matutino sin fugas de datos</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">hoy 07:00</span>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================================
                  VISTA 17: TALK (DÉCIMO PANTALLAZO DEL SEGUNDO LOTE - MENSAJERÍA)
              ========================================================================= */}
              {activeApp === 'talk' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/10">
                    <div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">Nextcloud Talk &bull; {currentCenter.nombre}</h3>
                      <p className="text-xs text-slate-500">Videollamadas y canales de coordinación clínica interna</p>
                    </div>
                    <div className="flex gap-2">
                      <button type="button" className="px-3 py-1.5 rounded-lg bg-[#761df1] text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer">
                        <Video className="w-3.5 h-3.5" />
                        <span>Iniciar reunión ahora</span>
                      </button>
                    </div>
                  </div>

                  {/* 3 tarjetas grandes estilo Talk */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-500/30 space-y-2">
                      <div className="font-bold text-slate-900 dark:text-white">Programar reuniones</div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300">
                        Coordine sesiones clínicas entre boxes sin utilizar enlaces externos.
                      </p>
                      <button
                        type="button"
                        onClick={() => setActiveApp('calendario')}
                        className="px-2.5 py-1 rounded bg-white dark:bg-slate-800 border border-slate-300 text-xs font-semibold cursor-pointer"
                      >
                        Abrir calendario
                      </button>
                    </div>

                    <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-500/30 space-y-2">
                      <div className="font-bold text-slate-900 dark:text-white">Menciones sin leer</div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300">
                        Mensajes donde fue etiquetado para interconsultas o reemplazos de turno.
                      </p>
                      <span className="text-[10px] text-purple-600 font-mono font-bold">0 menciones pendientes</span>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-500/30 space-y-2">
                      <div className="font-bold text-slate-900 dark:text-white">Canales por Sector</div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300">
                        Salas seguras para Sector Verde, Sector Azul, SOME y Urgencia SAR.
                      </p>
                      <span className="text-[10px] text-emerald-600 font-mono font-bold">4 canales activos en LAN</span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* =========================================================================
            BARRA INFERIOR DE ESTADO TÉCNICO LOCAL
        ========================================================================= */}
        <div className="bg-[#f8fafc] dark:bg-[#090d18] border-t border-slate-200 dark:border-white/10 px-4 py-2 flex flex-wrap items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span
              className={`font-medium text-slate-700 dark:text-slate-300 transition-all duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'
                }`}
            >
              Instancia Nextcloud On-Premise &bull; 100% Red LAN Local en {currentCenter.comuna}
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-purple-600 dark:text-purple-300">
            <span>$0 en Licencias por Usuario</span>
          </div>
        </div>
      </div>

      {/* Tooltip flotante global (escapa del overflow-hidden y z-index interno) */}
      {hoveredAppTooltip && (
        <div
          role="tooltip"
          style={{
            position: 'fixed',
            top: `${hoveredAppTooltip.top}px`,
            left: `${hoveredAppTooltip.left}px`,
            transform: 'translateY(-50%)',
          }}
          className="pointer-events-none w-56 sm:w-64 p-3 rounded-xl bg-slate-900/98 dark:bg-[#070b16]/98 text-slate-100 text-[11px] leading-snug font-normal shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-purple-500/40 backdrop-blur-md z-[9999] animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="font-bold text-white text-xs mb-1.5 flex items-center gap-1.5 text-purple-300">
            {React.createElement(hoveredAppTooltip.app.icono, {
              className: 'w-3.5 h-3.5 text-purple-400 shrink-0',
            })}
            <span>{hoveredAppTooltip.app.nombre}</span>
          </div>
          <p className="text-slate-300 text-[11px] font-normal leading-relaxed">
            {hoveredAppTooltip.app.descripcion}
          </p>
          {/* Flecha indicadora del tooltip hacia la izquierda */}
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-[5px] border-transparent border-r-slate-900/98 dark:border-r-[#070b16]/98" />
        </div>
      )}
    </div>
  );
}
