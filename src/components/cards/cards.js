import React from "react";
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from "./cards.module.css";
import cx from "classnames";
import CountUp from "react-countup";
const Cards=({data:{confirmed,recovered,deaths,lastUpdate}})=>{
    if(!confirmed){
        return null;
    }
    return(
        <div className="container">
            <Grid container justify="center">
                <Grid  item component={Card}  xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">
                            Number Of Cases Of Covid 19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid  item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recoveries</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number Of Recoveries Of Covid 19</Typography>
                    </CardContent>
                </Grid>
                <Grid  item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">
                            Number Of Deaths caused by Covid 19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;