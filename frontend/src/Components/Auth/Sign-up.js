import React, { useState } from "react";
import axios from "axios";
import alertify from "alertifyjs";
import { Button, Form, FormGroup, Label, Input} from "reactstrap";
import { backgroundImage } from "./styles";
import { authStyles } from "./styles";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email,
      isActive: true,
      password,
    };

    axios.post("http://localhost:8000/api/user/", user).then((res) => {
      console.log(res);
      console.log(res.data);
      alertify.alert("Success", "Sign Up Successful");
    });
  };

  return (
    <div className="Auth-form-container"  style={{...backgroundImage, ...authStyles.authFormContainer } }>
      <Form className="Auth-form" onSubmit={handleSubmit} style={authStyles.authForm}>
        <div className="Auth-form-content" style={authStyles.authFormContent}>
          <h3 style={authStyles.authFormTitle} className="Auth-form-title">Sign Up</h3>
          <FormGroup className="mt-3">
            <Label style={authStyles.label}>Email</Label>
            <Input
              onChange={(evt) => setEmail(evt.target.value)}
              name="email"
              type="email"
              className="mt-1"
              placeholder="Enter email"
            />

            <Label style={authStyles.label}>Password</Label>
            <Input
              onChange={(evt) => setPassword(evt.target.value)}
              name="password"
              type="password"
              className="mt-1"
              placeholder="Enter Password"
            />
          </FormGroup>

          <div className="d-grid gap-2 mt-3">
            <Button type="submit" color="primary">
              Register
            </Button>
          </div>
          <p className="register text-right mt-2">
            Already Signed Up? <a href="http://localhost:3000/login">Login</a>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
