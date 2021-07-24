import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Square = ({ isLight, selected }) => {
    let backgroundColor;
    if (isLight) {
        backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)'
    } else {
        backgroundColor = selected ? '#fff' : 'rgba(255,255,255,0.5)'
    }
    return (
        <View
            style={{
                width: 6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    )
}
const backgroundColor = isLight => (isLight ? 'blue' : 'lightblue');
const color = isLight => backgroundColor(!isLight)

const Done = ({ isLight, ...props }) => (
    <Button
        title={'Done'}
        buttonStyle={{
            backgroundColor: backgroundColor(isLight),
        }}
        containerViewStyle={{
            backgroundColor: backgroundColor(isLight),
            marginVertical: 10,
            width: 70,
        }}
        textStyle={{ color: color(isLight) }}
        {...props}
    />
)

const Skip = ({ isLight, skipLabel, ...props }) => (
    <Button
        title={'Skip'}
        buttonStyle={{
            backgroundColor: backgroundColor(isLight),
        }}
        containerViewStyle={{
            marginVertical: 10,
            width: 70,
        }}
        textStyle={{ color: color(isLight) }}
        {...props}
    >
        {skipLabel}
    </Button>
)
const Next = ({ isLight, ...props }) => (
    <Button
        title={'Next'}
        buttonStyle={{
            backgroundColor: backgroundColor(isLight),
        }}
        containerViewStyle={{
            marginVertical: 10,
            width: 70,
            backgroundColor: backgroundColor(isLight)

        }}
        textStyle={{ color: color(isLight) }}
        {...props}
    />

)

const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
            DotComponent={Square}
            NextButtonComponent={Next}
            SkipButtonComponent={Skip}
            DoneButtonComponent={Done}
            onDone={() => navigation.navigate("Login")}
            titleStyles={{color: 'white'}}
            pages={[
                {
                    backgroundColor: '#404CCF',
                    image: <Image source={require('../img/Chart.png')} />,
                    title: 'Fason İşlerinizi Takip Etmek Artık Çok Kolay!',
                    subtitle: 'Defter Kullanmaya Son!',
                },
                {
                    backgroundColor: '#404CCF',
                    image: <Image source={require('../img/Location.png')} />,
                    title: 'Daha Düzenli ve Daha Kolay',
                    subtitle: '',
                },
                {
                    backgroundColor: '#404CCF',
                    image: <Image source={require('../img/Receipts.png')} />,
                    title: 'Dükkanını Oluştur Fason İşlerini Takip Etmeye Başla!',
                    subtitle: '',
                }
            ]}
        />

    )
}


export default OnboardingScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// })