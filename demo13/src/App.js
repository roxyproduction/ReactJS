import React, { Component } from 'react';

import Emp from './emp';

class App extends Component {
    state={
        emps:[
            {id:101,name:'Paul',salary:5000},
            {id:102,name:'Sam',salary:2000},
            {id:103,name:'Sid',salary:2500},
            {id:104,name:'John',salary:5000},
            {id:105,name:'Alice',salary:4000}
        ]
    }
    delEmp=(index,e)=>{
        const copyemps=Object.assign([],this.state.emps);
        copyemps.splice(index,1);
        this.setState({emps:copyemps});
    }
  render() {
    return (
      <div>
          <table border="1">
              <tbody>
              {
                  this.state.emps.map((emp)=>{
                      return (<Emp salary={emp.salary}
                                    key={emp.id}
                                    deleteEvent={this.delEmp.bind(this.id)}>
                                    {emp.name}
                              </Emp>)
                  })
              }
              </tbody>
          </table>
      </div>
    );
  }
}
export default App;
