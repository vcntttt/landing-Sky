import { NavLink } from "react-router-dom";
import Section from "../components/Section";
export default function HomePage() {
  return (
    <main className="m-4 flex gap-2 flex-col max-w-7xl mx-auto">
      <Section style={"items-center justify-center min-h-screen"}>
        <h2 className="text-3xl font-semibold">Sky Inventory</h2>
        <p className="text-slate-100 text-center">
          Inventario Optimizado, Éxito Multiplicado: Tus ventas en Buenas Manos
        </p>
        <img
          id="logo"
          src="logo-main.png"
          alt="logoPrincipal"
          width="342"
          height="330"
          className="hover:transform hover:scale-125 hover:transition hover:duration-300 hover:ease-in-out md:scale-100 scale-75"
        />
      </Section>
      <Section style="my-16">
        <h2 className="text-2xl font-semibold text-center pb-10">
          Gestiona, Optimiza, Crece: Todo es posible con SkyInventory.
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 justify-center mx-auto">
          <div className="mx-4">
            <h4 className="text-2xl font-normal mb-4">¿Qué Hacemos?</h4>
            <p>
              SkyInventory es una solución integral basada en la nube, creada
              específicamente para gestionar inventarios y puntos de venta de
              minoristas y negocios e-commerce. Nuestra misión es simplificar la
              administración de tus inventarios y ventas, optimizando tus
              operaciones y ayudándote a enfocarte en lo que realmente importa:
              Hacer crecer tu negocio.
            </p>
          </div>
          <aside className="flex justify-end">
            <img src="asideImg1.png" alt="img1" className="object-cover" />
          </aside>
        </div>
      </Section>
      <Section style="my-16">
        <div className="grid md:grid-rows-[1fr,2fr,10fr,1fr] grid-rows-3 items-center gap-2">
          <h1 className="text-3xl">¿Como lo hacemos?</h1>
          <div className="grid md:grid-cols-2 grid-cols-1">
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
            <img src="ejemplo.png" alt="ejemplo" className="md:flex hidden" />
          <NavLink to="/products"
          className={'bg-teal-700 hover:bg-teal-900 p-4 text-center text-white rounded-md w-4/6 mx-auto'}
          >
            Ver Servicios
          </NavLink>
        </div>
      </Section>
      <Section style="my-16">
      <div className="grid grid-rows-[1fr,auto,1fr]">
        <h2 className="md:text-4xl text-3xl md:my-2 mb-6 md:text-left text-center">¿Por qué elegir SkyInventory?</h2>
        <div className="grid md:grid-cols-2 grid-cols-1items-center m-4 gap-8">
          <section className="[&>article>h2]:underline [&>article>h2]:font-semibold [&>article>h2]:text-2xl [&>article]:flex [&>article]:flex-col [&>article]:gap-4 
          flex flex-col gap-4">
          <article>
            <h2>Optimizacion de la Reposicion de Productos</h2>
            <p>
              Con SkyInventory, garantizamos que su inventario este siempre en el lugar adecuado en el momento adecuado. Nuestra tecnología avanzada le permite tomar decisiones informadas sobre la reposición de productos, evitando la perdida de ventas debido a la falta de stock o el exceso de inventario
            </p>
          </article>
          <article>
            <h2>Prevencion de la Sobreventa</h2>
            <p>
              Evite la pesadilla de la sobreventa con SkyInventory. Nuestra plataforma le ayuda a mantener un control preciso de las unidades, evitando situaciones incomodas y perdida de clientes debido a la falta de disponibilidad de productos.
            </p>
          </article>
          <article>
            <h2>Maximizacion de la Rentabilidad</h2>
            <p>
              SkyInventory no solo se enfoca en administrar su inventario, sino que tambie lo ayuda a maximizar sus margenes de beneficio. Nuestra inteligencia empresarial y analisis de datos le brindan la informacion valiosa para tomar decisiones estratregicas y rentables.
            </p>
          </article>
          <article>
            <h2>Gestion Simplificada de Operaciones</h2>
            <p>
              Hacemos que la gestion de su inventario sea mas sencilla que nunca. Con una interfaz facil de usar y herramientas intuitivas. SkyInventory simplifica sus operaciones, lo que le permite enfocarse en hacer crecer su negocio en lugar de preocuparse por la logistica.
            </p>
          </article>
          <p> Elija SkyInventory para aprovechar estas ventajas y llevar su gestion de inventario al siguiente nivel.</p>
          </section>
          <aside className="md:flex hidden md:justify-end">
            <img src="persona-grafiquito.jpeg" alt="img2" />
          </aside>
        </div>
      </div>
      </Section>
    </main>
  );
}