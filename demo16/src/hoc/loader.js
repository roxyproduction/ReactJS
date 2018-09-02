import React ,{ Component } from 'react';
import './loader.css';

const LoaderHOC = (propName) => (WrappedComponent) => {
    return class LoaderHOC extends Component {
        render(){
            if (this.props.emps)
            {
                return this.props[propName].length === 0 ? <div className="loader"></div> : <
                    WrappedComponent {...this.props} />
            }
            else
                {
                return <div className= "loader"></div>
            }
        }
    }
}
export default LoaderHOC;