import { NavLink } from 'react-router-dom'

// Secciones que todavía no tienen página propia.
const PENDING_SECTIONS = ['AFILIADOS', 'EMPLEADORES', 'INDEPENDIENTES', 'ASESORES COMERCIALES', 'PRESTADORES DE SERVICIO', 'PAC']

const itemBase = 'px-4 py-2.5 text-[11px] font-semibold tracking-widest whitespace-nowrap transition-all border-b-2'
const itemActive = 'text-white border-white'
const itemIdle = 'text-gray-300 border-transparent hover:text-white hover:border-gray-400'

export default function SecondaryNav() {
  return (
    <nav style={{ background: '#595959' }}>
      <div className="flex items-center justify-center px-20 overflow-x-auto">
        <NavLink to="/" end className={({ isActive }) => `${itemBase} ${isActive ? itemActive : itemIdle}`}>
          INICIO
        </NavLink>
        {PENDING_SECTIONS.map(item => (
          <button key={item} className={`${itemBase} ${itemIdle}`}>
            {item}
          </button>
        ))}
        <NavLink
          to="/noticias"
          className={({ isActive }) =>
            `ml-3 px-5 py-2.5 text-[11px] font-semibold tracking-widest whitespace-nowrap transition-all rounded-sm border-b-2 ${
              isActive ? 'text-white border-white' : 'text-gray-200 border-transparent hover:text-white'
            }`
          }
          style={({ isActive }) => ({ background: isActive ? '#333' : '#424242' })}
        >
          NOTICIAS
        </NavLink>
      </div>
    </nav>
  )
}
