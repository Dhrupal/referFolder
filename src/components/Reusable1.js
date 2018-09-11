import React, { Component } from "react";
import {  View, Text } from "react-native";

export class Reusable1 extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() { }
    render() {
        
        return (
            <View style={{flex:1}}>
                <Text>From Reusable1</Text>
            </View>
        );
    }
}
