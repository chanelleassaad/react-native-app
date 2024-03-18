import React, {useContext} from 'react';
import {Pressable, Text} from 'react-native';
import CustomButtonStyle from './CustomButton.style';
import {DarkModeContext} from '../../store/darkMode/DarkModeContext';

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
  const {isDarkMode} = useContext(DarkModeContext);

  return (
    <Pressable
      style={[
        CustomButtonStyle.button,
        isDarkMode && CustomButtonStyle.buttonDark,
        disabled && CustomButtonStyle.disabledButton,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text
        style={[
          CustomButtonStyle.buttonText,
          isDarkMode && CustomButtonStyle.buttonTextDark,
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
