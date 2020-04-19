import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { useTheme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';

import { ResponsiveLine } from "@nivo/line";

import Title from './Title';

const AUSTRALIA_CONFIRMED_DAY_ONE = gql`
{
    findFromDayOne(slug: "Australia", status: CONFIRMED) {
      noOfCases
      lastUpdated
    }
  }
`;


export default function Chart() {
    const theme = useTheme();
    const { loading, error, data } = useQuery(AUSTRALIA_CONFIRMED_DAY_ONE);

    if (loading) return <Fade in={loading} style={{ transitionDelay: loading ? '800ms' : '0ms', }}
        unmountOnExit><CircularProgress /></Fade>;
    if (error) return <p>Error :(</p>;
    const transformed = data.findFromDayOne.map((result) => {
        const object = { x: result.lastUpdated.substring(0, 10), y: result.noOfCases }; return object
    });


    return (
        <>
            <Title>Australia</Title>
            <ResponsiveLine
                margin={{ top: 10, right: 5, bottom: 50, left: 50 }}
                xScale={{
                    type: 'time',
                    format: '%Y-%m-%d',
                    precision: 'day',
                }}
                axisBottom={{
                    format: '%b %d',
                    tickValues: 'every 21 days',
                    legend: 'Date',
                    legendOffset: -12,
                }}
                axisLeft={{
                    tickValues: [1, 1000, 4000, 6000, 10000],
                    legendOffset: 12,
                }}
                enableGridX={false}
                animate={true}
                curve="monotoneX"
                enableSlices='x'
                data={[
                    {
                        id: "No of cases",
                        data: transformed
                    }
                ]}
            />
        </>
    );
}