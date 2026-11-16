import { useEffect, useState } from 'react'

const API_URL = 'http://localhost:8080/api/noticias/todas'
const INTERVALO_MS = 5000

type Categoria = {
  id: number
  nombre: string
}

type Noticia = {
  id: number
  titulo: string
  resumen: string | null
  imagenUrl: string | null
  estado: 'BORRADOR' | 'PUBLICADA' | 'ARCHIVADA'
  categorias: Categoria[]
}

export default function NoticiasPage() {
  const [noticias, setNoticias] = useState<Noticia[]>([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let activo = true

    async function cargar() {
      try {
        const respuesta = await fetch(API_URL)
        if (!respuesta.ok) {
          throw new Error(`El servidor respondió ${respuesta.status}`)
        }
        const datos: Noticia[] = await respuesta.json()
        if (activo) {
          setNoticias(datos)
          setError(null)
        }
      } catch {
        if (activo) {
          setError('No se pudieron cargar las noticias. Verifica que el back esté levantado en el puerto 8080.')
        }
      } finally {
        if (activo) {
          setCargando(false)
        }
      }
    }

    cargar()
    const intervalo = setInterval(cargar, INTERVALO_MS)

    return () => {
      activo = false
      clearInterval(intervalo)
    }
  }, [])

  return (
    <section className="max-w-screen-xl mx-auto px-6 py-10">
      <h1 className="text-gray-900 text-2xl font-bold mb-8">Noticias</h1>
      <div className="flex gap-6">

        <div className="hidden lg:flex shrink-0 items-start justify-center bg-gray-100 border border-dashed border-gray-300 rounded-lg" style={{ width: 200, height: 600 }}>
          <span className="text-gray-400 text-xs self-center">Espacio publicitario 300x600</span>
        </div>

        <div className="flex-1 flex flex-col gap-5">
          {cargando && <p className="text-gray-500 text-sm">Cargando noticias…</p>}

          {error && <p className="text-red-600 text-sm">{error}</p>}

          {!cargando && !error && noticias.length === 0 && (
            <p className="text-gray-500 text-sm">No hay noticias para mostrar.</p>
          )}

          {noticias.map((n) => (
            <div key={n.id} className="flex gap-4 border-b border-gray-200 pb-5">
              {n.imagenUrl ? (
                <img src={n.imagenUrl} alt={n.titulo} className="w-40 h-28 object-cover rounded-lg shrink-0" />
              ) : (
                <div className="w-40 h-28 rounded-lg shrink-0 bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
                  Sin imagen
                </div>
              )}
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-teal-600 uppercase tracking-wide">
                    {n.categorias.map((c) => c.nombre).join(' · ') || 'Sin categoría'}
                  </span>
                  {n.estado !== 'PUBLICADA' && (
                    <span className="text-[10px] font-semibold text-gray-600 bg-gray-200 rounded px-1.5 py-0.5 uppercase">
                      {n.estado}
                    </span>
                  )}
                </div>
                <h3 className="text-gray-900 font-semibold text-base mt-1 mb-1">{n.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{n.resumen}</p>
                <a href="#" className="text-gray-700 text-sm font-semibold flex items-center gap-1 mt-2 hover:text-teal-600">
                  Leer más →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex shrink-0 items-start justify-center bg-gray-100 border border-dashed border-gray-300 rounded-lg" style={{ width: 200, height: 600 }}>
          <span className="text-gray-400 text-xs self-center">Espacio publicitario 300x600</span>
        </div>

      </div>
    </section>
  )
}
