import epsSuraLogo from '@/assets/logo-eps-sura.png'

export default function Footer() {
  return (
    <>
      <footer className="bg-white pt-10 pb-12 border-t border-gray-200">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="mb-6">
            <img src={epsSuraLogo} alt="EPS Sura" className="h-10 w-auto object-contain" />
          </div>
          <hr className="border-gray-200 mb-8" />

          <div className="grid grid-cols-3 gap-10">

            <div>
              <h4 className="text-[12px] font-black text-gray-900 tracking-wide mb-4 uppercase">Sobre nosotros</h4>
              <ul className="space-y-2">
                {[
                  'CE0008 de 2020','Estados financieros','Normatividad','Corporativo',
                  'Nuestras oficinas','Trabaje con nosotros','Consulta de oportunidad',
                  'Indicadores de Salud','Línea ética','Participación ciudadana',
                  'Rendición de cuentas','Mapa del sitio',
                ].map(link => (
                  <li key={link}>
                    <a href="#" className="text-[13px] text-blue-600 hover:text-blue-800 hover:underline transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[12px] font-black text-gray-900 tracking-wide mb-4 uppercase">Servicios al usuario</h4>
              <ul className="space-y-2 mb-6">
                {[
                  'Tiempo para ti','Maternidad y primera infancia','Para siempre',
                  'Deberes y derechos del afiliado','Afiliación para desempleados',
                  'Atención virtual en Salud','Cuotas moderadoras y tarifas',
                  'Negación de Servicios de Salud','Voluntades anticipadas',
                ].map(link => (
                  <li key={link}>
                    <a href="#" className="text-[13px] text-blue-600 hover:text-blue-800 hover:underline transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
              <p className="text-[12px] text-gray-600 mb-1">Notificaciones judiciales:</p>
              <a href="mailto:notificacionesjudiciales@suramericana.com.co"
                className="text-[13px] font-bold text-gray-800 hover:underline break-all">
                notificacionesjudiciales@suramericana.com.co
              </a>
            </div>

            <div>
              <h4 className="text-[12px] font-black text-gray-900 tracking-wide mb-4 uppercase">Líneas de atención</h4>
              <ul className="space-y-2 mb-6 text-[13px] text-gray-700">
                <li>Medellín: <span className="font-medium">+57 604 448 6115</span></li>
                <li>Bogotá: <span className="font-medium">+57 601 489 7941</span></li>
                <li>Resto del país: <span className="font-medium">+57 01 8000 519 519</span></li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">Escríbenos tus PQRS</a>
                </li>
              </ul>

              <h4 className="text-[12px] font-black text-gray-900 tracking-wide mb-3 uppercase">Consulta</h4>
              <ul className="space-y-2">
                {[
                  'Políticas de uso y seguridad',
                  'Política de Seguridad y Ciberseguridad',
                  'Políticas de privacidad y datos y Ley de datos personales',
                ].map(link => (
                  <li key={link}>
                    <a href="#" className="text-[13px] text-blue-600 hover:text-blue-800 hover:underline transition-colors">- {link}</a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="text-white rounded-full shadow-xl hover:scale-105 transition-transform flex flex-col items-center justify-center text-center text-[11px] font-bold leading-tight"
          style={{ background: '#1d6dbf', width: 72, height: 72 }}
        >
          <span className="text-xl mb-0.5">💬</span>
          Canales de contacto
        </button>
      </div>
    </>
  )
}
