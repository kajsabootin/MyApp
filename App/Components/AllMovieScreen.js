import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
//import { Colors, Fonts, Images } from './DevTheme'

// Styles
//import styles from './Styles/AllMovieScreenStyles'
//import styles from './Styles/ThemeScreenStyles'

const AllMovieScreen = ({navigation}) => {
  console.log(navigation)

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&page=1&r=json", {
        "method": "GET",
	      "headers": {
		    "x-rapidapi-Key": "",
	  	  "x-rapidapi-host": ""
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err);
    })


  })

  /* useEffect(() => {
    fetch(
      "https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&page=1&r=json", {
        "method": "GET",
	      "headers": {
		    "x-rapidapi-key": "",
	  	  "x-rapidapi-host": ""
      }
      })
      .then((res) => res.json())
      .then((json) => {
        //setMovies(json.results);
        console.log(json)
      });
  }, []); */


  return (
    <View /* style={styles.colorContainer} */>
      <View /* style={styles.sectionHeaderContainer} */>
      <View /* style={styles.backgroundContainer} */>
      <Text> Här ska du se alla filmer</Text>
      </View>
      </View>
    </View>
  )
}

export default AllMovieScreen;
