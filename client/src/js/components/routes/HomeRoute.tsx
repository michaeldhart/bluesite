import { Grid } from '@mui/material';
import communityBldg from '../../../img/community_bldg.jpg';
import bigThunderPark from '../../../img/big_thunder_park.jpg';
import precinctMap from '../../../img/precinct_map.png';
import { FeaturedCard } from '../FeaturedCard';

export const HomeRoute = () => {
  return (
    <Grid container spacing={4} my={4}>
      <Grid item xs={0} sm={1} md={2}></Grid>
      <Grid item xs={12} sm={10} md>
        <FeaturedCard
          title="Who We Are"
          subtitle="Learn more about who's behind Operation Turn Boone Blue"
          image={communityBldg}
          link="who-we-are"
        />
      </Grid>
      <Grid item xs={0} sm={10} md>
        <FeaturedCard
          title="What We Do"
          subtitle={
            'Read about our strategy to elect progressives in Belvidere and Boone County'
          }
          image={bigThunderPark}
          link="what-we-do"
        />
      </Grid>
      <Grid item xs={0} sm={10} md>
        <FeaturedCard
          title="Why We Want You To Run For Precinct Committee"
          subtitle={
            'This often overlooked local office is way more important than it seems'
          }
          image={precinctMap}
          link="blog/2022-02-17-why-we-want-you-to-run-for-precinct-committee"
        />
      </Grid>
      <Grid item xs={0} sm={1} md={2}></Grid>
    </Grid>
  );
};
