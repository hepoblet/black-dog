import React from 'react';
import { View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { gridStyles } from '../assets/styles';

const Width = Dimensions.get('window').width;

Grid = (props) => {
    let { dogList, row } = props;
    let size = Width/row;

    return (
        <View style={gridStyles.gridContainer}>
            {dogList.map((value, index) => {
                return (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.7}
                        onPress={() => {
                            alert('Grrrr...');
                        }}
                    >
                        <Image
                            style={{
                                width: size,
                                height: size
                            }}
                            source={{
                                uri: value
                            }}
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default Grid;