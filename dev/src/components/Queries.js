import React, {Component} from 'react';

export class Queries extends Component {

    handleQuery = () => {
        alert("Should fetch query item data...")
    };

    render() {
        const {values} = this.props;
        return (
            <React.Fragment>
                <div className={"queries"}>
                    <ol>
                        {values.query.length === 0
                            ? "Your query list is empty..."
                            : values.query.map((name, index) => {
                                return (
                                    <li
                                        key={index}
                                        onClick={this.handleQuery}
                                    >{name}</li>
                                )
                            })
                        }
                    </ol>
                </div>
            </React.Fragment>
        );
    }
}

export default Queries;


