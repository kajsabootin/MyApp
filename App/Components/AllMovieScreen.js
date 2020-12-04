import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
//import { Colors, Fonts, Images } from './DevTheme'

// Styles
//import styles from './Styles/AllMovieScreenStyles'
//import styles from './Styles/ThemeScreenStyles'

const AllMovieScreen = ({navigation}) => {
  console.log(navigation)

  //804b9490c0msh6f9a9c1ebe788bcp1ba8c8jsnd3dc63b73402

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&page=1&r=json", {
        "method": "GET",
	      "headers": {
		    "x-rapidapi-Key": "804b9490c0msh6f9a9c1ebe788bcp1ba8c8jsnd3dc63b73402",
	  	  "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
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
		    "x-rapidapi-key": "804b9490c0msh6f9a9c1ebe788bcp1ba8c8jsnd3dc63b73402",
	  	  "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
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
