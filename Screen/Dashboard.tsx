import React, {useState, useEffect, Component} from 'react';
import {Text, ScrollView} from 'react-native';
import axios from 'axios';
import { observer } from 'mobx-react';
import {dataStore} from '../store/ApiStore';

interface IProps {
    
}
interface IState {
   
}

@observer
export default class Dashboard extends Component<IProps,IState> {

    data = ""
    constructor(props:IProps) {
    super(props)
    this.data = dataStore.apiCall
    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
            <Text>{JSON.stringify(this.data)}</Text>
            </ScrollView>
          );
    }
};


