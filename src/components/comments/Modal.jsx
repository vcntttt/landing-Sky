// tipica ventana modal

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
    return (
      <div>
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/80 text-center">
          <div className={`bg-[#2E3238] w-full md:w-2/3 lg:w-2/6 rounded-lg p-4`}>
            {children}
              <button className="bg-cyan-500 hover:bg-cyan-700 text-white rounded-lg py-1 w-4/6 mt-4" onClick={onClose}>Cerrar</button>          
          </div>
        </div>
      </div>
    )
  }