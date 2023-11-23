
export default function Card({children}) {
  return (
    <div className="bg-gray-700 p-4 rounded flex flex-col gap-2">
        {children}
    </div>
  )
}