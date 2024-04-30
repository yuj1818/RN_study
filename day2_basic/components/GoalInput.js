import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

function GoalInput(props) {
  const [goal, setGoal] = useState('');

  function goalInputHandler(enteredText) {
    setGoal(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(goal);
    setGoal('');
    props.onCloseModal();
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.jpg')} />
        <TextInput 
          style={styles.textInput} 
          placeholder='Your course goal!' 
          onChangeText={goalInputHandler}
          value={goal}
          onSubmitEditing={addGoalHandler}
          returnKeyType="done"
          autoFocus={true}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler}/>
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCloseModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#888888'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    color: 'black',
    width: '100%',
    padding: 16,
    borderRadius: 6
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  button: {
    width: 100,
    marginHorizontal: 8
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
})