import { useState } from "react"
import Card from "../components/Card"
export default function HomePage() {
    const [name, setName] = useState('invitado')

    const handleSubmit = (e) => {
        e.preventDefault()
        setName(e.target[0].value)
    }

  return (
    <div className="m-10 flex gap-2 flex-col max-w-4xl justify-center mx-auto">
        <h1 className="text-4xl">Hola, {name}</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
            <label htmlFor=""> Inserte su Nombre:</label>
            <input type="text" />
            <button type="submit" className="p-2 bg-slate-500 hover:bg-slate-700">Ingresar</button>
        </form>
        <h1 className="text-xl">No cache lo de que se tenga que relacionar con mis proyectos asi que puse autitos:</h1>
        <Card>
            <h1 className="text-xl font-semibold">Tesla Model S</h1>
            <img src="https://img.remediosdigitales.com/55c7f7/tesla-model-s-2021/840_560.jpeg" alt="" />
            <p>
                El Tesla Model S es un sedan de lujo que ofrece comodidad, seguridad y un rendimiento impresionante, con una aceleracion que va de 0 a 96 km/h en 2.3 segundos.
            </p>
        </Card>
        <Card>
            <h1 className="text-xl font-semibold">Tesla Model 3</h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg" alt="" />
            <p>
                El Tesla Model 3 se presenta como una opcion mas asequible dentro de la linea tesla, sin comprometer la seguridad, capaz de soportar hasta cuatro veces su peso en pruebas de choque. Aunque su aceleracion es ligeramente inferior al Model S, aun impresiona con 3.2 segundos de 0 a 96 km/h y ofrece una autonomia de entre 400 y 515 km.
            </p>
        </Card>
        <Card>
            <h1 className="text-xl font-semibold">Tesla Model X</h1>
            <img src="https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/6584/section-hero.jpg" alt="" />
            <p>El Tesla Model X es un SUV que combina espacio y potencia, ofreciento hasta 7 asientos para adultors y una aceleracion de 0 a 96 km/h en 2.6 segundos, convirtiendolo en uno de los SUV mas rapidos del mundo, Ademas posee puertas de ala de gaviota y una autonomia de hasta 560 kilometros.</p>
        </Card>
        <Card>
            <img src="https://hips.hearstapps.com/hmg-prod/images/captura-de-pantalla-2022-08-12-a-las-13-11-19-1660302804.jpg?resize=980:*" alt="" />
            <h1 className="text-xl font-semibold">Tesla Model Y</h1>
            <p>Por ultimo el Tesla Model Y mantiene la versatilidad de la opcion de 7 asientos y es adecuado para una variedad de terrenos y condiciones climaticas. Con una aceleracion de 0 a 96 km/h en 3.5 segundos y una autonomia de 505 kilometros.</p>
        </Card>
        <Card>
            <h1 className="text-xl font-semibold">Conclusión</h1>
            <p>En conclusión, quiero un tesla</p>
        </Card>
    </div>
  )
}