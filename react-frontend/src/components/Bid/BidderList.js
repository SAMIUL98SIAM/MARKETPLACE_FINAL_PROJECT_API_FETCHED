import axios from 'axios';
import React, {Component} from 'react';
import  {Link} from 'react-router-dom';
import Project from '../Project/Project';
import swal from 'sweetalert';
// import BidListDetails from './BidListDetails';

class BidderList extends Component
 {

    state ={ 
        bidders: [],
        loading: true,
    }

   async  componentDidMount(){
       
        // const bid_id = this.props.match.params.id;
        // console.log(bid_id);
        const res=await  axios.get(`http://localhost:8000/api/seller_bidingproject`);
           console.log(res); 
           if(res.data.status===200){
               this.setState({
                   bidders: res.data.bidders,
                   loading: false,
               });
           }

        }
    

  render(){
    
    var bidder_HTML_TABLE = "" ;
    if(this.state.loading)
    {
        bidder_HTML_TABLE = <tr><td colSpan="6"><h2>Loading...</h2></td></tr>
    } 
    else
    {
        bidder_HTML_TABLE = this.state.bidders.map((bidder)=>{
            return(
                <tr>
                    <td>{bidder.id}</td>
                    <td>{bidder.buyer_id}</td>
                    <td>{bidder.username}</td>
                    <td>{bidder.description}</td>
                    <td>
                    <Link className="btn btn-success" to={`/seller_bidingproject/${bidder.id}`}>Details</Link>                  
                    </td>
                    <td>
                    <Link className="btn btn-primary" to={`/`}>Message</Link>
                    </td>
                </tr>
            )
        })
    }


    return(
    <div className="container">
             <div class="container">
                
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Username</th>
                    
                    <th scope="col">Communication</th>
                    </tr>
                </thead>
                <tbody>
                   {bidder_HTML_TABLE}
                    {/* <tr>
                    <td>{buyer_id}</td>
                    <td>{username}</td>
                    
                    <td><a class="btn btn-primary" href="/">Message</a>
                        <a class="btn btn-danger" href="/">Details</a>    
                    </td>
                    </tr>   */}
                </tbody>
                </table>
        </div>


                {/* <div className="row">
                     <div className="col-md-12">
                         <div className="card">
                             <div className="card-header">
                                    <h4> 
                                      Bid List
                                    </h4>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                       <tr>
                                           <th>Id</th>
                                           <th>Title</th>
                                           <th>Project File</th>
                                           <th>Price</th>
                                           <th>Edit</th>
                                           <th>Delete</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                        {bid_HTML_TABLE}
                                    </tbody>
                                </table>
                            </div>
                     </div>
                 </div>
            </div> */}
    </div>

    )
  }
 }
 export default BidderList;



// import Bidder from "./Bidder";



// const BidderList = ({ bidders }) => {
//     return (
//         <div>
//             <h1 style={{textAlign:"center"}}> Seller Who bid these project</h1>
//             {bidders.map((bidder) => {
//                 return (
//                     <Bidder
//                         key={bidder.id}
//                         {...bidder}
//                         // deletecallback={callback}
//                     />
//                 );
//             })}
//         </div>
//     );
// };

// export default BidderList;