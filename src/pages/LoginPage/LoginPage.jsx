import { AiFillAndroid } from 'react-icons/ai';
import { Button } from 'components/Button/Button';
import { Box } from 'components/Box/Box';
import { useEffect, useState } from 'react';
import {
  useLazyGetCurrentUserQuery,
  useLoginMutation,
} from 'redux/api/authApi';
import { useSelector } from 'react-redux';
import { getLoggedin, getToken } from 'redux/slice/authSlice';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userLogin, { isSuccess, isError }] = useLoginMutation();

  //    const { t } = useTranslation();
  const token = useSelector(getToken);
  const isLogdedin = useSelector(getLoggedin);

  const [fetchUser] = useLazyGetCurrentUserQuery();

  useEffect(() => {
    if (!isLogdedin && token) {
      fetchUser(null, { skip: !token });
    }
  }, [fetchUser, isLogdedin, token]);

  useEffect(() => {
    isError && console.log('Invalid email or password');
  }, [isSuccess, isError]);

  const stateMap = {
    email: setEmail,
    password: setPassword,
  };

  const handleAddInputData = event => {
    const { name } = event.target;
    stateMap[name](event.target.value);
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    const user = {};

    user.email = email;
    user.password = password;

    userLogin(user);

    reset();
  };
  return (
    <Box
      fontFamily="monospace"
      bg="secondary"
      color="text"
      px={5}
      py={3}
      // height="100%"
      // width="100%"
      fontSize="m"
      // display="flex"
      // flexWrap="wrap"
      // justifyContent="center"
      // alignItems="center"
      as="main"
    >
      {/* <Text>homework template</Text>
      <Button icon={AiFillCar}>Кнопка</Button> */}
      {/* <Button>search</Button> */}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={handleAddInputData}
          value={email}
          name="email"
          placeholder="email"
        />
        <br />
        <input
          type="password"
          onChange={handleAddInputData}
          value={password}
          name="password"
          placeholder="password"
        />
        <Button icon={AiFillAndroid} type="submit">
          LogIn
        </Button>
      </form>
    </Box>
  );
};

export default LoginPage;
