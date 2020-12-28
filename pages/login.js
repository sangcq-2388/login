import { useState } from "react";
import Router from "next/router";

import axios from "axios";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { css } from "@emotion/css";
import { Send, Mail, Lock } from "@material-ui/icons";

const login = () => {
  const [email, setEmail] = useState("");
  const [pasword, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    const currentValueEmail = e.target.value;
    setEmail(currentValueEmail);
  };

  const handleChangePasswd = (e) => {
    const currentValuePasswd = e.target.value;
    setPassword(currentValuePasswd);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const response = axios.post("api/hello").then((rs) => {
      const token = rs.data.token;
      if (token) {
        localStorage.setItem("token", [
          token,
          {
            location: Router.push("/profile"),
          },
        ]);
      }
    });
    return response;
  };
  return (
    <>
      <Card
        className={css`
          max-width: 300px;
        `}
      >
        <CardContent>
          <TextField
            required
            id="email"
            label="Email"
            value={email}
            onChange={handleChangeEmail}
            margin="normal"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Mail />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            id="password"
            label="Password"
            value={pasword}
            type="password"
            onChange={handleChangePasswd}
            margin="normal"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
          />
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            id="btn_login"
            onClick={handleClick}
            color="primary"
            variant="contained"
          >
            <Send />
            Login
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default login;
