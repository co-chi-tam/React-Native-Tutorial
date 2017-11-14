import React, { Component } from 'react';
import {
    View, 
    Text,
    ListView,
    RefreshControl
} from 'react-native';

class MyRefreshableList extends Component {
    state = {
        refreshing: false,
        dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
                        .cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8'])
    }
    onRefreshList = () => {
        this.setState ({ refreshing: true });
        // fetchData().then(() => {
        //     this.setState({refreshing: false});
        // });
        setInterval(() => {
            this.setState({refreshing: false});
        }, 1000)
    }
    render() {
        return(
            <View style = {{ flex: 1, height: 200 }}>
                <ListView
                    dataSource = {this.state.dataSource}
                    renderRow= {(rowData) => <Text style = {{ fontSize: 25, textAlign: 'center', height: 33 }}>{rowData}</Text>}
                    refreshControl = {
                        <RefreshControl 
                            refreshing = { this.state.refreshing }
                            onRefresh = { this.onRefreshList.bind(this) } />
                    }
                >
                </ListView>
            </View>
        );
    }
}
export default MyRefreshableList;