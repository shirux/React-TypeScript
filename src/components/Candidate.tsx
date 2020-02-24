import * as React from 'react';



class Candidate extends React.Component<any, any> {

    constructor(props: any){
        super(props);
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="card mb-4 shadow-sm">
                        <div className="col-12">
                            <div className="card-body">
                                <div className="row">
                                    <h1 className="card-title">{this.props.firstName} {this.props.lastName}</h1>
                                    <button type="button" className="btn-success btn">Votar</button>
                                    <button type="button" className="btn-danger btn">Bajar</button>
                                </div>
                                <p className="card-text text-muted">{this.props.slogan}</p>
                                <p className="text-muted card-text"><span className="focus">Age:</span> {this.props.age}</p>
                                <p className="text-muted card-text"><span className="focus">Votes:</span> {this.props.votes}</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            );
    }
}

export default Candidate