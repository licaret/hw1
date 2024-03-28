import Alert from './Alert/Alert';
import Profile from './Profile/Profile';
import user from '../data/user.json';

export const App = () => {
  const text = 'Hello World!';

  return (
    <>
      <Alert>{text}</Alert>
      <Alert variant="success">{text}</Alert>
      <Alert variant="warning">{text}</Alert>
      <Alert variant="error">{text}</Alert>

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
};
