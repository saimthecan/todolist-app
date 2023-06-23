  import React, { useState, useContext } from "react";
  import axios from "axios";
  import alertify from "alertifyjs";
  import { AuthContext } from './AuthContext'; // instead of './AuthProvider'
  import { Button, Form, FormGroup, Label, Input} from "reactstrap";
  import { authStyles } from "./styles";
  import { backgroundImage } from "./styles";

  const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthToken } = useContext(AuthContext);

    const handleSubmit = (event) => {
      event.preventDefault();
      const user = {
        email,
        password,
      };

      axios
      .post("http://localhost:8000/login", user)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setAuthToken(res.data.token);
        sessionStorage.setItem("authToken", res.data.token);
        // email'i localstorage'a kaydediyoruz
        sessionStorage.setItem("email", res.data.email);
        window.location = "/";
      })
      .catch((error) => {
        console.log(error);
        alertify.alert("Error", "Email and password do not match");
      });
    };  

    return (
      <div className="Auth-form-container mx-auto"  style={{...backgroundImage, ...authStyles.authFormContainer } }>
        <Form className="Auth-form" onSubmit={handleSubmit} style={authStyles.authForm}>
          <div className="Auth-form-content" style={authStyles.authFormContent}>
            <h3 style={authStyles.authFormTitle} className="Auth-form-title">Sign In</h3>
            <FormGroup className="mt-3">
              <Label style={authStyles.label}>Email</Label>
              <Input
                onChange={(evt) => setEmail(evt.target.value)}
                name="email"
                type="text"
                className="mt-1"
                placeholder="Enter Email"
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
                Sign In
              </Button>
            </div>
            <p className="register text-right mt-2">
              Register <a href="http://localhost:3000/signup">Sign Up</a>
            </p>
          </div>
        </Form>
      </div>
    );
  };

  export default Login;
