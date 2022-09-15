import { CurrentUserContext } from "../currentUserContext/CurrentUserContext";
import { useContext, useEffect, useState } from "react";
import { HOMEFEED_URL } from "../../constants/Constants";
import Tweet from "../tweet/tweet";

const BigTweet = () => {
    const {currentUser, status} = useContext(CurrentUserContext);
    const [tweets, setTweets] = useState([]);
    console.log(HOMEFEED_URL)
    
const tweetGenerate = ()=>{
    fetch(HOMEFEED_URL)
    .then(data=>{
        data.json().then(d=>{
        setTweets(
                Object.values(d.tweetsById).map((item,i) =>{
                    return i == 2 ? {...item,isLiked:true}:item
                })
        )       
        })       
    })
    console.log(tweets)
}
useEffect((
    
)=>{tweetGenerate()
},[])
    
// useEffect(()=>{ console.log(tweets)},[tweets])

    return ( 
        <>{tweets.length && tweets.map(tweet=>{
        
        return <Tweet tweet={tweet}/>})}</>
        )
    
}
export default BigTweet;