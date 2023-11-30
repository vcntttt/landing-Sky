import Comment from "./Comment";

export default function CommentsBox({data}) {
  return (
    <div>
      {data.lenght >= 0 ? (
        data.map((item) => (
          <Comment key={item.id} item={item} />
        ))
      ): (
        <p>No hay comentarios</p>
      )}
    </div>
  )
}