function Card({ title, body, imageUrl, borderColor }) {
  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg m-4 border-2 ${borderColor} h-fit`}
    >
      <img className="w-full" src={imageUrl} alt="Card cap" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white text-center">{title}</div>
        <p className="text-gray-700 text-base">{body}</p>
      </div>
    </div>
  );
}

export default Card;
