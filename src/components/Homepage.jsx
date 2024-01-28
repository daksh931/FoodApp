import Navbar from "./Navbar";
import Foodcard from './Foodcard'
import data from "../../public/data";
import { useState } from "react";


export default function HomePage(){
    const foodtypesArray= ['Fast Food',"Indian","Sweets"];
    const [filterdData , setfilteredData] = useState(data);

    const searchFood = (e) => {
        const searchValue = e.target.value;

        const filteredDATA = data.filter( (item)=> 
        item.name.toLowerCase().includes(searchValue.toLowerCase()))

        setfilteredData(filteredDATA)
    }

    const buttonfilter = (value) =>{
        const filteredDATA = data.filter( (item)=> 
        item.foodtype.toLowerCase().includes(value.toLowerCase()))

        setfilteredData(filteredDATA)
    }

    return (
        <>
        <Navbar />
            <div  style={{backgroundColor : "rgb(50,51,52)" }} className="main font-bold text-xl min-h-44 sm:min-h-32" >
               
               <div className="image flex items-center pl-5 pt-5">
                    <img className="max-h-12" src="FoodAppImages/logo.jpg" ></img>
                    <div className="flex w-full sm:pr-16  justify-center sm:justify-end searchbar font-mono text-[18px] font-thin text-white ">
                       <input onChange={searchFood}
                        className=" px-3 border-white border-[0.1em] rounded-[5px]" style={{backgroundColor : "rgb(50,51,52)" }}
                                placeholder="Search Food...." ></input>
                    </div>
               </div>

               <div className=" flex flex-wrap foodtypes pt-5 pb-3 sm:pt-1 justify-center items-center w-full" >
                {
                    foodtypesArray.map( (value,i) => 
                    <button key={i} className=" mx-1 my-1 bg-black px-2 py-1 font-semibold rounded-md text-white"
                        onClick={() => buttonfilter(value)}
                        >{value}</button>
                    )
                }
                    
                    
               </div>
            </div>

            {/* middle Section */}
            <div className="middleSection  w-full  "
                style={{ backgroundImage: "url('/mainBackground.jpg')",
                         backgroundRepeat: "repeat-y",
                         backgroundPosition: "center",
                         backgroundSize: "100vw",
                       
                        }}>
                <div className="px-1 sm:px-10 w-full h-full backdrop-brightness-50 flex flex-wrap justify-center -z-10">
                    {filterdData.map( (value,i)=> 
                        <Foodcard key={i} data={value} />
                        // console.log(value)
                    )}
                </div>
            </div>
        </>
    )
}