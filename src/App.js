import React from 'react';
import Cards from "./components/cards/cards";
import Charts from "./components/charts/charts";
import Country from "./components/country/country";
import styles from "./App.module.css";
import {fetchData} from "./api";
import MyImage from "./images/image.png";

class App extends React.Component{
    state={
        data:{},
        country:""
    }
     async componentDidMount() {
        const fetchedData=await fetchData();
        this.setState({
            data:fetchedData,
        })
    }
    handleCountryChange=async (country)=>{
        const fetchedData=await fetchData(country);
        this.setState({
            data:fetchedData,
            country:country
        })
    }

    render() {
        const {data,country}=this.state;
        if(!data){
            return(
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            )
        }
        return (
            <div className={styles.container}>
                <img
                    style={{width:"350px",height:"auto",display:"table",margin:"auto",padding:"20px 0px"}}
                    src={MyImage}
                    alt=""/>
                <Cards data={data}/>
                <Country handleCountryChange={this.handleCountryChange}/>
                <Charts data={data} country={country}/>
            </div>
        );
    }
}

export default App;
