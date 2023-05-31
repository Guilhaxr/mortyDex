import "./css/card.css";
import { FaHeartbeat, FaSkullCrossbones, FaUserSecret } from "react-icons/fa";

const card = ({ name, gender, image, species, status }) => {
  return (
    <div className="container_card">
      <div>
        <img className="card_image" alt={name} src={image} />
        <h4 style={{ textAlign: "center" }}>{name}</h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <div className="status">{status}</div>
          <div style={{ paddingLeft: "15px" }}>
            {" "}
            {status === "Alive" ? (
              <FaHeartbeat />
            ) : status === "Dead" ? (
              <FaSkullCrossbones />
            ) : (
              <FaUserSecret />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
