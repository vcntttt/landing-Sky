// import { useAuth } from "../context/AuthContext"
import Section from "../components/Section";
export default function HomePage() {
  // const {user} = useAuth()

  return (
    <main className="m-4 flex gap-2 flex-col max-w-7xl justify-center mx-auto">
      <Section>
        <h2 className="text-3xl font-semibold">Sky Inventory</h2>
        <p className="text-slate-100">
          Inventario Optimizado, Éxito Multiplicado: Tus ventas en Buenas Manos
        </p>
        <img
          id="logo"
          src="logo-main.png"
          alt="logoPrincipal"
          width="342"
          height="330"
          className="hover:transform hover:scale-125 hover:transition hover:duration-300 hover:ease-in-out"
        />
      </Section>
      <Section>
        <h2 className="text-2xl font-semibold text-center">
          Gestiona, Optimiza, Crece: Todo es posible con SkyInventory.
        </h2>
        <div className="grid grid-cols-2 justify-center mx-auto">
          <div className="mx-4">
            <h4 className="text-2xl font-normal mb-4">¿Qué Hacemos?</h4>
            <p>
              SkyInventory es una solución integral basada en la nube, creada
              específicamente para gestionar inventarios y puntos de venta de
              minoristas y negocios e-commerce. Nuestra misión es simplificar la
              administración de tus inventarios y ventas, optimizando tus
              operaciones y ayudándote a enfocarte en lo que realmente importa:
              hacer crecer tu negocio.
            </p>
          </div>
          <aside className="flex justify-end">
            <img src="asideImg1.png" alt="img1" className="object-cover" />
          </aside>
        </div>
      </Section>
      <Section>
        <div className="grid grid-rows-[1fr,2fr,10fr,1fr] items-center gap-2">
          <h1 className="text-3xl">¿Como lo hacemos?</h1>
          <div className="grid grid-cols-2">
            <ul className="ml-4 list-disc">
              <li>Gestión de Inventario en Tiempo Real</li>
              <li>Integración con Plataformas e-commerce</li>
              <li>Herramientas Analíticas Avanzadas</li>
            </ul>
            <ul className="ml-4 list-disc">
              <li>Gestión de Multiples Ubicaciones</li>
              <li>Acceso Movil</li>
              <li>Faltaria uno</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <img src="ejemplo.png" alt="ejemplo" />
          </div>
          <a
            id="btn"
            className="bg-teal-500 px-4 py-2 text-white text-center hover:bg-blue-600 "
            href="products.html"
          >
            Ver Servicios
          </a>
        </div>
      </Section>
      <Section>
      <div className="grid grid-rows-[1fr,auto,1fr]">
        <h2 className="text-2xl my-2">¿Por qué elegir SkyInventory?</h2>
        <div className="grid grid-cols-2 items-center m-4">
          <ul className="ml-4 list-disc">
            <li>Optimización de la Reposición de Productos</li>
            <li>Prevención de la Sobreventa</li>
            <li>Maximización de la Rentabilidad</li>
            <li>Gestión Simplificada de Operaciones</li>
          </ul>
          <aside>
            <img src="persona-grafiquito.jpeg" alt="img2" />
          </aside>
        </div>
      </div>
      </Section>
    </main>
  );
}