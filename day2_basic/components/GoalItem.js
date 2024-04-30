import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {

  return (
    <View style={styles.goalContainer}>
      <Pressable android_ripple={{color: '#210644'}} onPress={props.onDeleteGoal.bind(this, props.id)}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalContainer: {
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 8
  },
  goalText: {
    padding: 16
  }
});