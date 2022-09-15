import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../currentUserContext/CurrentUserContext";
import { API_URL, PROFILE_PATH,SERVER_URL, HOMEFEED_PATH } from "../../constants/Constants";
import SmallTweet from "../smallTweet/SmallTweet";
import styled from "styled-components";
import { COLORS } from "../../constants/Constants";
import { intlFormat } from "date-fns";
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

//show their tweets and retweets

const Profile = () => {

const {profileId} = useParams()
const [tweets, setTweets] = useState([]);
const [followers, setfollowers] = useState('')
const [following, setfollowing] = useState('')
const [info, setInfo] = useState('')
const {currentUser} = useContext(CurrentUserContext)

//fetching users info
    const getProfile = ()=>{
        fetch(API_URL+'/'+profileId+PROFILE_PATH)
        .then(res=>res.json())
        .then(d=>{
            
            setInfo(d.profile)
                
            })       
        }
//fetching users followers
    const getFollowers = ()=>{
        fetch(API_URL+'/'+profileId+'/'+'followers')
        .then(i=>i.json())
        .then(j=>{
            setfollowers(j)
                
            })       
        }
//fetching users followings
    const getFollowing = ()=>{
        fetch(API_URL+'/'+profileId+'/'+'following')
        .then(i=>i.json())
        .then(f=>{
            setfollowing(f)
                
            })       
        }
//fetching this user tweet
const tweetGenerate = ()=>{
        fetch(API_URL+'/'+profileId+'/'+'feed')
        .then(data=>{
            data.json().then(d=>{
            setTweets(
                d.tweetIds.map(t=>{
                    return d.tweetsById[t];
                }
                )
                
            )       
            })       
        })

}
//useEffect
    useEffect(()=>{getProfile();
        getFollowers();
        getFollowing();
        tweetGenerate();
    },[profileId])
    const setDate = (joined)=> {
        return format(parseISO(joined), "MMM do")}
  
    return ( <>
<BannerStyled src={SERVER_URL+info.bannerSrc}/>
<AvatarSrcStyle src={SERVER_URL+info.avatarSrc}/>
<div>{info.displayName}</div> 

<div>{info.handle}</div> <div style={{backgroundColor:"lightgrey", width:"100px", textAlign:"center"}}>{info.isFollowingYou? <div>Follows you</div> : ""}</div>
<div style={{backgroundColor:`${COLORS.primary}`,color:"white" ,width:"100px", textAlign:"center", borderRadius:"50px", float:"right"}}>{info.isBeingFollowedByYou? <div>Following</div> : ""}</div>
<div>{info.numFollowing}Following    {info.numFollowers}Followers</div>
{/* {info.location.length>0?<div>{info.location}</div>:"" } */}
{/* {info.joined.length>0 ?<div>joined {setDate(info.joined)}</div>:""} */}



<ItemsStyle>
    <div>Tweets</div>
    <div>Media</div>
    <div>Likes</div>
</ItemsStyle>
{/* {followers.followers[0].handle} */}
{tweets.length>0 ?<Tweetstyled> <SmallTweet tweets={tweets} setTweets={setTweets}/> </Tweetstyled>: 'Loading'}</>

     );
}
 
export default Profile;

const Tweetstyled = styled.div`
     width:"100vw";
     margin-bottom:30px ;
     margin-top: 5px;
     text-align: left;
     margin-left: 150px;`

const AvatarSrcStyle = styled.img`
border-radius: 50%;
margin-left: 10px;
width: 70px;
margin-top: -35px;
border-color:white;
border-width:8px;
border-style: solid;

`
const BannerStyled = styled.img`
height: 200px;
width: auto;`

const ItemsStyle = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
text-decoration: underline;
color: ${COLORS.primary};

`