import React, { useEffect } from 'react';
import { getSingleFactsRequest } from '../../store/actions';
import { useDispatch, useSelector } from "react-redux";
import SingleFactCard from '../../components/SingleFactCard';
import Spinner from '../../components/Spinner';
import './SingleFact.css';

export default function SingleFact({ match }) {
    const { id } = match.params;
    const dispatch = useDispatch();
    const { data, isLoading } = useSelector(state => state.singleFact);

    // eslint-disable-next-line
    useEffect(() => {
        dispatch(getSingleFactsRequest(id))
        // eslint-disable-next-line
    }, [id])

    return (
        <div className="singleFact">
            <Spinner isLoading={isLoading} />
            <SingleFactCard value={data.value} image={data.icon_url} created_at={data.created_at} categories={data.categories} />
        </div>
    )
}
