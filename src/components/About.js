import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

    constructor(props){
        super(props);

       // console.log("Parent Constructor");
    }

    componentDidMount(){
        //.log("Parent Component Did Mount");
    }

    render(){

        //console.log("Parent Render");
        return(
            <div>
                <h1>About Class Component</h1>
                <h2>This is a Food app</h2>
             
    
                <UserClass name={"First(class)"} location={"Nagpur Class"}/>
                
            </div>
        ); 
    }
}

//const About = ()=>{
   // return(
       // <div>
         //   <h1>About</h1>
           // <h2>This is a Food app</h2>
         


            //<UserClass name={"Pranali(class)"} location={"Nagpur Class"}/>
        //</div>
    //);
//};
export default About;