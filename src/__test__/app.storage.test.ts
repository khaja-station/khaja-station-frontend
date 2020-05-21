import { storage } from 'app/app.storage';
import { StorageKey } from 'app/app.types';

const oldToken = 'oldToken!232323';
const newToken = 'Newtoken342342';

const data = {
  user: {
    fullName: 'John',
    address: 'Alaska',
  },
  token: oldToken,
  roles: ['ADMIN', 'GUEST'],
  isSignedIn: false,
  isAuthenticated: false,
};
describe('App Storage Test', () => {
  test.only('should storage key value and get data  ', () => {
    storage.set(StorageKey.AUTH, data);
    const { data: retrievedData, error } = storage.get(StorageKey.AUTH);
    expect(error).toBe(null);
    expect(Array.isArray(retrievedData));
  });
});
