# Especificación Técnica: Portal Web APS Conecta (apsconecta.cl)

## Problem Statement

Los Centros de Salud Familiar (CESFAM) y la red de Atención Primaria de Salud (APS) en Chile enfrentan una profunda fragmentación en sus procesos de gestión interna, comunicación operativa y coordinación intersectorial. Actualmente, las Direcciones de Salud Municipal (DISAM/DESAM) y los equipos directivos de los centros de salud se ven atrapados entre:

1. Sistemas de software propietarios con licencias costosas y soporte rígido que no se adaptan a la dinámica diaria de los sectores clínicos ni a la realidad presupuestaria comunal.
2. Pérdida de soberanía tecnológica y de datos clínicos/administrativos, alojados en plataformas privadas opacas.
3. Desconexión en la comunicación cotidiana: la información operativa (turnos, novedades de farmacia, contactos internos por box y sector) se dispersa en grupos informales de mensajería instantánea, planillas desactualizadas o murales físicos.
4. Falta de una plataforma de referencia abierta que dé a conocer a directivos municipales, jefaturas de sector y equipos de informática la existencia de una alternativa libre, autoalojable y diseñada específicamente para el modelo de salud familiar chileno.

Sin un portal oficial claro, sobrio y accesible que comunique la propuesta de valor de **APS Conecta**, los tomadores de decisión municipales no cuentan con un punto de entrada para comprender la solución, explorar sus capacidades ni solicitar pilotos de implementación en sus comunas.

---

## Solution

Desarrollar la **landing page principal de `apsconecta.cl`** como una aplicación Node moderna, ligera, rápida y minimalista, concebida para:

1. **Comunicar la propuesta de valor con máxima claridad**: Presentar a APS Conecta como la suite de código abierto y autoalojada diseñada por y para la Atención Primaria de Salud en Chile, destacando la soberanía de datos, el ahorro presupuestario y la autonomía comunal.
2. **Experiencia sin fricción (Cero Login)**: Eliminar barreras de acceso, permitiendo a cualquier director, profesional clínico o encargado de informática explorar la visión, los módulos y una **demostración interactiva embebida** directamente en la página principal, sin necesidad de crear cuentas ni autenticarse.
3. **Showcase Interactivo Integrado**: Ofrecer una vista previa funcional y dinámica en la misma web que simule la experiencia de un panel de coordinación de CESFAM (organización por sectores, directorio de anexos y tablero de novedades de turno).
4. **Canal directo de contacto y piloto municipal**: Un formulario de solicitud simple y validado que permita a las comunas interesadas registrar su interés, guardando los datos de forma local y entregando respuesta visual inmediata.
5. **Estética minimalista y profesional**: Un diseño sobrio, con amplio espacio en blanco, tipografía nítida y acentos en azul salud pública, optimizado para una lectura rápida tanto en computadores de escritorio como en dispositivos móviles.

---

## User Stories

### Para Directores de Salud Municipal (DISAM/DESAM)
1. Como Director de Salud Municipal, quiero entender rápidamente qué es APS Conecta en los primeros 10 segundos de visita, para evaluar si es una alternativa viable para reducir el gasto en licencias de software en mi comuna.
2. Como Director de Salud Municipal, quiero conocer los pilares de soberanía de datos y código abierto, para asegurar que la información de los centros de salud de mi comuna esté bajo control municipal y cumpla la normativa chilena.
3. Como Director de Salud Municipal, quiero ver un formulario directo de contacto para solicitar una reunión informativa o un piloto en uno de los CESFAM de mi comuna.
4. Como Director de Salud Municipal, quiero acceder a la web desde mi teléfono o tablet durante reuniones de consejo municipal, para mostrar el proyecto a otras autoridades comunales.

### Para Directores de CESFAM y Jefaturas de Sector
5. Como Directora de CESFAM, quiero ver ejemplos concretos de cómo APS Conecta resuelve la desconexión entre el sector azul, amarillo y el SOME, para visualizar mejoras en la coordinación interna de mi centro.
6. Como Jefe de Sector en un CESFAM, quiero interactuar con el visor interactivo de la landing sin tener que registrarme, para entender cómo mis equipos clínicos consultarían anexos y avisos diarios.
7. Como Jefa de SOME/OIRS, quiero verificar que la plataforma contempla los flujos típicos de la atención primaria chilena (boxes, estamentos, turnos, farmacia), para asegurar que no sea un software genérico descontextualizado.
8. Como Coordinador de Calidad de un CESFAM, quiero revisar la propuesta de estandarización de protocolos internos, para certificar procesos de acreditación en salud.

### Para Encargados de Informática y TI Municipal
9. Como Encargado de Informática de Salud, quiero conocer el modelo de autoalojamiento (self-hosted) de la suite, para planificar los requisitos de infraestructura y servidores locales de la municipalidad.
10. Como Encargado de Informática, quiero revisar los enlaces a los repositorios de código abierto, para auditar la tecnología, dependencias y seguridad antes de recomendar su instalación.
11. Como Administrador de Sistemas municipal, quiero una landing que cargue de forma instantánea sin scripts pesados de rastreo, para verificar el compromiso del proyecto con la eficiencia y el respeto a los recursos.

### Para Profesionales Clínicos y Administrativos de APS
12. Como Médico de CESFAM, quiero ver en el showcase interactivo cómo se visualizan las alertas de farmacia y protocolos de turno, para saber si la herramienta me ahorrará tiempo entre consultas.
13. Como Enfermera Encargada de Programa, quiero comprobar que el directorio operativo permite filtrar por estamentos y sectores, para encontrar anexos internos sin perder minutos en llamadas erróneas.
14. Como TENS de Box de Procedimientos, quiero una interfaz clara y con buen contraste visual, para no cansar la vista en turnos extensos.

### Para Interesados y Solicitantes de Piloto
15. Como visitante interesado, quiero enviar mis datos de contacto (nombre, comuna, CESFAM, correo y requerimiento) mediante un formulario directo, para recibir respuesta del equipo de APS Conecta.
16. Como visitante interesado, quiero recibir retroalimentación inmediata en pantalla tras presionar "Enviar", para tener la certeza de que mi mensaje fue registrado exitosamente.
17. Como visitante interesado, quiero recibir advertencias claras si olvido completar campos obligatorios o ingreso un correo con formato inválido, para corregir el error antes de enviar.

---

## Implementation Decisions

### 1. Arquitectura y Runtime
* **Framework Fullstack Unificado**: Se utiliza **Next.js (App Router)** ejecutándose sobre el runtime de **Node.js (v24)**. Esto permite alojar la interfaz de usuario y las funciones del servidor (Server Actions para contacto) en una sola aplicación compacta y cohesiva.
* **Lenguaje**: **TypeScript** en modo estricto en toda la aplicación para garantizar robustez, autocompletado y tipado riguroso de componentes y esquemas de datos.
* **Estilos y Sistema de Diseño**: **Tailwind CSS** para un diseño moderno, ágil y sin hojas de estilo monolíticas. Se incorporan iconos vectoriales ligeros mediante **Lucide React**.

### 2. Estructura y Navegación de la Aplicación
La aplicación se compone de una sola página principal fluida (`Landing Page`), dividida en secciones lógicas vinculadas por anclas accesibles:
* **Barra de Navegación (Header)**: Logotipo sobrio de APS Conecta, indicador sutil de software libre chileno, enlaces a secciones clave (*Propuesta*, *Pilares*, *Demostración*, *Contacto*) y botón de acción directa a solicitud de piloto.
* **Sección Hero**: Título contundente centrado en la autonomía y modernización de la gestión interna de los CESFAM chilenos; subtítulo explicativo de alto impacto; y dos llamadas a la acción (*Explorar Demostración* y *Solicitar Piloto Comunal*).
* **Sección "La Realidad de la APS"**: Contraste visual entre los dolores habituales en la atención primaria (costo de licencias, dispersión de información, dependencia tecnológica) y la respuesta que entrega APS Conecta.
* **Sección "Pilares Fundamentales"**: Tres tarjetas minimalistas que detallan:
  1. *100% Código Abierto*: Libertad de auditoría y personalización sin costos de licencia cautivos.
  2. *Autoalojado y Soberano*: Control total de la infraestructura y datos de los usuarios en servidores locales o comunales.
  3. *Diseñado para el CESFAM*: Pensado desde el origen para la realidad territorial de los centros de salud familiar en Chile.
* **Sección "Showcase Interactivo" (Demostración Embebida)**:
  * Componente interactivo cliente que recrea la vista de un panel de coordinación de CESFAM.
  * Selector de pestañas interactivas sin recargar página:
    * *Directorio por Sectores*: Listado filtrable de funcionarios, estamentos (Médicos, Enfermería, TENS, etc.) y anexos telefónicos.
    * *Novedades Operativas*: Tablero de avisos del día con etiquetas de prioridad (Crítica, Farmacia, General).
    * *Enlaces de Turno*: Accesos rápidos simulados a sistemas de ficha clínica y protocolos MINSAL.
* **Sección "Solicitud de Piloto / Contacto"**: Formulario minimalista con validación integrada (Nombre, Cargo/Rol, Comuna/Establecimiento, Correo electrónico, Mensaje).
* **Pie de Página (Footer)**: Créditos al proyecto de software libre para la salud pública chilena, licencia abierta y enlaces a la organización en GitHub.

### 3. Persistencia y Gestión del Formulario de Contacto
* **Server Action en Node.js**: El procesamiento del formulario de contacto se maneja mediante una acción de servidor nativa de Next.js.
* **Almacenamiento Local**: Para esta versión local sin dependencias de servicios externos ni bases de datos complejas, las solicitudes se validan y se persisten en un almacenamiento local estructurado en formato JSON (`data/solicitudes.json` o base de datos local embebida).
* **Feedback de Usuario**: Manejo de estados de carga (`pending`), confirmación visual de envío exitoso con opción de enviar una nueva consulta, y visualización clara de errores de validación.

### 4. Directrices de Identidad y Experiencia de Usuario (UI/UX)
* **Paleta Cromática**: Fondo blanco/gris neutro muy limpio (`slate-50 / white`), tipografía en tonos oscuros de alto contraste (`slate-900 / slate-800`), y acentos en azul salud / cian sobrio (`blue-600 / sky-600`).
* **Micro-interacciones**: Transiciones suaves en botones, cambio de pestañas reactivo en el showcase y enfoque accesible en campos de formulario.
* **Comportamiento Responsivo**: Adaptación fluida a pantallas de teléfonos móviles, tablets y monitores de alta resolución.

---

## Testing Decisions

### Criterio de Calidad de Pruebas
Las pruebas deben enfocarse exclusivamente en el **comportamiento observable externamente por el usuario (Black-box behavioral testing)**, evitando acoplarse a detalles internos de implementación, nombres de funciones o clases de CSS.

### Costura de Pruebas (Primary Testing Seam)
Se establece una única costura de alto nivel a través de pruebas de interfaz de usuario y acciones de servidor:
1. **Prueba de Renderizado y Navegación**:
   * Verificar que la página principal carga todos los bloques informativos (Hero, Realidad APS, Pilares, Showcase, Contacto).
   * Verificar que las anclas de navegación desplazan suavemente hacia las secciones correspondientes.
2. **Prueba del Showcase Interactivo**:
   * Comprobar que al alternar entre las pestañas del visor (Directorio, Novedades, Enlaces) se actualiza dinámicamente la información mostrada sin errores en consola.
   * Comprobar que el filtro o buscador del directorio de muestra responde instantáneamente a la entrada de texto.
3. **Prueba de Envío del Formulario de Contacto**:
   * **Caso Válido**: Rellenar todos los campos obligatorios con datos válidos, accionar el botón de envío y comprobar que aparece el mensaje de confirmación de éxito y que los campos se reinician.
   * **Caso Inválido / Vacío**: Intentar enviar el formulario con campos vacíos o correo no válido y comprobar que la interfaz previene el envío y resalta los campos requeridos con mensajes claros.

---

## Out of Scope

Para este entregable inicial se declaran explícitamente fuera de alcance:
1. **Sistema de Autenticación, Login o Cuentas**: No hay usuarios registrados, inicio de sesión, recuperación de contraseñas ni roles en la landing page.
2. **Integración con Sistemas de Ficha Clínica Electrónica**: No se conectará con Rayen, Ovis, Saydex ni bases de datos de pacientes reales (la información médica real de pacientes está excluida).
3. **Servicios de Envío de Correo Externo (SMTP/APIs de Mailing)**: El formulario no dependerá de servicios en la nube de envío de correos masivos (SendGrid, Resend, etc.) en esta fase local.
4. **Módulos Administrativos Privados Multi-inquilino**: La landing es de acceso público y no incluye paneles de superadministración en la nube.
5. **Configuración de Despliegue en Servidores Remotos**: No se requiere configuración de dominios DNS externos ni servidores VPS en esta etapa local.

---

## Further Notes

* **Terminología y Cultura APS**: La redacción del sitio respeta los términos propios del sistema de salud chileno: *CESFAM* (Centro de Salud Familiar), *DISAM* (Dirección de Salud Municipal), *SOME* (Servicio de Orientación Médico-Estadística), *OIRS*, *Sectores territoriales* (Azul, Verde, Amarillo), y estamentos reconocidos por MINSAL.
* **Evolución Futura**: El diseño modular de la landing facilitará en etapas posteriores enlazar a la documentación oficial de instalación de la suite autoalojada y a una instancia de demostración en vivo alojada en servidores del proyecto.
