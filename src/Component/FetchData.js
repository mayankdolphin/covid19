import React from "react";
import StateData from "./StateData";
import CountryData from "./CountryData";

export default class FetchData extends React.Component {
    state = {
        loading: true,
        states: null
    };

    async componentDidMount() {
        const url = "https://api.covid19india.org/data.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ states: data.statewise, loading: false });
    }

    render() {
        if (this.state.loading) {
            return <div className="loader"></div>;
        }

        if (!this.state.states) {
            return <div>didn't get a states</div>;
        }
        return (
            <div className="table-responsive table-responsive-sm">
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr className="bg-dark">
                            <th className="table-active" scope="col">#</th>
                            <th className="table-danger" scope="col">Confirmed</th>
                            <th className="table-primary" scope="col">Active</th>
                            <th className="table-success" scope="col">Recovered</th>
                            <th className="table-secondary" scope="col">Deceased</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.states.map(stateData => (
                            stateData.statecode === 'TT' ? <CountryData stateData={stateData} key={stateData.statecode} /> : <StateData stateData={stateData} key={stateData.statecode} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
    
}