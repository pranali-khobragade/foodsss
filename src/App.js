import React,{lazy,Suspense} from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
//import Grocery from "./components/Grocery";

  
      
/*const resObj ={
"info": {
    "id": "53868",
    "name": "KFC",
    "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
    "locality": "Sitabuldi",
    "areaName": "Sitabuldi",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Burgers",
      "Biryani",
      "American",
      "Snacks",
      "Fast Food"
    ],
    "avgRating": 4.2,
    "parentId": "547",
    "avgRatingString": "4.2",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 23,
      "lastMileTravel": 1.3,
      "serviceability": "SERVICEABLE",
      "slaString": "23 mins",
      "lastMileTravelString": "1.3 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-22 03:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/kfc-sitabuldi-nagpur-53868",
    "type": "WEBLINK"
  },


  "info": {
    "id": "53484",
    "name": "Haldiram's Restaurant",
    "cloudinaryImageId": "1abb89624b491497c8cff182d95ac457",
    "locality": "Sitabuldi",
    "areaName": "Sitabuldi",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "North Indian",
      "South Indian",
      "Biryani",
      "Chinese",
      "Chaat",
      "Thalis",
      "Bakery",
      "Sweets",
      "Beverages",
      "Desserts",
      "Snacks",
      "Continental",
      "Momos",
      "Pastas",
      "Burgers"
    ],
    "avgRating": 4.4,
    "parentId": "351771",
    "avgRatingString": "4.4",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 22,
      "lastMileTravel": 1.4,
      "serviceability": "SERVICEABLE",
      "slaString": "22 mins",
      "lastMileTravelString": "1.4 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-21 23:30:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/haldirams-restaurant-sitabuldi-nagpur-53484",
    "type": "WEBLINK"
  }
};*/

      
 

 
    const Grocery = lazy(()=>import ("./components/Grocery")); 
            
             
            
      
const AppLayout =()=>{
    return(
        <div className="app">

        <Header/>
        <Outlet/>
        </div>
    );
};



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children : [
      {
        path: "/",
        element:  <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>,
      },
    ],
    errorElement: <Error/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router ={appRouter}/>);