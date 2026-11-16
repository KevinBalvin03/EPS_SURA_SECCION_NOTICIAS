import { useState } from 'react'

const SLIDES = [
  {
    headline: 'Consulta el nuevo valor de las cuotas moderadoras y copagos para el 2026.',
    cta: 'INGRESA AQUÍ',
    img: 'https://images.unsplash.com/photo-1595986630530-969786b19b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
  },
  {
    headline: 'Conoce todos los beneficios de ser parte de EPS SURA.',
    cta: 'VER MÁS',
    img: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
  },
  {
    headline: 'Solicita tu turno virtual y ahorra tiempo en tus trámites.',
    cta: 'SOLICITAR TURNO',
    img: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
  },
  {
    headline: 'Aprende a cuidar tu salud con nuestra plataforma educativa.',
    cta: 'CONOCE MÁS',
    img: 'https://images.unsplash.com/photo-1622128124312-7b5f7d08126a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
  },
]

const EDU_CARDS = [
  {
    title: '¡Puedes aprender desde cualquier lugar!',
    desc: 'Esta plataforma es virtual y te permite aprender desde tu casa, tu lugar de trabajo o la casa de tus familiares. Tienes acceso a toda la información sin tener que desplazarte.',
    img: 'https://images.unsplash.com/photo-1622128124312-7b5f7d08126a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    titleClass: 'font-bold text-gray-900 text-left',
  },
  {
    title: 'Programas',
    desc: 'Tenemos cursos y contenidos pensados para cada momento de vida o salud. Vas a aprender a través de videos con expertos, juegos, audios, entre otros.',
    img: 'https://images.unsplash.com/photo-1541040550327-d23059d44cd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    titleClass: 'font-bold text-gray-900 text-center',
  },
  {
    title: 'Foros en vivo',
    desc: 'Los jueves cada 15 días tenemos foros virtuales en los que conversamos con expertos sobre diversos temas valiosos para tu salud y bienestar.',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    titleClass: 'font-bold text-gray-900 text-center',
  },
]

const AFFIL_CARDS = [
  {
    label: 'Plan de Beneficios en Salud',
    img: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300',
  },
  {
    label: 'Régimen subsidiado',
    img: 'https://images.unsplash.com/photo-1758691461990-03b49d969495?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300',
  },
]

function DoctorConsultSVG() {
  return (
    <svg viewBox="0 0 140 130" className="w-32 h-28 mx-auto">
      <rect x="20" y="90" width="100" height="6" rx="2" fill="#c4b5fd" />
      <rect x="30" y="96" width="8" height="20" rx="2" fill="#a78bfa" />
      <rect x="102" y="96" width="8" height="20" rx="2" fill="#a78bfa" />
      <circle cx="95" cy="40" r="14" fill="#ddd6fe" />
      <rect x="82" y="54" width="26" height="36" rx="5" fill="#a78bfa" />
      <rect x="74" y="62" width="10" height="24" rx="4" fill="#c4b5fd" />
      <rect x="108" y="62" width="10" height="24" rx="4" fill="#c4b5fd" />
      <circle cx="42" cy="50" r="12" fill="#ddd6fe" />
      <rect x="31" y="62" width="22" height="28" rx="4" fill="#c4b5fd" />
      <rect x="58" y="55" width="24" height="18" rx="3" fill="#ede9fe" stroke="#a78bfa" strokeWidth="1.5" />
      <rect x="67" y="73" width="6" height="5" rx="1" fill="#a78bfa" />
      <path d="M94 54 Q88 65 88 75" stroke="#7c3aed" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="88" cy="77" r="3" fill="#7c3aed" />
    </svg>
  )
}

function MedicineSVG() {
  return (
    <svg viewBox="0 0 140 130" className="w-32 h-28 mx-auto">
      <rect x="15" y="100" width="110" height="5" rx="2" fill="#c4b5fd" />
      <rect x="30" y="55" width="22" height="45" rx="4" fill="#ddd6fe" stroke="#a78bfa" strokeWidth="1.5" />
      <rect x="34" y="48" width="14" height="10" rx="2" fill="#a78bfa" />
      <rect x="36" y="68" width="10" height="2" rx="1" fill="#a78bfa" />
      <rect x="36" y="73" width="10" height="2" rx="1" fill="#a78bfa" />
      <rect x="36" y="78" width="10" height="2" rx="1" fill="#a78bfa" />
      <rect x="60" y="63" width="18" height="37" rx="4" fill="#ede9fe" stroke="#a78bfa" strokeWidth="1.5" />
      <rect x="63" y="57" width="12" height="8" rx="2" fill="#c4b5fd" />
      <ellipse cx="95" cy="85" rx="10" ry="5" fill="#ddd6fe" stroke="#a78bfa" strokeWidth="1" />
      <line x1="95" y1="80" x2="95" y2="90" stroke="#a78bfa" strokeWidth="1.5" />
      <ellipse cx="100" cy="73" rx="8" ry="4" fill="#c4b5fd" stroke="#a78bfa" strokeWidth="1" transform="rotate(-20 100 73)" />
      <line x1="97" y1="70" x2="103" y2="76" stroke="#a78bfa" strokeWidth="1.5" />
      <rect x="88" y="83" width="20" height="15" rx="2" fill="#ede9fe" stroke="#a78bfa" strokeWidth="1.5" />
      <path d="M92 90 L96 90 M94 87 L94 93" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IPSDoctorSVG() {
  return (
    <svg viewBox="0 0 140 130" className="w-32 h-28 mx-auto">
      {[0, 1, 2, 3, 4, 5, 6].map(i => (
        <line key={i} x1={90 + i * 6} y1="20" x2={90 + i * 6} y2="110" stroke="#ede9fe" strokeWidth="4" />
      ))}
      <circle cx="55" cy="38" r="16" fill="#ddd6fe" />
      <rect x="38" y="54" width="34" height="50" rx="5" fill="#ede9fe" stroke="#c4b5fd" strokeWidth="1.5" />
      <path d="M55 54 L48 70" stroke="#c4b5fd" strokeWidth="1.5" />
      <path d="M55 54 L62 70" stroke="#c4b5fd" strokeWidth="1.5" />
      <rect x="25" y="60" width="13" height="30" rx="5" fill="#ddd6fe" />
      <rect x="72" y="60" width="13" height="30" rx="5" fill="#ddd6fe" />
      <rect x="72" y="75" width="16" height="20" rx="2" fill="#ede9fe" stroke="#a78bfa" strokeWidth="1.5" />
      <rect x="76" y="72" width="8" height="4" rx="1" fill="#a78bfa" />
      <line x1="75" y1="82" x2="85" y2="82" stroke="#c4b5fd" strokeWidth="1" />
      <line x1="75" y1="86" x2="85" y2="86" stroke="#c4b5fd" strokeWidth="1" />
      <line x1="75" y1="90" x2="82" y2="90" stroke="#c4b5fd" strokeWidth="1" />
      <path d="M50 54 Q44 68 44 78" stroke="#a78bfa" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="44" cy="80" r="4" fill="#a78bfa" />
      <rect x="43" y="104" width="10" height="20" rx="3" fill="#ddd6fe" />
      <rect x="57" y="104" width="10" height="20" rx="3" fill="#ddd6fe" />
    </svg>
  )
}

function EduCard({ card }: { card: typeof EDU_CARDS[0] }) {
  return (
    <div className="flex-1 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col" style={{ border: '1px solid #e5e7eb' }}>
      <div className="h-44 overflow-hidden shrink-0">
        <img src={card.img} alt={card.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-5 flex flex-col flex-1 justify-between bg-white">
        <div>
          <h3 className={`text-sm leading-snug mb-3 ${card.titleClass}`}>{card.title}</h3>
          <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
        </div>
        <a href="#" className="text-gray-700 text-sm font-semibold flex items-center gap-1 mt-5 hover:text-teal-600 transition-colors group">
          IR <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </a>
      </div>
    </div>
  )
}

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(2)

  return (
    <>
      <section className="relative overflow-hidden" style={{ background: '#3a3a3a', height: 430 }}>
        <div className="absolute inset-0 transition-all duration-700">
          <img
            src={SLIDES[activeSlide].img}
            alt=""
            className="w-full h-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.1) 100%)' }} />
        </div>

        <button
          onClick={() => setActiveSlide(s => (s - 1 + SLIDES.length) % SLIDES.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-10 text-5xl font-thin leading-none transition-colors"
        >
          ‹
        </button>

        <button
          onClick={() => setActiveSlide(s => (s + 1) % SLIDES.length)}
          className="absolute right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-10 text-5xl font-thin leading-none transition-colors"
        >
          ›
        </button>

        <div className="relative z-10 h-full flex flex-col justify-center px-20 max-w-2xl">
          <h1 className="text-white text-[32px] font-bold leading-tight mb-8">
            {SLIDES[activeSlide].headline}
          </h1>
          <button className="border-2 border-white text-white px-7 py-2.5 rounded-full text-sm font-bold tracking-widest hover:bg-white hover:text-gray-900 transition-all w-fit">
            {SLIDES[activeSlide].cta}
          </button>
        </div>

        <div className="absolute bottom-7 left-20 flex items-center gap-2.5 z-10">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeSlide ? 24 : 10,
                height: 10,
                background: i === activeSlide ? '#fff' : 'rgba(255,255,255,0.4)',
              }}
            />
          ))}
        </div>

        <div className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10" style={{ background: '#1d6dbf' }}>
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a2 2 0 110 4 2 2 0 010-4zm-1 5a1 1 0 00-1 1v4a1 1 0 00.553.894l2 1A1 1 0 0014 13v-4a1 1 0 00-1-1h-2zm0 8l-1 5h2l.5-2.5.5 2.5h2l-1-5H11z" />
          </svg>
        </div>
      </section>

      <section className="border-b border-gray-200 py-3 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center gap-1 mb-2.5">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-[10px] tracking-[0.2em] text-gray-400 px-4 uppercase font-medium">OPCIONES A UN CLIC</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="flex items-center justify-center gap-0 flex-wrap">
            {[
              { icon: <CircleIcon />, label: 'SERVICIOS A UN CLIC', arrow: false },
              { icon: <UploadIcon />, label: 'MEDIOS DE PAGO', arrow: false },
              { icon: <HandIcon />, label: 'TURNO VIRTUAL', arrow: true },
              { icon: <ClipboardIcon />, label: 'DIRECTORIO MÉDICO', arrow: false },
              { icon: <PersonIcon />, label: 'CERTIFICADO DE DISCAPACIDAD', arrow: false },
            ].map((item, i) => (
              <div key={item.label} className="flex items-center">
                {i > 0 && <span className="text-gray-300 mx-3">|</span>}
                <button className="flex items-center gap-1.5 text-gray-700 hover:text-teal-600 transition-colors py-1 group">
                  <span className="text-teal-600 w-4 h-4">{item.icon}</span>
                  <span className="text-[11px] font-bold tracking-wide">{item.label}</span>
                  {item.arrow && <span className="text-[10px] text-gray-500">▼</span>}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex">
        <div className="shrink-0 flex flex-col justify-center px-10 py-14" style={{ width: 280, background: '#dff0d8' }}>
          <div className="w-8 h-0.5 mb-5" style={{ background: '#06b6d4' }} />
          <h2 className="text-[#1e3a2f] text-3xl font-bold leading-snug mb-5">
            Conoce<br />la plataforma<br />educativa de<br />EPS SURA
          </h2>
          <p className="text-gray-600 text-sm text-center leading-relaxed">
            Te entregamos contenidos y experiencias de aprendizaje para cuidar tu salud y la de tu familia
          </p>
        </div>

        <div className="flex-1 flex gap-4 p-6 bg-white items-stretch">
          {EDU_CARDS.map((card, i) => (
            <EduCard key={i} card={card} />
          ))}
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-screen-xl mx-auto px-8 flex gap-10 items-center">
          <div className="shrink-0" style={{ width: 240 }}>
            <div className="w-8 h-0.5 mb-4" style={{ background: '#06b6d4' }} />
            <h2 className="text-gray-900 text-3xl font-bold leading-snug mb-4">Servicios a un clic</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-7">
              Realiza fácilmente tus procesos con EPS SURA. ¡Conoce aquí las soluciones virtuales que tenemos especialmente para ti!
            </p>
            <button className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-[11px] font-bold tracking-wider hover:bg-gray-700 transition-colors">
              VER TODOS LOS SERVICIOS
            </button>
          </div>

          <div className="flex-1 flex gap-4">
            {[
              { title: 'Citas médicas', Svg: DoctorConsultSVG },
              { title: 'Farmadomicilios: solicita tus medicamentos a domicilio', Svg: MedicineSVG },
              { title: 'Cambios de IPS', Svg: IPSDoctorSVG },
            ].map((s) => (
              <div key={s.title} className="flex-1 rounded-2xl border border-gray-200 p-5 hover:shadow-lg transition-shadow flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-4 leading-snug">{s.title}</h3>
                  <s.Svg />
                </div>
                <a href="#" className="text-gray-700 text-sm font-semibold flex items-center gap-1 mt-5 hover:text-teal-600 transition-colors group">
                  IR <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex min-h-[380px]" style={{ background: '#fef9dc' }}>
        <div className="flex-1 px-14 py-12">
          <h2 className="text-gray-900 text-2xl font-bold text-center mb-2">Todo sobre afiliaciones</h2>
          <div className="w-8 h-0.5 mx-auto mb-8" style={{ background: '#06b6d4' }} />

          <h3 className="text-gray-800 text-lg font-bold mb-4">Quiero afiliarme</h3>

          <div className="flex flex-col gap-3 mb-5 max-w-lg">
            {AFFIL_CARDS.map(card => (
              <div key={card.label} className="flex items-center bg-white rounded-xl overflow-hidden border border-yellow-200 hover:shadow-md transition-shadow cursor-pointer">
                <img src={card.img} alt={card.label} className="w-28 h-20 object-cover shrink-0" />
                <div className="flex-1 px-5 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-800">{card.label}</span>
                  <span className="text-gray-500 text-sm font-semibold">IR →</span>
                </div>
              </div>
            ))}
          </div>

          <a href="#" className="text-[13px] text-blue-700 underline underline-offset-2 hover:text-blue-900 flex items-center gap-1.5 transition-colors">
            <span>☝</span> Solicitar turno virtual de afiliación
          </a>
        </div>

        <div className="shrink-0 relative overflow-hidden" style={{ width: 340 }}>
          <img
            src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700"
            alt="Doctora EPS SURA"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.48)' }} />
          <div className="absolute top-1/4 right-4 w-32 h-32 rounded-full opacity-25" style={{ background: '#d4b400' }} />
          <div className="absolute bottom-0 inset-x-0 p-7 text-white z-10">
            <p className="font-bold text-base mb-2 leading-snug">Si te trasladaron a EPS SURA</p>
            <a href="#" className="text-sm font-bold tracking-wide hover:underline">INGRESA AQUÍ →</a>
          </div>
        </div>
      </section>
    </>
  )
}

function CircleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
    </svg>
  )
}
function UploadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M12 16V4m0 0l-4 4m4-4l4 4M4 20h16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function HandIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M18 11V7a2 2 0 00-4 0v4M14 11V6a2 2 0 00-4 0v5M10 11V8a2 2 0 00-4 0v8a6 6 0 0012 0v-5a2 2 0 00-4 0v3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="8" y="3" width="8" height="4" rx="1" />
      <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-2" strokeLinecap="round" />
    </svg>
  )
}
function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="7" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
    </svg>
  )
}
