// boton para enviar formularios

export default function SubmitBtn() {
  return (
    <button
      type="submit"
      className = {`bg-teal-800 hover:bg-teal-600
      md:py-2 md:px-4 py-1 px-3 hover:bg-onahau-600 text-white rounded`}
    >
      Enviar
    </button>
  );
}