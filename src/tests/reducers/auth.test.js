import authReducer from '../../reducers/auth';

test('should set uid on login', () => {
  const uid = 'asdf';
  const state = authReducer({}, {
    type:'LOGIN',
    uid
  });
  expect(state).toEqual({
    uid
  });
});

test('should clear uid on logout', () => {
  const state = authReducer({ uid: 'asdf' }, {
    type:'LOGOUT'
  });
  expect(state).toEqual({});
});