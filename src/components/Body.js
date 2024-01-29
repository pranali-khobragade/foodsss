import RestroCard from "./RestroCard";
//import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = ()=>{
    // local state variable=super powerful variable
    const [listOfRestaurants,setListOfRestaurants] =useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);

    const [searchText, setSearchText] = useState("");


    useEffect(()=>{
        fetchData();
       
    },[]);

    const fetchData = async ()=>{
        const data = await fetch
        (
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );

            const json = await data.json();
            console.log(json);
            setListOfRestaurants( json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurant( json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            //setListOfRestaurants(json?.data?.cards[4]?.data?.data?.cards);
    };
   // if(listOfRestaurants.length ===0){
      //  return <Shimmer/>;
   // }

   const onlineStatus =useOnlineStatus();
   if(onlineStatus === false) 
   return (
   <h1>
    looks like you are offline!! Please check your internet connection;
     </h1>
   );
      
    return listOfRestaurants.length ===0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input
                     type="text" 
                     className="border border-solid border-black" 
                     value={searchText} 
                     onChange={(e)=>{
                        setSearchText(e.target.value);
                     }}
                     />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                     onClick={()=>{
                        //filter the restaurant cards and update ui
                        //search text
                        console.log(searchText);
                        const filteredRestaurant=listOfRestaurants.filter(
                            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <div className="px-4 py-2 flex items-center">
                <button 
                className="px-4 py-2 bg-gray-100 rounded-lg" 
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                    
                        (res)=>res.info.avgRating > 4
                        );
                        setListOfRestaurants(filteredList);
            }}>
                     Top Rated Restaurants 
                     </button>
                     </div>    
                </div>
            <div className="flex flex-wrap">
           
           {
            filteredRestaurant.map((restaurant)=>(
                <Link
                 key={restaurant.info.id}
                  to={"/restaurants/" + restaurant.info.id}
                  > 
                   <RestroCard  resData= {restaurant}/></Link>
            ))
           }
          
          
           </div>
        </div>
    );
 };
 export default Body;