import { useState,useEffect } from 'react'
import reactLogo from '/src/assets/react.svg'
import viteLogo from '/vite.svg'
// import '/src/app.css'
// import from "/src/assets/images/image-waffle-thumbnail.jpg"
import Card from './componets/card'
import Cart from './componets/cart'
import PlaceOrder from './componets/placeorder'
PlaceOrder
function App() {
  const [count, setCount] = useState(0)
  const menu=[
    {
       "image": {
            "thumbnail": "/src/assets/images/image-waffle-thumbnail.jpg",
            "mobile": "/src/assets/images/image-waffle-mobile.jpg",
            "tablet": "/src/assets/images/image-waffle-tablet.jpg",
            "desktop": "/src/assets/images/image-waffle-desktop.jpg"
       },
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50,
       "quantity":0,
    },
    {
        "image": {
            "thumbnail": "/src/assets/images/image-creme-brulee-thumbnail.jpg",
            "mobile": "/src/assets/images/image-creme-brulee-mobile.jpg",
            "tablet": "/src/assets/images/image-creme-brulee-tablet.jpg",
            "desktop": "/src/assets/images/image-creme-brulee-desktop.jpg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00,
        "quantity":0,
     },
     {
        "image": {
            "thumbnail": "/src/assets/images/image-macaron-thumbnail.jpg",
            "mobile": "/src/assets/images/image-macaron-mobile.jpg",
            "tablet": "/src/assets/images/image-macaron-tablet.jpg",
            "desktop": "/src/assets/images/image-macaron-desktop.jpg"
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00,
        "quantity":0,
     },
     {
        "image": {
            "thumbnail": "/src/assets/images/image-tiramisu-thumbnail.jpg",
            "mobile": "/src/assets/images/image-tiramisu-mobile.jpg",
            "tablet": "/src/assets/images/image-tiramisu-tablet.jpg",
            "desktop": "/src/assets/images/image-tiramisu-desktop.jpg"
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50,
        "quantity":0,
     },
     {
        "image": {
            "thumbnail": "/src/assets/images/image-baklava-thumbnail.jpg",
            "mobile": "/src/assets/images/image-baklava-mobile.jpg",
            "tablet": "/src/assets/images/image-baklava-tablet.jpg",
            "desktop": "/src/assets/images/image-baklava-desktop.jpg"
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00,
        "quantity":0,
     },
     {
        "image": {
            "thumbnail": "/src/assets/images/image-meringue-thumbnail.jpg",
            "mobile": "/src/assets/images/image-meringue-mobile.jpg",
            "tablet": "/src/assets/images/image-meringue-tablet.jpg",
            "desktop": "/src/assets/images/image-meringue-desktop.jpg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00,
        "quantity":0,
     },
     {
        "image": {
            "thumbnail": "/src/assets/images/image-cake-thumbnail.jpg",
            "mobile": "/src/assets/images/image-cake-mobile.jpg",
            "tablet": "/src/assets/images/image-cake-tablet.jpg",
            "desktop": "/src/assets/images/image-cake-desktop.jpg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50,
        "quantity":0,
     },
     {
        "image": {
            "thumbnail": "/src/assets/images/image-brownie-thumbnail.jpg",
            "mobile": "/src/assets/images/image-brownie-mobile.jpg",
            "tablet": "/src/assets/images/image-brownie-tablet.jpg",
            "desktop": "/src/assets/images/image-brownie-desktop.jpg"
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50,
        "quantity":0,
     },
     {
        "image": {
            "thumbnail": "/src/assets/images/image-panna-cotta-thumbnail.jpg",
            "mobile": "/src/assets/images/image-panna-cotta-mobile.jpg",
            "tablet": "/src/assets/images/image-panna-cotta-tablet.jpg",
            "desktop": "/src/assets/images/image-panna-cotta-desktop.jpg"
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50,
        "quantity":0,
     }
]
//  console.log(menu[0].name)
//  console.log(menu[0].price)
//  console.log(menu[0].category)
 const [screenWidth, setScreenWidth] = useState(window.innerWidth);
 const [screenType,setScreenType]=useState("")
//  console.log(menu[0].image[screenType])
    useEffect(()=>{
      if (screenWidth>300 && screenWidth<400){setScreenType("mobile")}
      else if (screenWidth>400 && screenWidth<800){setScreenType("tablet")}
      else if  (screenWidth>800){setScreenType("desktop")}
      // console.log(screenWidth);
    },[screenWidth])
    useEffect(() => {
      const updateWidth = () => {
        setScreenWidth(window.innerWidth);  
      };
  
      window.addEventListener('resize', updateWidth);
  
      // Cleanup the event listener
      return () => {
        window.removeEventListener('resize', updateWidth);
      };
    }, []);
    let [orderPlacded,setOrderplacded]=useState(false)
    const placeorder=()=>{
        setOrderplacded(true)
        console.log("confirmd button clicked",orderPladed);
        
    }
    const startNeworder=()=>{
      setOrderplacded(false)
    }
  return (
    <>
     <div className={` bg-pink-200 w-full min-h-screen  ${orderPlacded?"brightness-50 pointer-events-none focus-none z-0":"pointer-events-auto focus-visible z-10"}`}>
        <h1 className='font-black text-4xl text-left p-2 md:ml-8 '>Desserts</h1>
        {/* <img src="/src/assets/images/image-waffle-thumbnail.jpg" alt="asdfg" /> */}
        <img src="" alt="" />
        <div className=" md:flex ">

        <div className="md:flex flex-wrap justify-center gap-4 md:w-3/5 lg:w-4/5 ">
        {
          menu.map((x)=>
            <Card key={x.name} title={x.name} price={x.price} description={x.category} imageUrl={x.image[screenType]} item={x} /> )
        }
        </div>
         <Cart buttonclick={placeorder}></Cart>
        </div>
     </div>
      {orderPlacded?<PlaceOrder buttonclick={startNeworder}></PlaceOrder>:""}
    </>
  )
}

export default App
