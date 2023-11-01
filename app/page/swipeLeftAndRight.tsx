import React, { useState, useRef } from 'react'
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native'

const screenWidth = Dimensions.get('window').width
const data = ['Page 1', 'Page 2', 'Page 3']

export default function App() {
  const scrollViewRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollToPage = pageIndex => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: pageIndex * screenWidth,
        animated: true,
      })
      setCurrentIndex(pageIndex)
    }
  }

  const handleScroll = event => {
    const offsetX = event.nativeEvent.contentOffset.x
    const index = Math.round(offsetX / screenWidth)
    setCurrentIndex(index)
  }

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        {data.map((item, index) => (
          <View key={index} style={styles.page}>
            <Text>{item}</Text>
          </View>
        ))}
      </ScrollView>
      <Text style={styles.pageIndicator}>{`Page ${currentIndex + 1}`}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => scrollToPage(currentIndex - 1)}
          disabled={currentIndex === 0}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => scrollToPage(currentIndex + 1)}
          disabled={currentIndex === data.length - 1}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageIndicator: {
    textAlign: 'center',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  buttonText: {
    fontSize: 16,
    color: 'blue',
  },
})
