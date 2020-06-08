import React, {Component} from 'react';
import { View, StyleSheet, Image, Text} from 'react-native';
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

function Profile({navigation}){

    var perfil = {name:"Bruno Freire", desc:"Aluno"};

    const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];


    return (
        <View style={styles.container}>

            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
            />

            <Text style={styles.textName}>{perfil.name}</Text>
            <Text style={styles.textDesc}>{perfil.desc}</Text>

            <View style={styles.divGraph}>
                <AreaChart
                    style={{ height: 100 }}
                    data={ data }
                    contentInset={{ top: 30, bottom: 30 }}
                    curve={ shape.curveNatural }
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                >
                    <Grid/>
                </AreaChart>
            </View>

            <View>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />

                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    logo: {
        marginTop: 50,
        width: 60,
        height: 60,
        borderRadius: 10
    },
    textName: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    textDesc: {
        fontSize: 14,
        color: '#fff'
    },
    divGraph: {
        marginTop: 10,
        width: 300,
        height: 100,
        backgroundColor: '#DCDCDC',
        borderRadius: 10
        
    },
});

export default Profile;