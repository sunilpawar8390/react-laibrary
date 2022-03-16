import React, { Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {}

     
    }

//   goFunction() {
//         // this.props.history.push('/functionexample')
        
//          <Link  to="/functionexample/" />
//       }

    componentDidMount(){
    }

    render(){

       
         const {history} = this.props;

        return(
            <div>
                <h1>Home Page </h1>
                <button type='button' onClick={() => history.push('/classexample')}>Function</button>
                <button type='button' onClick={() => history.push('/classexample')}>ClassExample</button>
                <Link  to="/functionexample/" >click me </Link>

                <button type='button' onClick={  ()=> <Link  to="/functionexample/" ></Link>}> GO Function</button>
            </div>

        )
    }

}

export default Home