import React, { Component } from 'react';
import AddScreen from '../../components/AddScreen/AddScreen';
import TodoList from '../../components/TodoList/TodoList';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import moment from 'moment';

class TodoListContainer extends Component {

    state = {

        itemList: [],

        idCount: 0,

        text: 'Write your to do item!',
        chosenDate: 'no-date',
        activeItems: 0,
        completedItems: 0,
        showCompletedList: false
  
    }

    handleChangeText = (newText) => {
        this.setState({text: newText});
    }

    filterCompletedItems = () => {
        this.setState({ showCompletedList: true });
    }

    filterActiveItems = () => {
        this.setState({ showCompletedList: false });
    }

    showCompletedItems

    showPickerInItem = (item) => {

        const oldItemList = [...this.state.itemList];
        const index = oldItemList.indexOf(item);

        if(index !== -1){
            oldItemList[index].pickerVisible = true;
            this.setState({ itemList:oldItemList });
        }

    }

    hidePickerInItem = (item) => {

        const oldItemList = [...this.state.itemList];
        const index = oldItemList.indexOf(item);

        if(index !== -1){
            oldItemList[index].pickerVisible = false;
            this.setState({ itemList:oldItemList });
        }

    }

    handlePicker = (datetime) => {

        this.setState({ 
            isVisible: false,
            chosenDate: moment(datetime).format('MMM, Do YYYY HH:mm') 
        });

        this.props.hidePicker();

    }

    toggleTextInput = (item) => {

        const oldItemList = [...this.state.itemList];
        const index = oldItemList.indexOf(item);

        oldItemList[index].displayTextInput = !oldItemList[index].displayTextInput;
        
        this.setState({ itemList: oldItemList });

    }

    editItemText = (item) => {

        const oldItemList = [...this.state.itemList];
        index = oldItemList.indexOf(item);

        if(index !== -1){
            oldItemList[index].text = this.state.text;
            oldItemList[index].displayTextInput = false;
            this.setState( {itemList: oldItemList });

        } 
       
    }

    editItemDate = (item) => {
        
        const oldItemList = [...this.state.itemList];
        const index = oldItemList.indexOf(item);

        if(index !== -1){
            oldItemList[index].date = this.state.chosenDate;
            this.setState({ itemList: oldItemList });
        }

        this.hidePickerInItem(item);

    }

    editItemStatus = (item) => {

        let activeCount = 0;
        let completedCount = 0;

        if(!item.completed){
            activeCount = this.state.activeItems-1;
            completedCount = this.state.completedItems+1;
        }
        else{
            completedCount = this.state.completedItems-1;
            activeCount = this.state.activeItems+1;
        }
        
        const oldItemList = [...this.state.itemList];
        const index = oldItemList.indexOf(item);
        
        if(index !== -1){
            oldItemList[index].completed = !oldItemList[index].completed;
            this.setState({ itemList: oldItemList, completedItems: completedCount, activeItems: activeCount });
        }
    }

    addItemToList = () => {

        const oldIdCount = this.state.idCount;
        const newIdCount = oldIdCount + 1;
        const activeCount = this.state.activeItems+1;

        const newText = this.state.text;
        const newDate = this.state.chosenDate;

        objItem = { 'id': newIdCount, 'text': newText, 'date': newDate, 'completed': false, 'displayTextInput': false, 'pickerVisible': false };

        this.setState({
            itemList: [...this.state.itemList, objItem], idCount: newIdCount, activeItems: activeCount
        });

    }

    removeFromList = (element) => {

        let activeCount = this.state.activeItems;
        let completedCount = this.state.completedItems;

        if(!element.completed)
            activeCount = this.state.activeItems-1;
        else
            completedCount = this.state.completedItems-1;
    
        let oldItemList = [...this.state.itemList];
        const index = oldItemList.indexOf(element);

        if( index !== -1){
            oldItemList.splice(index, 1);
            this.setState({ itemList: oldItemList, activeItems: activeCount, completedItems: completedCount });
        }
      
    }

    render () {

        let childComponent = <AddScreen 
                                    toggleItems={this.props.toggleItems}

                                    showPicker={this.props.showPicker}
                                    hidePicker={this.props.hidePicker}
                                    pickerVisible={this.props.pickerVisible}
                                    handlePicker={this.handlePicker}
                                    
                                    addItemToList={this.addItemToList} 
                                    handleChangeText={this.handleChangeText}

                                    activeItems={this.state.activeItems}

                                    showCompletedList={this.state.showCompletedList}

                                    filterActiveItems={this.filterActiveItems}
                                    filterCompletedItems={this.filterCompletedItems}

                                    />;

        if(this.props.displayItems){

            childComponent = <TodoList 
                                toggleItems={this.props.toggleItems} 
                                itemList={this.state.itemList}
                                removeFromList={this.removeFromList}
                                toggleTextInput={this.toggleTextInput}
                                handleChangeText={this.handleChangeText}
                                editItemText={this.editItemText}

                                showPickerInItem={this.showPickerInItem}
                                hidePickerInItem={this.hidePickerInItem}
                                handlePicker={this.handlePicker}
                                editItemDate={this.editItemDate}
                                
                                showCompletedList={this.state.showCompletedList}
                                editItemStatus={this.editItemStatus}
                                
                                />;

        }


        return (
            <Aux>
                {childComponent}
            </Aux>
        );
    }

    }

export default TodoListContainer;