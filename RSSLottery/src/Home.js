import React, { Component } from 'react';
import {
    View, 
    Text
} from 'react-native';
import RSSReader from './components/RSSReader';
import LotteryChannel from './components/LotteryChannel';

class Home extends Component {
    state = {
        fethchResponse: 'WAITING...',
        lotteryData: []
    }
    componentDidMount() {
        RSSReader.readRSS('http://xoso.me/rss/xo-so-mien-nam.rss')
            .then((response) => {
                RSSReader.parseTo(response)
                .then((result) => {
                    RSSReader.writeFile('fileRSS.txt', JSON.stringify(result))
                    .then ((path) => { 
                        var channel = result.rss.channel;
                        var item = channel[0].item;
                        this.setState ({ 
                            fethchResponse: 'COMPLETED', 
                            lotteryData: [
                                { id: 0, ...item[0] },
                                { id: 1, ...item[1] },
                                { id: 2, ...item[2] },
                                { id: 3, ...item[3] },
                                { id: 4, ...item[4] }
                            ]
                        });
                    })
                    .catch ((err) => {
                        alert(err);
                    });
                })
                .catch((err) => {
                    alert(err);
                });
            })
            .catch((err) => {
                this.setState ({ fethchResponse: err });
            });
    }
    render() {
        return (
            <View>
                <Text>This is Lottery RSS</Text>
                <LotteryChannel 
                    data = { this.state.lotteryData } />
            </View>
        );
    }
}
export default Home;