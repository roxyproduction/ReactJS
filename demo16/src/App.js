import React from 'react';
import LoaderHOC from './hoc/loader';
import Emp from './emp';


class App extends React.Component {
    state={
        emps:[
            {id:101,name:'Paul',salary:5000},
            {id:102,name:'Sam',salary:2000},
            {id:103,name:'Sid',salary:2500},
            {id:104,name:'John',salary:5000},
            {id:105,name:'Alice',salary:4000}
        ]
    }
    render() {
        return (
            <div>
                <table border="1">
                    <tbody>
                    {
                        this.state.emps.map((emp)=>{
                            return (<Emp salary = {emp.salary} key={emp.id}>{emp.name}</Emp>)
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default LoaderHOC('emps')(App);
