import React from 'react';
import Search from '../../components/Search';
import { useSelector } from "react-redux";
import Spinner from '../../components/Spinner';
import Card from "../../components/Card";
import './Landing.css';

export default function Landing() {
    const { data, isLoading } = useSelector(state => state.facts);

    return (
        <div className="landing">
            <Spinner isLoading={isLoading} />
            <Search />
            <div className="facts-wrapper">
                {data?.map(item => <Card icon_url={item.icon_url} value={item.value} id={item.id} key={item.id} />)}
            </div>
        </div>
    )
}