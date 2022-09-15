import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomeFeed from './components/homeFeed/HomeFeed';
import Notifications from './components/notifications/Notifications';
import Bookmarks from './components/bookmarks/Bookmarks';
import TweetDetails from './components/tweetDetails/TweetDetails';
import Profile from './components/profile/Profile';
import GlobalStyle from "./components/globalStyles/GlobalStyles";
import Sidebar from "./components/sidebar/Sidebar";
import { useContext } from "react";
import { CurrentUserContext } from "./components/currentUserContext/CurrentUserContext";
import styled from "styled-components";

const App=()=> {
    const {currentUser, setCurrentUser, status, setStatus} = useContext(CurrentUserContext)
  return (
    <>{status ==="idle" ? 
        <Router>
        <GlobalStyle/>
        <ContainerDiv className="container">
            <div> <Sidebar/></div>
            <HomeStyled>
                <Switch>
                    <Route strict exact path="/">
                        <HomeFeed/>
                    </Route>
                    <Route strict exact path="/notifications">
                        <Notifications/>
                    </Route>
                    <Route strict path = "/bookmarks" exact>
                        <Bookmarks/>
                    </Route>
                    <Route strict path = "/tweet/:tweetId" exact>
                        <TweetDetails/>
                    </Route>
                    <Route strict exact path = "/:profileId">
                        <Profile/>
                    </Route>
                </Switch>
            </HomeStyled>
        </ContainerDiv>
        </Router>
    :
    <h1>the page is loading</h1>}</>
  );
}

export default App;

const ContainerDiv = styled.div`
display: flex;

`
const HomeStyled = styled.div`
display: flex;
flex-direction: column;
`