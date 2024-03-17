import React, {createContext, useReducer, useContext} from 'react';
import {ProfileState} from '../../interfaces/ProfileState';
import profileReducer from './profileReducer';
import {ProfileAction} from './ProfileAction';

const initialState: ProfileState = {
  firstName: '',
  lastName: '',
  emailAddress: '',
};

interface ProfileContextType {
  state: ProfileState;
  dispatch: React.Dispatch<ProfileAction>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({children}) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  return (
    <ProfileContext.Provider value={{state, dispatch}}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = (): ProfileContextType => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
