import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import '../css/Controls.css'
import { app } from '../actions'
import dataInterests from '../data/interests.json'

class Controls extends Component {
    state = {
        datauser: null,
        sort: false
    }
    componentDidMount(){        
        this.props.dispatch(app.app());
    }
    _users = () => {       
        if(this.props.UsersData && !this.props.dataSortUsers){                                   
            return this.props.UsersData.map((data, key) =>{
                return (                
                       <tr key = {key}>
                           <th>{data.id}</th>
                           <th>{data.name}</th>
                           <th>{data.following.map((Follow, key)=>{
                           return <span key={ 1 + key }> { Follow } </span>
                           })}</th>
                           <th>
                               { 
                                    data.interests?
                                        data.interests.map((Interests, key)=>{
                                            return <span className='interests' key={ 2 + key }> 
                                                {                                                     
                                                    dataInterests[Interests - 1].name                                                                                               
                                                } 
                                            &nbsp;&#x2f;  </span>
                                        })
                                    : null
                               }
                           </th>
                             <th>
                               <button onClick = {()=>{                                                                     
                                    let data = this.props.UsersData.filter( (user, index) => {                                          
                                        return user ? index !== key : null
                                                                       
                                    });
                                    this.props.dispatch(app.Delete( data ));
                               }}> 
                                delete 
                               </button>
                               <button onClick = {()=>{                                   
                                    let data = this.props.UsersData.filter((user, index) => {
                                        if(index === key){                                            
                                            return user.interests = [];
                                        }else{
                                            return user;
                                        }                                                                             
                                    });                                                                                                             
                                    this.props.dispatch(app.removeInterests( data ));                                                                        
                               }}> 
                                remove interests 
                               </button>
                            </th>                                                                 
                       </tr>                    
               )
            })
         }else if (this.props.dataSortUsers){
            return this.props.dataSortUsers.map((data, key) =>{
                return (                
                       <tr key = {key}>
                           <th>{data.id}</th>
                           <th>{data.name}</th>
                           <th>{data.following.map((Follow, key)=>{
                           return <span key={ 1 + key }> { Follow } </span>
                           })}</th>
                          <th>
                               { 
                                    data.interests?
                                        data.interests.map((Interests, key)=>{
                                            return <span className='interests' key={ 2 + key }> 
                                                {                                                     
                                                    dataInterests[Interests - 1].name                                                                                               
                                                } 
                                            &nbsp;&#x2f;  </span>
                                        })
                                    : null
                               }
                           </th>                                                                                    
                       </tr>                    
               )
            })
         }
     }
  render() {
    
    const controlsClass = classNames('Controls', {})   
    return (
      <div className={controlsClass}>     

        <h5> Sort Following Count </h5>    
        <button onClick = { () => {
            this.props.dispatch(app.sortFollowing());
            this.setState({sort: true})

        }}>Sort Following</button>

        <table>
            <tbody>                
                <tr >
                    <th>id</th>
                    <th>name</th>
                    <th>following</th>
                    <th>interests</th> 
                    {
                        this.state.sort? null : <th>Delete row</th>
                    }
                                                    
                </tr> 
                {this._users()}
            </tbody>
        </table>

      </div>
    )
  }
}

const mapStateToProps = state => ({
    UsersData: state.app.dataUsers,
    dataSortUsers: state.app.dataSortUsers,    
})
export default connect(mapStateToProps)(Controls)