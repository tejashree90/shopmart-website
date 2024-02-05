import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { BsFillCartCheckFill } from 'react-icons/bs';



const Navbar = ({setData,cart}) => {
  // console.log(useLocation())
  const location = useLocation()
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")

  const filterByCategory = (category)=>{
    const element = items.filter((product)=>product.category === category)
    // console.log(element)
    setData(element)
  }

  const filterByPrice = (price) =>{
    const element = items.filter((product)=>product.price >=price)
    setData(element)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }

  const userName = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () =>{
    localStorage.removeItem("loggedin");
    navigate("/Login");
  }

  return (
    <>
    <header className='sticky-top'>
        <div className="nav-bar">
            <Link to={'/'} className="brand">ShopMart</Link>

            <form
            // onClick={handleSubmit} 
            onSubmit={handleSubmit}
             className="search-bar">
                <input 
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                type="text"
                 placeholder='Search Products'
                  />
            </form>

           
            <Link type="button" className="btn btn-light login" to="/Login">LogIn</Link>
            <Link type="button" className="btn btn-light signup" to="/Signup">SignUp</Link>
            <button onClick={handleLogout} type="button" className="btn btn-light ml-2 ">Logout</button>

            <Link to={'/cart'} className="cart">
            <button type="button" className="btn btn-primary position-relative">
  <BsFillCartCheckFill style={{fontSize:'1.5rem'}} />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
            </Link>
        </div>

        {
          location.pathname == '/' && (
            <div className="nav-bar-item">
            <div className="items"><i class="fa-solid fa-filter"></i> Filter</div>
            <div 
            onClick={()=>setData(items)}
            className="items"><i class="fa-solid fa-filter-circle-xmark"></i>{" "}No Filter</div>
            <div 
            onClick={()=>filterByCategory('mobiles')}
             className="items">Mobiles</div>
            <div
            onClick={()=>filterByCategory('laptops')}
    
             className="items">Laptops</div>
            <div
            onClick={()=>filterByCategory('tablets')}
    
             className="items">Tablets</div>
     
            
            </div>
          )
        }

      
    </header>
    </>
  )
}

export default Navbar