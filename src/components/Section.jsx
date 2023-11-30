// Componente de seccion con estilos predeterminados y con opcion de personalizarlos
export default function Section({children, style}) {
  return (
        <section className={`md:min-h-[80vh] h-auto flex flex-col ${style}`}>
        {children}
        </section>
  )
}
