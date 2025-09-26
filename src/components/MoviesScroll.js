import { useEffect, useState} from "react";
import { Dimensions,StyleSheet,Text,Image } from "react-native";
import {getPopularMovies} from "../api/api"
import { View } from "react-native";
import { ActivityIndicator } from "react-native";
import { ScrollView } from "react-native";

const{width} = Dimensions.get('window')
const cardWidth = width *0.4

export default function MoviesScroll(){
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function fetchData() {
            const data = await getPopularMovies()
            setMovies(data)
            setLoading(false)
        }
        fetchData()
    }, [])

    if(loading){
        return(
            <View style={styles.loadingContainer}>
                <ActivityIndicator size = "large" color="#e12314"/>
                <Text style = {styles.loadingText}> Carregando filmes...</Text>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <Text style = {styles.sectionTitle}>Filmes Populares</Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
                style={styles.scrollView}
            >

            {movies.map((movie, index) =>(
                <View key={movie.id || index} style = {styles.card}>
                    <View style={styles.imageContainer}>
                        <Image 
                        source = {{uri:`https://image.tmdb.org/t/p/w500${movie.poster_path}`}}
                        style={styles.poster}
                        resizeMode="cover"
                        />
                        <View style={styles.overlay}>
                            <Text style = {styles.title} numberOfLines = {2}>
                                {movie.title}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.cardContent}>

                        <View style={styles.ratingContainer}>
                            <Text style={styles.rating}>{movie.vote_average?.toFixed(1)}</Text>
                            <Text style={styles.year}>
                                {movie.release_date ? new Date(movie.release_date).getFullYear(): ''}
                            </Text>
                        </View>

                        <Text style={styles.overview} numberOfLines={1}>
                            {movies.overview}
                        </Text>

                    </View>

                </View>
            ))}

            </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 380, // Altura fixa ao invés de flex: 1
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  loadingText: {
    color: "#333",
    marginTop: 10,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 15,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  card: {
    width: cardWidth,
    backgroundColor: "#1a1a1a",
    borderRadius: 16,
    marginRight: 15,
    overflow: "hidden",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  imageContainer: {
    position: "relative",
    height: 240,
  },
  poster: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    padding: 12,
  },
  cardContent: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    lineHeight: 20,
    textShadowColor: "rgba(0,0,0,0.8)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  rating: {
    fontSize: 12,
    color: "#ffd700",
    fontWeight: "600",
  },
  year: {
    fontSize: 12,
    color: "#888",
    fontWeight: "500",
  },
  overview: {
    fontSize: 12,
    color: "#ccc",
    lineHeight: 16,
  },
});
