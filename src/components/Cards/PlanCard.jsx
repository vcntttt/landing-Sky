import { toast } from "sonner"

export default function PlanCard({plan}) {
  // ajustamos el formato de la descripcion para que salga como una lista, en la db esta guardado a proposito con comas entre medio de cada una.
    let descriptionItems = plan.description.split(',').map((car,index) => (
        <li key={index}>{car.trim()}</li>
    ))
  // Componente Card
  return (
    <li key={plan.id} 
    className="m-4 bg-slate-300 rounded-md text-black p-4 py-10 flex flex-col gap-2 justify-between">
    <h2 className="text-2xl py-2">{plan.title}</h2>
    <ul className="list-disc list-inside">
        {descriptionItems}
    </ul>
    <p className="font-bold my-2">Precio : ${plan.price}/mes</p>
    <button onClick={() => toast('Proximamente estaran habilitadas las compras')} 
    className="bg-slate-700 hover:bg-slate-900 text-white rounded-full p-2 w-full">Comprar</button>
  </li>
  )
}