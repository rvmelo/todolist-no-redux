import React from 'react';
import { ScrollView } from 'react-native';
import styles from './TodoListStyles';
import Item from '../Item/Item';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const todoList = (props) => {

    const items = props.itemList.map(item => {

        if(item.completed && props.showCompletedList){

            return (
                <Aux key={item.id}>
                    <Item 
                        itemElement={item} 
                        text={item.text} 
                        date={item.date} 
                        toggleTextInput={props.toggleTextInput}
                        editItemText={props.editItemText}
                        removeFromList={props.removeFromList}
                        handleChangeText={props.handleChangeText} 

                        showPickerInItem={props.showPickerInItem}
                        hidePickerInItem={props.hidePickerInItem}
                        handlePicker={props.handlePicker} 
                        editItemDate={props.editItemDate}
                        editItemStatus={props.editItemStatus}

                        />
                </Aux>
            ); 

        }

        else if(!item.completed && !props.showCompletedList){

            return (
                <Aux key={item.id}>
                    <Item 
                        itemElement={item} 
                        text={item.text} 
                        date={item.date} 
                        toggleTextInput={props.toggleTextInput}
                        editItemText={props.editItemText}
                        removeFromList={props.removeFromList}
                        handleChangeText={props.handleChangeText} 

                        showPickerInItem={props.showPickerInItem}
                        hidePickerInItem={props.hidePickerInItem}
                        handlePicker={props.handlePicker} 
                        editItemDate={props.editItemDate}
                        editItemStatus={props.editItemStatus}

                        />
                </Aux>
            ); 

        }

    });
        
    

    return(
        
        <ScrollView>
            {items}
        </ScrollView>
      
    );

    

}

export default todoList;