export type ProfileAction =
  | {type: 'SET_FIRST_NAME'; payload: string}
  | {type: 'SET_LAST_NAME'; payload: string}
  | {type: 'SET_EMAIL_ADDRESS'; payload: string};
