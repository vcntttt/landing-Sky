export default function ContactPage() {
    return (
      <main className="m-4 flex gap-2 flex-col max-w-7xl justify-center mx-auto">
        <h1>ContactPage</h1>
        <section id="contact" className="bg-slate-800 m-8 text-white p-6 rounded-md">
            <h2>Contacto</h2>
            <form id="contact-form" className="flex flex-col gap-4">
                <label htmlFor="name">Nombre</label>
                <input id="name" type="text" placeholder="Nombre"/>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Email"/>
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" cols="30" rows="10" placeholder="Mensaje"></textarea>
                <button type="submit" className="bg-teal-500 text-white py-1 rounded-lg w-full hover:bg-blue-600">Enviar</button>
            </form>
        </section>
      </main>
    )
  }
  