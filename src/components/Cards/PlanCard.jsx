export default function PlanCard({plan}) {
    let descriptionItems = plan.description.split(',').map((car,index) => (
        <li key={index}>{car.trim()}</li>
    ))
  return (
    <li key={plan.id} 
    className="m-4 bg-slate-300 rounded-md text-black p-4 py-10 ">
    <h2 className="text-2xl py-2">{plan.title}</h2>
    <ul className="list-disc list-inside">
        {descriptionItems}
    </ul>
    <p>{plan.price}</p>
  </li>
  )
}