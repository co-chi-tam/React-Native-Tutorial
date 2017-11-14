import React, { Component } from 'react';
import {
    View,
    Text,
    SectionList
} from 'react-native';

class MySectionList extends Component {
    state = {
        sectionData: [
            { data: ['Child 1', 'Child 2'], title: 'Item 1', key: 'item 1' },
            { data: ['Child 1', 'Child 2'], title: 'Item 2', key: 'item 2' },
            { data: ['Child 1', 'Child 2'], title: 'Item 3', key: 'item 3' },
            { data: ['Child 1', 'Child 2'], title: 'Item 4', key: 'item 4' },
            { data: ['Child 1', 'Child 2'], title: 'Item 5', key: 'item 5' }
        ]
    }
    render() {
        return(
            <View style = {{ flex: 1, height: 200 }}>
                <SectionList
                    renderItem = {
                        (items) => <Text>{ items.item }</Text>
                   }
                    renderSectionHeader = { 
                        (sections) => <Text style = {{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>{ sections.section.title }</Text>
                    }
                    sections = { this.state.sectionData }/>
            </View>
        );
    }
}
export default MySectionList;