// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { getPizzaById } from "../actions/pizzaAction";

// const EditPizza = () => {
//   const dispatch = useDispatch();
//   const { pizzaId } = useParams();
//   const getPizzaByState = useSelector((state) => state.getPizzaByIdReducer);
//   const { loading, error, pizza } = getPizzaByState; // Correct variable name

//   const [name, setName] = useState("");
//   const [smallPrice, setSmallPrice] = useState("");
//   const [mediumPrice, setMediumPrice] = useState("");
//   const [largePrice, setLargePrice] = useState("");
//   const [image, setImage] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");

//   useEffect(() => {
//     dispatch(getPizzaById(pizzaId));
//   }, [dispatch, pizzaId]);

//   useEffect(() => {
//     if (pizza) {
//       setName(pizza.name);
//     }
//   }, [pizza]); // Use the pizza state from the store

//   return <div>{loading ? "Loading..." : name}</div>;
// };

// export default EditPizza;




import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPizzaById } from "../actions/pizzaAction";

const EditPizza = () => {
  const dispatch = useDispatch();
  const { pizzaId } = useParams();
  console.log(pizzaId,'pizzaidddddddddddddd');
  const getPizzaByIdState = useSelector((state) => state.getPizzaByIdReducer);
  const { loading, error, pizza } = getPizzaByIdState;
  console.log(getPizzaByIdState,'getPizzaByIdStategetPizzaByIdStategetPizzaByIdState');

  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [largePrice, setLargePrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    dispatch(getPizzaById(pizzaId));
  }, [dispatch, pizzaId]);

  useEffect(() => {
    if (pizza) {
      setName(pizza.name || "");
      // Set other fields similarly based on the structure of your pizza object
    }
  }, [pizza]);

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          {/* Add similar input fields for other pizza details */}
        </>
      )}
    </div>
  );
};

export default EditPizza;

