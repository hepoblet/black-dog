import React from 'react';
import { Text, View, Picker, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import { pickerStyles } from '../assets/styles';

BreedPicker = (props) => {
    let { selectedValue, onValueChange, breedList } = props;
    let RNPickerSelectRef = null;
    return (
        <View>
            {Platform.OS=='android'&&
            <View style={pickerStyles.androidContainer}> 
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={onValueChange}
                    style={pickerStyles.androidStyles}
                >
                    <Picker.Item key={null} label='Selecciona una raza' value={null}/>
                    {breedList.map((value) => {
                        return <Picker.Item key={value} label={value} value={value}/>
                    })}
                </Picker>
            </View>
            }
            {Platform.OS=='ios'&&
            <RNPickerSelect
                ref={(ref) => {
                    RNPickerSelectRef = ref;
                }}
                placeholder={{
                    label: 'Selecciona una raza',
                    value: null
                }}
                onValueChange={onValueChange}
                items={breedList.map((value) => {
                    return {
                        label: value,
                        value: value
                    }
                })}
                value={selectedValue}
                InputAccessoryView={() => {
                    return (
                        <View style={pickerStyles.iosInputAccesoryViewContainer}>
                            <Text
                                style={pickerStyles.iosInputAccesoryViewText}
                                onPress={() => {
                                    RNPickerSelectRef.togglePicker(false);
                                }}
                            >
                                Listo
                            </Text>
                        </View>
                    );
                }}
                doneText={'Listo'}
                Icon={() => {
                    return <Ionicons name={'ios-arrow-down'} size={24} color={'#000000'}/>;
                }}
                style={{
                    inputIOS: pickerStyles.iosInput,
                    iconContainer: pickerStyles.iosIconContainer,
                    placeholder: pickerStyles.iosPlaceholder,
                    modalViewBottom: pickerStyles.iosModalViewBottom
                }}
            />
            }
        </View>
    );
}

export default BreedPicker;