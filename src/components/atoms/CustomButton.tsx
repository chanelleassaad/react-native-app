import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

type ButtonProps = {
  onPress: () => void;
  title: string;
  disabled?: boolean;
};

const CustomButton: React.FC<ButtonProps> = ({
  onPress,
  title,
  disabled = false,
}) => {
  return (
    <Pressable
      style={[styles.button, disabled && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#5356FF',
    margin: 10,
  },
  disabledButton: {
    backgroundColor: '#C1C1C1',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default CustomButton;
