import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumer, setUserNumber] = useState();
  const [isOver, setIsOver] = useState(true);
  const [rounds, setRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function gameOverHandler(numberOrRounds) {
    setIsOver(true);
    setRounds(numberOrRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setRounds(0);
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setIsOver(false);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumer) {
    screen = <GameScreen userNumber={userNumer} onGameOver={gameOverHandler} />
  }

  if (isOver && userNumer) {
    screen = <GameOverScreen userNumber={userNumer} roundsNumber={rounds} onStartNewGame={startNewGameHandler} />
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
        <ImageBackground 
          source={require('./assets/images/background.png')} 
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          {/* 안드로이드는 노치가 없어서 SafeAreaView 적용 안됨 */}
          <SafeAreaView style={styles.container}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: .15
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  }
});