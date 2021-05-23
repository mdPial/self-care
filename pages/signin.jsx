import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import apiUrl from "../global/get-api.url";
import styles from "../styles/SignInSignUp.module.scss";

export default function SignIn() {
  const [username,setUsername] = useState("");
  const [password,setUserPassword] = useState("");
  const signIn = (event)=>{
      event.preventDefault();
      if(password == '' || username == '') {
        alert('Please fill all the fields');
      }else{
        const data = {
          username,
          password
        };
        axios.post(`${apiUrl()}/api/auth/sign-in`,data)
          .then((response)=>{
            if(response.status === 200){
              const {token} = response.data;
              localStorage.setItem('token',token);
            }
            // console.log(response);
          })
          .catch((error)=>{
            console.log(error);
          })
      }
      
    }
  return (
    <div className={styles.container}>
      <Head>
        <title>Sign In</title>
      </Head>
      <div className={styles.containerWrapper}>
        <form onSubmit={signIn}>
        <div className={styles.leftContainer}>
          <p className={styles.title}>
            Hello! <br /> Sign in to your account
          </p>
          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.input}
              placeholder="Username"
              value = {username}
              onChange = {(event)=>setUsername(event.target.value)}
            />
            <input
              type="password"
              className={styles.input}
              placeholder="Password"
              value = {password}
              onChange = {(event)=>setUserPassword(event.target.value)}
            />
          </div>
          <div className={styles.buttonAndLinkContainer}>
            <button 
            type = "submit"
            className={styles.button}>SIGN IN</button>
            <p className={styles.link}>
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </div>
        </div>
        </form>
        <div className={styles.rightContainer}>
          <img src="./sprinting.gif" width="100%" className={styles.image} />
        </div>
      </div>
    </div>
  );
}
