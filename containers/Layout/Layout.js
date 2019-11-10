import React, { Component } from 'react';
import { Button, Text, KeyboardAvoidingView } from 'react-native';
import TodoListContainer from '../TodoListContainer/TodoListContainer';
import Header from '../../components/UI/Header/Header';

class Layout extends Component {

    state = {

        displayItems: false,
        pickerVisible: false

    }

    toggleItems = () => {
        this.setState({ displayItems: !this.state.displayItems });
    }

    showPicker = () => {
        this.setState({ pickerVisible: true });
    }

    hidePicker = () => {
        this.setState({ pickerVisible: false });
    }

    render () {

        return (
           <KeyboardAvoidingView style={{flex:1}} behavior="padding">
           
                <Header />

                <TodoListContainer 
                    displayItems={this.state.displayItems} 
                    toggleItems={this.toggleItems} 
                    showPicker={this.showPicker} 
                    hidePicker={this.hidePicker} 
                    pickerVisible={this.state.pickerVisible}    
                    />

                <Button title='Toggle Items' onPress={this.toggleItems} /> 

           </KeyboardAvoidingView>
        );
    }

}

export default Layout;