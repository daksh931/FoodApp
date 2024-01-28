import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Foodcard(props){

    console.log()
    return(
        <>
            <div className="main p-5 py-8">



                <div className="card max-w-72 min-h-80 rounded-lg p-2 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg  z-0">
                    <div className="cardbackground flex flex-col justify-center items-center w-full z-0">
                        
                        {/* image  */}
                        <div className="picture mt-3 flex justify-center items-center max-w-32 max-h-32 rounded-full bg-white bg-cover overflow-hidden z-0">
                            < LazyLoadImage className=" z-0 max-w-48 max-h-48 " src={`FoodAppImages/${props.data.id}.jpg`} />
                        </div>
                        <div className="text text-white pt-3 ">
                            {/* title */}
                            <h2 className="font-medium text-xl text-center"> {props.data.name} </h2>
                            
                            {/* description */}
                            <p className="px-3 pt-3"> {props.data.description}</p>
                            
                            {/* price */}
                            <div className="button flex justify-end pb-2 pr-2" >    
                            <button className="  bg-slate-900 px-5 py-[3px] rounded-md border-white border-[1px]"> 
                                {props.data.price}
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}