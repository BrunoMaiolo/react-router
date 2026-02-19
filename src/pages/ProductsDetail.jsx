import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Dettaglio prodotto</h1>
      <p>ID prodotto: {id}</p>
    </div>
  );
}

export default ProductDetail;