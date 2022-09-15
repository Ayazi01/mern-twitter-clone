import { SERVER_URL } from "../../constants/Constants";
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {MY_PROFILE_PATH, API_URL} from "../../constants/Constants";
import { AiFillHeart, AiOutlineRetweet, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import { useState } from "react";
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

const Tweet = ({tweetChild}) => {
     const [tweet, setTweet] = useState(tweetChild);
   const [isLiked, setIsLiked] = useState(tweet.isLiked)
   let likeCount = tweet.numLikes
   console.log(likeCount)
const likeHandler = (event)=>{
     setIsLiked(!isLiked)
}
const setDate = (timestamp)=> {
     return format(parseISO(timestamp), "MMM do")}
     return ( 
<>
<Tweetstyled>
     <RetweetStyled>
           {tweet.retweetFrom? <AiOutlineRetweet/>: ''}<div>{tweet.retweetFrom? tweet.retweetFrom.displayName : ''}</div>
     </RetweetStyled>
     <NameStyled>
          <Link exact="true" style={{textDecoration: 'none', fontWeight:"larger"}} to={`/${tweet.author.handle}`}>
                    <div style={{marginRight:"5px"}}>{tweet.author.displayName}  </div>
          </Link>  <div style={{marginRight:"5px"}}>@{tweet.author.handle} </div>
          <div>{setDate(tweet.timestamp)}</div>
     </NameStyled>
     <AvatarStyle src={tweet.author.avatarSrc} />
     <Link style={{textDecoration: 'none', color:"black"}} exact="true" to={`/tweet/${tweet.id}`}>
     <div style={{marginTop:"-15px", verticalAlign:"text-top"}}>{tweet.status ? (typeof tweet.status) === 'object' ? tweet.status.text : tweet.status :''}</div>
      
               {  tweet.media.length>0 ?  <ImgStyle src ={SERVER_URL+tweet.media[0].url} /> :  ''}
     </Link>
     <IconsStyled>
          <AiOutlineComment/>
          <div>
          <AiFillHeart onClick = {(event)=>{likeHandler(event)}} strokeOpacity={1} strokeWidth={100} stroke="black"  color={isLiked? "red":"white"}/>
          <div > {isLiked ? tweet.numLikes + 1 : likeCount > 0 ? likeCount : " "}</div>
          </div>
          <AiOutlineRetweet/>
          <div>{tweet.numRetweets > 0 ?tweet.numRetweets :''} </div>
          <AiOutlineShareAlt/>
     </IconsStyled>
          
</Tweetstyled>
          
</>
     );
}
export default Tweet;

const Tweetstyled = styled.div`
     width:"100vw";
     margin-bottom:30px ;
     margin-top: 5px;
     text-align: left;

     `
const IconsStyled = styled.div`
     display: flex;
     flex-direction: row;
     position: center;
     justify-content: space-between;
     margin-right: 550px;
     margin-top: 30px;
     `

const RetweetStyled = styled.div`
     display: flex;
     flex-direction: row;
     margin-left: -20px;
     `

const ImgStyle = styled.img`
     width: 500px;
     border-radius: 10px;
     margin-left: 10px;
     `
const AvatarStyle = styled.img`
border-radius: 50%;
margin-left: -100px;
width: 70px;
margin-top: -10px;
`

const NameStyled = styled.div`
display: flex;
flex-direction: row;
margin-bottom: -20px;

`