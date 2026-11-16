'use server';

import fs from 'node:fs/promises';
import path from 'node:path';

export interface ContactState {
  success: boolean;
  message?: string;
  errors?: Record<string, string>;
}

export interface SolicitudContacto {
  id: string;
  fecha: string;
  nombre: string;
  email: string;
  establecimiento: string;
  estamento: string;
  telefono?: string;
  mensaje: string;
}

export async function submitContactAction(
  _prevState: ContactState | null,
  formData: FormData
): Promise<ContactState> {
  const nombre = (formData.get('nombre') as string)?.trim() || '';
  const email = (formData.get('email') as string)?.trim() || '';
  const establecimiento = (formData.get('establecimiento') as string)?.trim() || '';
  const mensaje = (formData.get('mensaje') as string)?.trim() || '';
  const telefono = (formData.get('telefono') as string)?.trim() || '';
  const estamento = (formData.get('estamento') as string)?.trim() || 'No especificado';

  const errors: Record<string, string> = {};

  if (!nombre || nombre.length < 3) {
    errors.nombre = 'Ingresa tu nombre.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = 'Ingresa un correo institucional o personal válido.';
  }

  if (!establecimiento || establecimiento.length < 3) {
    errors.establecimiento = 'Indica el nombre de tu CESFAM o Comuna.';
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors,
    };
  }

  try {
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'solicitudes.json');

    await fs.mkdir(dataDir, { recursive: true });

    let solicitudes: SolicitudContacto[] = [];
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      solicitudes = JSON.parse(fileContent);
    } catch {
      solicitudes = [];
    }

    const nuevaSolicitud: SolicitudContacto = {
      id: `sol-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      fecha: new Date().toISOString(),
      nombre,
      email,
      establecimiento,
      estamento,
      telefono,
      mensaje,
    };

    solicitudes.push(nuevaSolicitud);
    await fs.writeFile(filePath, JSON.stringify(solicitudes, null, 2), 'utf-8');

    return {
      success: true,
      message: `¡Gracias por contactarnos, ${nombre}! Hemos registrado tu solicitud para ${establecimiento}. Te contactaremos a la brevedad para coordinar la presentación o piloto de APS Conecta.`,
    };
  } catch (error) {
    console.error('Error al guardar solicitud de contacto:', error);
    return {
      success: false,
      message: 'Ocurrió un error al procesar tu solicitud. Por favor intenta nuevamente.',
    };
  }
}
