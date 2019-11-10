import React from 'react';
import { 
    Text, Button, 
    View, Image, TextInput, 
    TouchableOpacity
     } from 'react-native';

import styles from './AddScreenStyles';   
import DateTimePicker from 'react-native-modal-datetime-picker';
import {CheckBox} from 'native-base';   

const addScreen = (props) => (

    <View style={styles.addContainerStyle}>

        <Text>Item: </Text><TextInput onChangeText={props.handleChangeText} style={styles.inputStyle} maxLength={20} />
            
        <TouchableOpacity onPress={props.showPicker}>
            <Image style={styles.imageStyle} source={require('../../assets/calendar-icon.png')}/>
        </TouchableOpacity>

        <DateTimePicker
            isVisible={props.pickerVisible}
            onConfirm={props.handlePicker} 
            onCancel={props.hidePicker}
            mode= { 'datetime' } />
        
        <Text style={styles.textStyle}>Items to be completed: {props.activeItems}</Text>

        <View style={styles.btnStyle}>
            <Button title='Add Items' onPress={props.addItemToList} />
        </View>

        <View style={styles.checkBoxContainer}>

            <CheckBox checked={!props.showCompletedList} onPress={props.filterActiveItems}/>
            <Text>Active Items</Text>

            <CheckBox checked={props.showCompletedList} onPress={props.filterCompletedItems} />
            <Text>Completed Items</Text>

        </View>

    </View>


);

export default addScreen;