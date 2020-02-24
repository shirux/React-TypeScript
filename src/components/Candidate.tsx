import * as React from 'react';



class Candidate extends React.Component<any, any> {

    constructor(props: any){
        super(props);
    }

    render(){
        return(
            <li className="card mb-4 shadow-sm">
                <div className="row">
                    <div className="col-9">
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <h1 className="card-title text-center">{this.props.firstName} {this.props.lastName}</h1>   
                            </div>
                            <p className="card-text text-muted text-center">{this.props.slogan}</p>
                            <div className="row">
                                <p className="col-6 text-center text-muted card-text"><span className="focus">Age:</span> {this.props.age}</p>
                                <p className="col-6 text-center text-muted card-text"><span className="focus">Votes:</span> {this.props.votes}</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="btn-options col-2">
                            <button type="button" className="btn-success btn btn-block">Votar</button>
                            <button type="button" className="btn-danger btn btn-block">Bajar</button> 
                    </div>
                </div>
            </li>
        
            );
    }
}

export default Candidate