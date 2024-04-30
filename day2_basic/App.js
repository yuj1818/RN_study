import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [goals, setGoals] = useState([]);

  function openModalHandler() {
    setIsOpen(true);
  };

  function closeModalHandler() {
    setIsOpen(false);
  };

  function addGoalHandler(goal) {
    setGoals(pre => [...pre, {text: goal, id: Math.random().toString()}]);
  };

  function deleteGoalHandler(id) {
    setGoals(pre => {
      return pre.filter(el => el.id !== id);
    });
  };

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color='#5e0acc' onPress={openModalHandler} />
        <GoalInput onAddGoal={addGoalHandler} visible={isOpen} onCloseModal={closeModalHandler} />
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
          <FlatList 
            data={goals} 
            renderItem={itemData => {
              return (
                <GoalItem 
                  text={itemData.item.text} 
                  id={itemData.item.id} 
                  onDeleteGoal={deleteGoalHandler} 
                />
              )
            }} 
            alwaysBounceVertical={false} 
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  
  goalsContainer: {
    flex: 5,
    paddingTop: 16
  }
});
