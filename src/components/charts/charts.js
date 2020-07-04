import React,{useState,useEffect} from "react";
import styles from "./charts.module.css";
import {fetchDailyData} from "../../api";
import {Line,Bar} from "react-chartjs-2";

const Charts=({data,country})=>{
    const [dailyData,setDailyData]=useState([]);
    useEffect(()=>{
        const fetchApiDaily=async ()=>{
            setDailyData(await fetchDailyData());
        }
        fetchApiDaily();
    },[setDailyData]);
    const lineChart= (
        dailyData.length ? (
            <Line
                data={{
                    labels: dailyData.map(data=>(data.reportDate)),
                    datasets: [{
                        data: dailyData.map(data=>(data.totalConfirmed)),
                        label: "Infected",
                        borderColor: "rgba(0,0,255, 1)",
                        backgroundColor:" rgba(0,0,255, .5)",
                        fill: true
                    }, {
                        data: dailyData.map(data=>(data.deaths.total)),
                        label: "Deaths",
                        borderColor: "rgba(255,0,0, 1)",
                        backgroundColor:" rgba(255,0,0, .5)",
                        fill: true
                    },{
                        data: dailyData.map(data=>(data.recovered.total)),
                        label: "Recovered",
                        borderColor:" rgba(0,255,0, 1)",
                        backgroundColor:" rgba(0,255,0, .5)",
                        fill: true
                    }]
                }}
            />
        ) : null
    )
    const barChart=(
        data.confirmed?
            <Bar data={{
                labels:["Infected","Recovered","Deaths"],
                datasets:[{
                    labels:"people",
                    backgroundColor:[
                        "rgba(0,0,255, .5)",
                        "rgba(0,255,0, .5)",
                        "rgba(255,0,0, .5)",
                    ],
                    data:[
                        data.confirmed,
                        data.recovered,
                        data.deaths
                    ]
                }]
            }}
            options={{
                legend: {display: false},
                title:{display:true,text:`Current state in ${country}`}
            }}
            />
            :null
    )


    return(
        <div className={styles.container}>
            {country?barChart:lineChart}
        </div>
    )
}
export default Charts;