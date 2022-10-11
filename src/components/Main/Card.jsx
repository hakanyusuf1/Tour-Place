export default function Card({ id, image, title, desc }) {
  return (
    <div className="cards">
      <h1>{title}</h1>

      <img src={image} alt="" />

      <div className="card-over">
        <p>{desc}</p>
      </div>
    </div>
  );
}
