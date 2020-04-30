import React from "react";
import StateData from "./StateData";

export default class FetchData extends React.Component {
    state = {
        loading: true,
        person: null
    };

    async componentDidMount() {
        const url = "https://api.covid19india.org/data.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ states: data.statewise, loading: false });
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.states) {
            return <div>didn't get a states</div>;
        }

        return this.state.states.map(stateData => (
                    <StateData stateData={stateData}/>
                ));
    }
    
}