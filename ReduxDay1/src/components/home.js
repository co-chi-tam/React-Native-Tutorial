'use stricts';

import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator, TouchableHighlight
} from 'react-native';
import ActionSheet from 'react-native-actionsheet'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ReduxActions from '../actions';
import { Actions } from 'react-native-router-flux'

//Buttons for Action Sheet
const BUTTONS = [
    "Edit",
    "Delete",
    'Cancel',
];

const CANCEL_INDEX = 2;

class Home extends Component {

    constructor(props) {
        super (props);

        this.state = {

        };

        this.renderItem = this.renderItem.bind (this);
        this.showOptions = this.showOptions.bind(this);
    }

    componentDidMount() {
        this.props.getQuotes();
    }

    showOptions(quote) {
        this.quoteSelected = quote;
        this.ActionSheet.show();
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <FlatList
                        ref='listRef'
                        data={this.props.quotes}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}/>

                    <TouchableHighlight style={styles.addButton}
                                        underlayColor='#ff7043' onPress={() => Actions.new_quote()}>
                        <Text style={{fontSize: 25, color: 'white'}}>+</Text>
                    </TouchableHighlight>

                    <ActionSheet
                        ref={o => this.ActionSheet = o}
                        title={ 'Which one do you like ?' }
                        options={ BUTTONS }
                        cancelButtonIndex={ CANCEL_INDEX }
                        destructiveButtonIndex={1}
                        onPress={(buttonIndex) => {  
                            if (this.quoteSelected !== null) {
                                if (buttonIndex === 0) 
                                    Actions.new_quote({quote: this.quoteSelected, edit: true, title:"Edit Quote"})
                                else if (buttonIndex === 1) 
                                    this.props.deleteQuote(this.quoteSelected.id) 
                            }
                        }}
                    />
                </View>
            );
        }
    }

    renderItem({item, index}) {
        return (
            <TouchableHighlight onPress={() => this.showOptions(item)} underlayColor='rgba(0,0,0,.2)'>
                <View style={styles.row}>
                    <Text style={styles.quote}>
                        {item.quote}
                    </Text>
                    <Text style={styles.author}>
                        {item.author}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        quotes: state.dataReducer.quotes
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators (ReduxActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: '#F5F5F5'
    },

    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    row:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },

    author: {
        fontSize: 14,
        fontWeight: "600",
        marginTop: 8 * 2
    },

    quote: {
        marginTop: 5,
        fontSize: 14,
    },

    addButton: {
        backgroundColor: '#ff5722',
        borderColor: '#ff5722',
        borderWidth: 1,
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    }
});