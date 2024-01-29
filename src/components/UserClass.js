import React from "react";


class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
          //  count : 0,
            //count2 : 2,
            userInfo : {
                name: "Dummy",
                location: "Default",
                
            },
        };
       // console.log(this.props.name +" Child Constructor");
    }

   async componentDidMount() {
        const data = await fetch ("https://api.github.com/users/akshaymarch7");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
        //console.log(this.props.name +"Child Component Did mount");
    }

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        console.log("Component willUnmount");
    }

    render(){
       // const{name,location} =this.props;
        //console.log(this.props.name +" Child Render");

        const {name,location,avtar_url} =this.state.userInfo;
        return (
            <div className="user-card">
               <img src={avtar_url}/>
             <h2>Name:{name}</h2>
             <h3>Location:{location}</h3>
             <h4>Contact:@pranali</h4>
    </div>
    );
    }
}
export default UserClass;