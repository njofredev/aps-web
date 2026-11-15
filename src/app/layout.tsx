import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'APS Conecta | La gestión interna que un CESFAM nunca tuvo',
  description:
    'Plataforma local, segura y asistida por IA para ordenar los procesos clínico-administrativos de la Atención Primaria de Salud (APS) en Chile. 100% código abierto, sin nube y con financiamiento Colmed 3.',
  keywords: [
    'APS Conecta',
    'CESFAM Chile',
    'Atención Primaria de Salud',
    'Gestión Clínico Administrativa',
    'Software Libre Salud',
    'Colmed 3',
    'Dr Daniel Espinoza Charrier',
    'Nextcloud Salud',
    'Soberanía Digital',
  ],
  authors: [{ name: 'Dr. Daniel Espinoza Charrier' }, { name: 'Equipo APS Conecta' }],
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${jakarta.variable} ${robotoMono.variable} dark scroll-smooth antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('aps_theme');
                if (saved === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                  document.documentElement.style.colorScheme = 'light';
                } else {
                  document.documentElement.classList.remove('light');
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.colorScheme = 'dark';
                }
              } catch (e) {
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--aps-canvas-bg)] text-[var(--aps-text-primary)] flex flex-col font-sans transition-colors duration-200 selection:bg-[#7f21fe]/30 selection:text-[#d9cdff]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
