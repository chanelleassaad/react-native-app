import React from 'react';
import {Pressable, Text} from 'react-native';
import CustomButtonStyle from './CustomButton.style';

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
      style={[
        CustomButtonStyle.button,
        disabled && CustomButtonStyle.disabledButton,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={CustomButtonStyle.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
