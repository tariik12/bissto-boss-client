import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCard from "../../../../Hooks/useCard";


const FoodCard = ({item}) => {
    const {name,image,price,recipe,_id} = item;
    const {user} = useContext(AuthContext)
    const [, refetch] = useCard();
    const navigate = useNavigate()
    const location = useLocation()
    const handleAddToCard = () =>{
     
      if(user && user.email){
        const cardItem = {menuItemId: _id,name,image,price,email: user.email}
        fetch('http://localhost:5000/carts',{
          method:'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(cardItem)
        })
        .then(res => res.json())
        .then(data =>{
          if(data.insertedId){
            refetch() //reface card to update the number of items in the card
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'food added on the Card',
              showConfirmButton: false,
              timer: 1500
            })
          } 
        })
      }
      else{
        Swal.fire({
          title: 'Please login to order the food',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login Now !'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state:{from:location}})
          }
        })
      }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="h-96 w-full" src={image} alt="Shoes" /></figure>
  <p className="absolute top-0 right-0 mt-4 me-4 text-white bg-black">${price}</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleAddToCard(item)} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;