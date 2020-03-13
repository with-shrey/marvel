import loginSaga from '../loginSaga';
import * as actions from '../../actions';
import recordSaga from 'app/lib/recordSaga';

describe('Login Api Tests', () => {
    it('should login user successfully', async () => {
        const actionData = {email: 'admin@marvel.com', password: 'zaq1xsw2'};
        const dispatched = await recordSaga(
          loginSaga,
          actionData
        );
        expect(dispatched).toContainEqual(actions.onLoginResponse({
            id: '5e69d47c8f87add644c89541',
             email: 'admin@marvel.com'
        }));
      });

      it('login user should fail', async () => {
        const actionData = {email: 'admin@marvel.com', password: 'wrongpass'};
        const dispatched = await recordSaga(
          loginSaga,
          actionData
        );
        expect(dispatched).toContainEqual(actions.loginFailed());
      });
})
