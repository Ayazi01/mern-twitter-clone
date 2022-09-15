import SmallTweet from "../smallTweet/SmallTweet";
import React, { useState, useEffect } from 'react';
import { API_URL,HOMEFEED_PATH, TWEET_PATH } from "../../constants/Constants";
import styled from "styled-components";
import { COLORS } from "../../constants/Constants";


const MAX_LENGTH = 250;
const HomeFeed = () => {
    const [submittedTweet, setSubmittedTweet] = useState(0) 
    const [tweets, setTweets] = useState([]);
    const [text, setText] = useState('');
    const [count, setCount] = useState(MAX_LENGTH);
    const tweetGenerate = ()=>{
        fetch(API_URL+HOMEFEED_PATH)
        .then(data=>{
            data.json().then(d=>{
            setTweets(
                d.tweetIds.map(t=>{
                    return d.tweetsById[t];
                })
            )       
            })       
        })
    }
    useEffect((
    )=>{tweetGenerate()
    },[submittedTweet])
    const handleSubmit = (e) => {
    // console.log(e.target.value)
        e.preventDefault();
        fetch(API_URL+TWEET_PATH, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
        "status": text
    }),
        })
        .then((response)=> response.json().then((output)=>{
    
            setTweets(output)
            setText("")
            setSubmittedTweet(submittedTweet + 1)
        })
        )
        // tweetGenerate()
    }
    return ( 
<StyledHome className="homeFeed"> 
        <FormStyled>
        <form onSubmit = {handleSubmit}>
            <InputStyled placeholder="what's happening" onChange = {(e) => {
                setCount(MAX_LENGTH - e.target.value.length)
                setText(e.target.value)}} value = {text} 
            ></InputStyled>
            <ButtonStyled disabled={count<0 || count == MAX_LENGTH} type = 'submit'>Tweet</ButtonStyled>
            <CountStyle style={{ color: count <= MAX_LENGTH * 0.2 ? count < 0 ? 'red' : 'orange' : 'black'}}>{count}</CountStyle>
            {/* <div>{text}</div> */}
        </form>
        </FormStyled>
        <div>
        {tweets.length>0 ? <SmallTweet tweets={tweets} setTweets={setTweets}/> : 'Loading'}
        </div>
</StyledHome>
        )   
} 
export default HomeFeed;

const StyledHome = styled.div`
margin-top: 50px;
width: 80vw;
`
const FormStyled = styled.div`
margin-bottom: 20px;
width: 70vw;
`
const InputStyled = styled.input`
height: 100px;
width: 70vw;
margin-right: 10px;
`
const ButtonStyled = styled.button`
color: white;
font-weight: "900px";
background-color: ${COLORS.primary};
padding: 10px 20px;
border-radius: 5px;
float: right;
margin-right: -5px;
margin-top: 5px;
`
const CountStyle = styled.div`
text-align: right;
margin-top: 15px;

`