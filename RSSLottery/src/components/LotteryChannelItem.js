// http://xoso.me/rss/xo-so-mien-nam.rss

import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    Linking
} from 'react-native';

class LotteryChannelItem extends Component {
    renderDescription(desp) {
        var despInfo = desp.toString().split('[');
        if (despInfo.length > 1) {
            return despInfo.map ((item, index) => {
                var country = item.split(']')[0];
                var info = item.split(']')[1];
                // var countryLottery = info.toString().replace('\b(\sDB:\s|1:\s|2:\s|3:\s|4:\s)', '<>');
                return (
                    <View key = {index}>
                        <Text style = {{ fontSize: 18, fontWeight: 'bold' }}>{ country }</Text>
                        <Text>{ info }</Text>
                    </View>
                );
            });
        } else {
            return (
                <View>
                    <Text>{ desp }</Text>
                </View>
            );
        }
    }
    render() {
        return (
            <View style = {{ backgroundColor: this.props.item.id % 2 == 0 ? 'yellow' : 'orange' }}>
                <Text style = {{ fontSize: 22, textAlign: 'center' }}>{ this.props.item.title }</Text>
                <View>{ this.renderDescription (this.props.item.description) }</View>
                <Button
                    style = {{ fontSize: 15, textAlign: 'center' }}
                    title = { 'URl:' + this.props.item.link }
                    onPress = { () => {
                        var link = this.props.item.link + '';
                        Linking.canOpenURL (link)
                            .then((supported) => {
                                if (supported) {
                                    Linking.openURL (link);
                                } else {
                                    alert ('Web browser is not supported.');
                                }
                            })
                            .catch ((err) => {
                                alert(err);
                            })
                    }} />
            </View>
        );
    }
}
export default LotteryChannelItem;