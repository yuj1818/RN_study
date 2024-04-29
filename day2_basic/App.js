import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setGoal(enteredText);
  };

  function addGoalHandler() {
    setGoals(pre => [...pre, {text: goal, key: Math.random().toString()}]);
    setGoal('');
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Your course goal!' 
          onChangeText={goalInputHandler}
          value={goal}
        />
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      {/* css 처럼 자식 요소에 style 속성이 상속되지 않는다. */}
      <View style={styles.goalsContainer}>
        {/* <ScrollView alwaysBounceVertical={false}>
          {
            goals.map(el => (
              <View key={el} style={styles.goalContainer}>
                <Text>{el}</Text>
              </View>
            ))
          }
        </ScrollView> */}
        <FlatList data={goals} renderItem={itemData => {
          return (
            <View style={styles.goalContainer}>
              <Text>{itemData.item.text}</Text>
            </View>
          )
        }} alwaysBounceVertical={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5,
    gap: 4
  },
  goalContainer: {
    padding: 8,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 10
  }
});
