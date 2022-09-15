import {  useEffect, useState} from "react";
import { API_URL,TWEET_PATH } from "../../constants/Constants";
import { useParams } from "react-router-dom";
import { SERVER_URL } from "../../constants/Constants";
import styled from 'styled-components';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import { Link, NavLink} from "react-router-dom";

import { AiFillHeart, AiOutlineRetweet,AiOutlineArrowLeft, AiOutlineComment,  AiOutlineShareAlt } from "react-icons/ai";
const TweetDetails = () => {
    const [tweet, setTweet] = useState(null);
    // const [isLiked, setIsLiked] = useState(isLiked)
const {tweetId} = useParams();
const tweetGenerate1 = ()=>{
    fetch(API_URL+TWEET_PATH+tweetId)
    .then(res=>res.json())
    .then(d=>{
        setTweet(d.tweet)
        })       
    }
useEffect(()=>{tweetGenerate1()},[tweetId])

const [isLiked, setIsLiked] = useState(false)
   let likeCount = 0
const likeHandler = (event)=>{
    return setIsLiked(!isLiked)
}

const setTime = (timestamp)=> {
    return format(parseISO(timestamp), "h:mm a · MMM d y")}
    console.log(tweet)
return (
<Tweetstyled>
    {tweet && <>
<NavLink style={{textDecoration: 'none', fontWeight:"larger", color:"black"}} exact to="/"><AiOutlineArrowLeft/> MEOW</NavLink>
<Link exact="true" style={{textDecoration: 'none', fontWeight:"larger"}} to={`/${tweet.author.handle}`}>
    <div>@{tweet.author.handle? tweet.author.handle: ""}</div> 
    <div>{tweet.author.displayName}</div> 
    </Link>
    <AvatarStyle src={tweet.author.avatarSrc}/>
    <StatusStyled>{tweet.status}</StatusStyled>
    {/* <ImgStyle src = {SERVER_URL+tweet.media[0].url }/> */}
    {  tweet.media.length>0 ?  <ImgStyle src ={SERVER_URL+tweet.media[0].url} /> :  ''}
    <div>{setTime(tweet.timestamp)}</div>
    <IconsStyled>
        <AiOutlineComment /><AiFillHeart style={{marginLeft:"40px"}}onClick = {(event)=>{likeHandler(event)}} strokeOpacity={1} strokeWidth={100} stroke="black"  color={isLiked? "red":"white"}/>
          <div > {isLiked ? likeCount + 1 : likeCount > 0 ? likeCount : " "}</div>

        <AiOutlineRetweet style={{marginLeft:"40px"}}/>
        <AiOutlineShareAlt style={{marginLeft:"40px"}}/>
    </IconsStyled>
    </>
    }
</Tweetstyled>   
    );
}
export default TweetDetails;
const Tweetstyled = styled.div`
     width:"100vw";
     margin-bottom:30px ;
     margin-top: 5px;
     text-align: left;
     margin-left: 150px;

     `
const IconsStyled = styled.div`
    display: flex;
    flex-direction: row;
    position: center;
    justify-content: space-around;
    margin-right: 550px;
    margin-top: 30px;
    `
    const AvatarStyle = styled.img`
    border-radius: 50%;
    margin-left: -100px;
    width: 70px;
    margin-top: -40px;
    `
const ImgStyle = styled.img`
width: 500px;
border-radius: 10px;
margin-left: 10px;
`

const StatusStyled = styled.div`
margin-top:-10px;
margin-bottom: 40px;
`