import { CurrentUserContext } from "../currentUserContext/CurrentUserContext";
import { useContext, useEffect, useState } from "react";
import { API_URL,HOMEFEED_PATH } from "../../constants/Constants";
import Tweet from "../tweet/Tweet";
import styled from "styled-components";

const SmallTweet = ({tweets, setTweets}) => {
    return ( 
        <SmallTweetStyle>{tweets.map((tweet, i)=>{
        return <Tweet key={i} tweetChild={tweet}/>
    })}</SmallTweetStyle>
        )
    
}
export default SmallTweet;

const SmallTweetStyle = styled.div`
margin-bottom:100px;
display: inline-block;

`