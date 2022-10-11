import "./Main.scss";
import { data } from "../../helper/data";
import Card from "./Card";

export default function Main() {
  console.log(data);
  return (
    <div className="card-container">
      {data.map((item) => {
        const { id, image, title, desc } = item;
        return (
          <Card key={item.id} id={id} image={image} title={title} desc={desc} />
        );
      })}
    </div>
  );
}
