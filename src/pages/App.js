import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/app'
import { Button, Input } from 'antd';

class App extends Component {
    constructor( props ) {
        super( props )
    }

    handleChangeInput = ( name ) => ( ev ) => {
        this.props._changeInput( name, ev.target.value );
    };

    render() {
        const { name, age } = this.props;
        return (
              <div className="App">
                  <div>
                      <Input value={ name } onChange={ this.handleChangeInput("name") }/>
                  </div>
                  {/*<div>*/}
                      {/*<Input value={ age } onChange={ this.handleChangeInput("age") }/>*/}
                  {/*</div>*/}
              </div>
        );
    }
}

const mapStateToProps = ( state ) => {
    const { operateData: { name, age } } = state.appData.operateData;

    return {
        name,
        age
    }
};

const mapDispatchToProps = {
    _changeInput: actions._changeInput
};

export default connect( mapStateToProps, mapDispatchToProps )( App );
