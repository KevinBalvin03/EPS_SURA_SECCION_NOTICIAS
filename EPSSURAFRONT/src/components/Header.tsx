import { Link } from 'react-router-dom'
import epsSuraLogo from '@/assets/logo-eps-sura.png'

export default function Header() {
  return (
    <>
      <div style={{ background: '#3d3d3d' }} className="text-white text-xs py-2">
        <div className="max-w-screen-xl mx-auto px-6 flex justify-end items-center gap-5">
          <button className="flex items-center gap-1.5 hover:text-gray-300 transition-colors uppercase tracking-widest text-[10px] font-medium">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 5h-7V3H3v13h4v2h3v3l4-3h3v-5h4V5zm-9 9H9v-2H7v-2h2V9h2v2h2v2h-2v1zm6-4h-2V8h-2V6h2V4h2v2h2v2h-2v2z" />
            </svg>
            LENGUA DE SEÑAS
          </button>
          <span className="text-gray-600">|</span>
          <button className="flex items-center gap-1 hover:text-gray-300 transition-colors uppercase tracking-widest text-[10px] font-medium">
            ESPAÑOL <span className="text-[8px]">▼</span>
          </button>
        </div>
      </div>

      <header className="bg-white shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
          <div className="shrink-0">
            <Link to="/"><img src={epsSuraLogo} alt="EPS Sura" className="h-8 w-auto object-contain" /></Link>
          </div>

          <nav className="hidden lg:flex items-center gap-3 text-[11px] text-gray-600 min-w-0">
            {['Ley de transparencia', 'Preguntas frecuentes', 'Escríbenos tus PQRS', 'Canales de contacto', 'Solicitar clave'].map(link => (
              <a key={link} href="#" className="hover:text-gray-900 transition-colors whitespace-nowrap">{link}</a>
            ))}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <button className="bg-gray-900 text-white text-[11px] px-4 py-1.5 rounded-full flex items-center gap-1.5 hover:bg-gray-700 transition-colors font-semibold tracking-wide whitespace-nowrap">
              INICIAR SESIÓN <span className="text-[9px]">▼</span>
            </button>
            <button className="text-gray-500 hover:text-gray-900 transition-colors p-1 shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="h-[3px] flex">
        {['#f97316','#fb923c','#fbbf24','#a3e635','#22c55e','#14b8a6','#3b82f6','#6366f1','#8b5cf6'].map(c => (
          <div key={c} className="flex-1" style={{ background: c }} />
        ))}
      </div>
    </>
  )
}
