import { Container } from '@mui/material';
import { Route, Routes } from 'react-router';
import { GlobalAppBar } from './js/components/GlobalAppBar';
import { RouteContainer } from './js/components/routes/RouteContainer';
import { HomeRoute } from './js/components/routes/HomeRoute';
import { WhoRoute } from './js/components/routes/WhoRoute';
import { WhatRoute } from './js/components/routes/WhatRoute';
import { ContactRoute } from './js/components/routes/ContactRoute';
import { useEffect } from 'react';
import { AppState, useAppDispatch, useAppSelector } from './js/redux/store';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import communityBldg from './img/community_bldg.jpg';
import bigThunderPark from './img/big_thunder_park.jpg';
import balticMill from './img/baltic_mill.jpg';
import { Footer } from './js/components/Footer';
import { BlogRoute } from './js/components/routes/BlogRoute';
import { BlogPageRoute } from './js/components/routes/BlogPageRoute';
import { appConfigStateAsyncActions } from './js/redux/appConfigStateSlice';

const initStore = (dispatch: ThunkDispatch<AppState, null, AnyAction>) => {
  dispatch(appConfigStateAsyncActions.getAppConfig());
};

const App = () => {
  const appConfig = useAppSelector((state) => state.appConfigState.appConfig);
  const dispatch = useAppDispatch();

  useEffect(() => {
    initStore(dispatch);
  }, []);

  return (
    <div className="App">
      <GlobalAppBar />
      <Container disableGutters={true} maxWidth={false}>
        <Routes>
          <Route
            path="/"
            element={
              <RouteContainer
                pageTitle={appConfig.appSubtitle}
                pageContent={<HomeRoute />}
              />
            }
          />
          <Route
            path="/who-we-are"
            element={
              <RouteContainer
                pageTitle="Who We Are"
                heroImgSrc={communityBldg}
                pageContent={<WhoRoute />}
              />
            }
          />
          <Route
            path="/what-we-do"
            element={
              <RouteContainer
                pageTitle="What We Do"
                heroImgSrc={bigThunderPark}
                pageContent={<WhatRoute />}
              />
            }
          />
          <Route
            path="/blog"
            element={
              <RouteContainer
                pageTitle="OTBB Blog"
                heroImgSrc={balticMill}
                pageContent={<BlogRoute />}
              />
            }
          />
          <Route
            path="/blog/:pageName"
            element={
              <RouteContainer
                pageTitle="OTBB Blog"
                heroImgSrc={balticMill}
                pageContent={<BlogPageRoute />}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <RouteContainer
                pageTitle="Contact Us"
                pageContent={<ContactRoute />}
              />
            }
          />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
};

export default App;
