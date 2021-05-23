import axios from "axios";
import { useEffect, useState } from "react";
import apiUrl from "../global/get-api.url";
import styles from "../styles/Post.module.scss";
import Posts from "./Posts";

export default function Post() {
  const [thought,setThought] = useState("");
  const [thoughtList,setThoughts] = useState([]);
  useEffect(()=>{
    axios.get(`${apiUrl()}/api/user/thought`)
        .then((response)=>{
          // console.log(response.data);
          setThoughts(response.data);
          // console.log(thoughtList);
        })
  },[])
  const submitThought = (event)=>{
    event.preventDefault();
    if(thought == ''){
      alert("Please fill the field first!");
    }else{
      const data = {
        thought
      }
      axios.post(`${apiUrl()}/api/user/thought`,data,{
        headers: {
          'auth-token': localStorage.getItem('token')
      }
      })
        .then((response)=>{
          if(response.status == 200){
            console.log('done')
          }
        })
    }
  }
  return (
    <>
      <form onSubmit={submitThought}>
        <div className={styles.container}>
          <h4>Share your thoughts</h4>
          <textarea 
          value={thought}
          onChange={(event)=>setThought(event.target.value)}
          type="text" 
          className={styles.textarea} 
          rows="9" cols="70" />
          <button
          style = {{borderStyle: 'none',cursor: 'pointer'}}
          type="submit"
          className={styles.button}
          >Post</button>
        </div>
      </form>
      <Posts data={thoughtList}/>
    </>
  );
}
