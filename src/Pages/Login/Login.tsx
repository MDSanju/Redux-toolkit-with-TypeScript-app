import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Store/Slices/AuthSlice";
import { TextInput, Button, Group, Box } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { LoginWarp } from "../../Shared/Styles/Login.styles";

const { v4: uuidv4 } = require("uuid");

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    const email = target.email.value;
    const password = target.password.value;

    const user = {
      id: uuidv4(),
      email: email,
      password: password,
    };
    dispatch(login(user));
    navigate("/");
  };
  return (
    <LoginWarp>
      <Box sx={{ maxWidth: 300 }} mx="auto">
        <form onSubmit={handleLogin}>
          <TextInput
            withAsterisk
            type="email"
            label="Email"
            name="email"
            placeholder="Your email"
            required
          />

          <TextInput
            withAsterisk
            type="password"
            label="Password"
            name="password"
            placeholder="Your password"
            required
          />

          <Group position="right" mt="md">
            <Button type="submit">Login</Button>
          </Group>
        </form>
      </Box>
    </LoginWarp>
  );
};

export default Login;
