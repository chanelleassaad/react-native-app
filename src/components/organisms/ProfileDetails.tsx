import React from 'react';
import {View} from 'react-native';
import TextEditor from '../atoms/TextEditor';
import {useProfile} from '../../store/profile/ProfileProvider';

const ProfileDetails: React.FC = () => {
  const {state, dispatch} = useProfile();

  return (
    <View>
      <TextEditor
        title={'First Name'}
        value={state.firstName}
        onChangeText={(text: string) =>
          dispatch({type: 'SET_FIRST_NAME', payload: text})
        }
        placeholder={'Enter your first name..'}
      />
      <TextEditor
        title={'Last Name'}
        value={state.lastName}
        onChangeText={(text: string) =>
          dispatch({type: 'SET_LAST_NAME', payload: text})
        }
        placeholder={'Enter your last name..'}
      />
      <TextEditor
        title={'Email Address'}
        value={state.emailAddress}
        onChangeText={(text: string) =>
          dispatch({type: 'SET_EMAIL_ADDRESS', payload: text})
        }
        placeholder={'Enter your email address'}
      />
    </View>
  );
};

export default ProfileDetails;
