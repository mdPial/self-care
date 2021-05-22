import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import apiUrl from "../global/get-api.url";
import styles from "../styles/SignInSignUp.module.scss";

export default function SignUp() {
  const [username,setUsername] = useState("");
  const [password,setUserPassword] = useState("");
  const [confirmpassword,setUserConfirmPassword] = useState("");

  const signUp = (event)=>{
    event.preventDefault();
    if(password === confirmpassword) {
      const data = {
        username,
        password
      };
      // console.log(`${apiUrl()}`)
      axios.post(`${apiUrl()}/api/auth/sign-up`,data)
        .then((response)=>{
          if(response.status === 200){
            alert('Registration done');
            setUserPassword("");
            setUsername("");
            setUserConfirmPassword("");
          }
          // console.log(response);
        })
        .catch((error)=>{
          console.log(error);
        })
    }else{
      alert('Please provide correct password');
      setUserPassword("");
    }
    
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div className={styles.containerWrapper}>
        <form onSubmit={signUp}>
        <div className={styles.leftContainer}>
          <p className={styles.title}>START THE JOURNEY</p>
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
            <input
              type="password"
              className={styles.input}
              placeholder="Confirm Password"
              value = {confirmpassword}
              onChange = {(event)=>setUserConfirmPassword(event.target.value)}
            />
          </div>
          <div className={styles.buttonAndLinkContainer}>
            <button 
            type = "submit"
            className={styles.button}>SIGN UP</button>
            <p className={styles.link}>
              Already have an account? <a href="/signin">Sign In</a>
            </p>
          </div>
        </div>
        </form>
        <div className={styles.rightContainer}>
          <img src="./coffee.gif" width="100%" className={styles.image} />
        </div>
      </div>
    </div>
  );
}
