import { Button, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const CartIndicator = () => {
  const navigate = useNavigate();

  console.log("CartIndicator render");
  // useSelector si aspetta che gli venga passata una funzione come argomento
  // in questa funzione ci possiamo aspettare l'intero stato globale dal suo parametro (arriverà sempre)
  // e dentro alla funzione possiamo estrarre la porzione di stato (quindi di dato) che ci interessa
  // in questo caso raggiungiamo l'array di state.cart.content e ne estraiamo direttamente il valore di length che verrà ritornato dalla funzione
  // qualsisi dato ritornato dalla funzione interna allo useSelector verrà raccolto dalla variabile alla sua sinistra
  const cartLength = useSelector((state) => state.cart.content.length);
  // quindi da questo punto in poi, ci possiamo aspettare di avere un valore di cartLength sempre aggiornato che
  // rifletta il numero effettivo di elementi nel carrello in ogni momento!

  // usare useSelector vi garantisce che ad ogni cambio di stato il componente subisca un re-render,
  // dando la possibilità al dato di cambiare nell'interfaccia
  return (
    <div className="ms-auto text-end mt-3 mb-4">
      <Button color="primary" onClick={() => navigate("/cart")}>
        <FaShoppingCart />
        <span className="ms-2">{cartLength}</span>
      </Button>
    </div>
  );
};

export default CartIndicator;
