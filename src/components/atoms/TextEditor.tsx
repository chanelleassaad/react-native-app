import React from 'react';
import {TextInput, Text, View} from 'react-native';
import TextEditorStyle from './TextEditor.style';

interface TextEditorProps {
  title: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

const TextEditor: React.FC<TextEditorProps> = ({
  title,
  value,
  onChangeText,
  placeholder,
}) => {
  return (
    <View>
      <Text style={TextEditorStyle.titleInput}>{title}</Text>
      <TextInput
        style={TextEditorStyle.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

export default TextEditor;
