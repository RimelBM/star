import React,{useEffect,}  from 'react'
import { connect } from 'react-redux';
import {myFoods} from '../../actions/foodAction'


import { Card, CardBody,  CardText, CardImg ,CardHeader} from 'reactstrap';


const Profile = ({
               auth,
               posts,
               myFoods }) => {

   console.log(auth)
 
    useEffect(() => {
        const pseudo = auth 
        myFoods() ;
        console.log(auth)
        
    }, [myFoods])

   
   
    return(
        <div>

         

            <div>
          
            {posts.map(
                ({_id,description,picture,pseudo,createdAt,photo})=>(


                    <div style={{marginLeft:'100px' , marginTop:'40px'}} >
                    
                   
                    <Card style={{width:'50%' }}>
                    <CardHeader style={{style:'flex'}}>
                     <div style={{display:'flex ', justifyContent:'space-between'}}>
                       <div style={{color:'blue' , fontFamily:'arial'}}>  
                         <h4> {pseudo} </h4>
                         <small className="text-muted">{createdAt}</small>
                         
                         </div>
                            
                     </div>
                    </CardHeader>
                   

                    <CardImg top  src={`http://localhost:5000/${picture}`}  alt="Card image cap" style={{width:'100%'}}/>
                    <CardBody>

                  
                        
                     <CardText>{description}</CardText>
                     <CardText>
                        <small className="text-muted">{createdAt}</small>
                     </CardText>
                     </CardBody>
                     
                
<div>
                   
              
     </div>         

                     </Card>
               
                

                
                </div>    )
            )}

</div>



          
        </div>
    )
}

const mapStateToProps = (state) => (
	{
        
        posts:state.food.posts,
        auth:state.auth
    }
)

export default connect(mapStateToProps , { myFoods })(Profile)


