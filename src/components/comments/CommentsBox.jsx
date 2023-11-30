import Comment from "./Comment";

export default function CommentsBox({data, update}) {
  return (
    <main className="flex flex-col gap-2 mx-auto my-18 w-full">
      {data.length >= 0 ? (
        data.map((item) => (
          <Comment key={item.id} item={item} update={update}/>
        ))
      ): (
        <p>No hay comentarios</p>
      )}
    </main>
  )
}