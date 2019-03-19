import React, { Component } from 'react';

export class Input extends Component {

    render() {
        const { values, handleChange } = this.props;
        return (
            <React.Fragment>
                <form>
                    <input
                        type={"text"}
                        name={"input"}
                        className={""}
                        placeholder={"Search..."}
                        defaultValue={values.input}
                        onChange={handleChange('input')}
                    />
                </form>
            </React.Fragment>
        );
    }
}


export default Input;
