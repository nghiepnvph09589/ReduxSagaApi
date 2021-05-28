
import React, { Component } from 'react';
import Button from 'react-native-button';

import {
    Text, View, Image, Alert, Platform, TextInput, FlatList
} from 'react-native';

export default class MovieComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            movieName: '', 
            releaseYear: '',
            // data:[]
        };
        // fetch('http://192.168.0.20:3030/getAdmin')
        // .then((response)=>(response.json()))
        // .then((json)=>{this.setState({data: json})})
        // .catch((error)=>console.error(error));
    }
    
    componentDidMount() {
        console.log('movieReducers  ' + this.props.movies)
      }
    render() {
        const{data} = this.state
        console.log('movieReducers  ' +JSON.stringify( this.props.movies))
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <Text style={{ margin: 10, fontWeight: 'bold', color: 'forestgreen', fontSize: 20 }}>
                    Redux Saga tutorials - Movies list
                </Text>
                <Text style={{ margin: 10, color: 'black', fontSize: 20 }}>
                    New movie information
                </Text>
                <View style={{ height: 100, margin: 10 }}>
                    <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({ movieName: text })}
                        value={this.state.movieName}
                        placeholder='Enter new movie name'
                    />
                    <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1, width: 120 }}
                        onChangeText={(text) => this.setState({ releaseYear: text })}
                        value={this.state.releaseYear}
                        placeholder='Release year'
                    />
                </View>
                <View style={{ height: 70, flexDirection: 'row' }}>
                    <Button
                        containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                        style={{ fontSize: 18, color: 'white' }}
                        onPress={() => {
                            this.props.onFetchMovies();
                            alert(`state after changed : ${this.props.movies}`);                             
                        }}>
                        Fetch movies
                    </Button>
                    <Button
                        containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                        style={{ fontSize: 18, color: 'white' }}
                        onPress={() => {

                        }}>
                        Add Movie
                    </Button>
                    
                </View>
                 
                <FlatList
                    data={this.props.movies}
                    keyExtractor={(item) => item.Name}
                    renderItem={({ item, index }) => <Text style={{
                        padding: 10,
                        fontWeight: 'bold',
                        fontSize: 17, 
                        color: 'white',
                        backgroundColor: (index % 2 === 0) ? 'dodgerblue' : 'mediumseagreen'
                    }}>
                        {`${item.Name},User=${item.User}`}
                    </Text>
                    }
                />
            </View>);
    }
}