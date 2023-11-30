import { useState, useEffect } from "react"

export default function AboutPage() {
    const [githubUser, setGithubUser] = useState({})
    useEffect(() => {
       async function getGithubUser() {
        try {
            const res = await fetch(`https://api.github.com/users/vcntttt`);
            const data = await res.json();
            setGithubUser(data);
        } catch (error) {
            console.error(error)
        }
       }
       getGithubUser()
    },[])
    return (
      <main className="m-4 flex gap-2 flex-col max-w-7xl justify-center mx-auto">
        <section id="about">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 m-8">
            <article id="teamHistory" className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">Equipo</h2>
                <div
                 className="bg-slate-800 text-white rounded-lg p-4 flex items-center gap-4">
                    <img id="profile-avatar" src={`${githubUser.avatar_url}`} alt="Profile Avatar" width="100"/>
                    <div>
                        <h2>Vicente Rivera - Fundador</h2>
                        <h2 id="profile-username">Github: <span className="font-bold">{githubUser.login}</span></h2>
                        <h2 id="profile-name">{githubUser.name}</h2>
                        <a id="profile-link" href={`${githubUser.html_url}`} target="_blank" rel="noreferrer" className="underline">View on GitHub</a>
                    </div>
                </div>
                <h2 className="text-2xl font-semibold">Historia</h2>
                <p>SkyInventory fue fundada en 2010 por un grupo de profesionales con amplia experiencia en tecnología, ventas y gestión de inventario. Desde el principio, nuestra misión ha sido clara: simplificar y optimizar la gestión de inventario y puntos de venta para minoristas y empresas de e-commerce, ayudándoles a crecer y prosperar en un mercado cada vez más competitivo.</p>
                <p>A lo largo de los años, hemos trabajado incansablemente para desarrollar y perfeccionar nuestro software, asegurándonos de que siempre esté a la vanguardia de la tecnología y sea altamente confiable y fácil de usar. Hemos crecido constantemente, expandiendo nuestra base de clientes y mejorando continuamente nuestros servicios. Hoy, nos enorgullece decir que hemos ayudado a cientos de empresas a superar sus desafíos y alcanzar sus objetivos.</p>
            </article>
            <article id="mision" className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">Misión</h2>
                <p>Nuestra misión es proporcionar soluciones de gestión de inventario y puntos de venta basadas en la nube, fáciles de usar, confiables y altamente eficaces, que ayuden a nuestros clientes a optimizar sus operaciones, maximizar su rentabilidad y tener éxito en el mercado actual.</p>
                <h2 className="text-2xl font-semibold">Visión</h2>
                <p>Nuestra visión es ser el proveedor líder de software de gestión de inventario y puntos de venta para minoristas y empresas de e-commerce en todo el mundo. Queremos ser conocidos por la calidad y confiabilidad de nuestros productos, así como por nuestro compromiso con la satisfacción y el éxito de nuestros clientes.</p>
            </article>
        </div>
      </section>
      </main>
    )
}