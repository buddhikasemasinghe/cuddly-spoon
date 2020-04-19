import React from 'react';

import { useTheme } from '@material-ui/core/styles';

import { ResponsiveBar } from "@nivo/bar";
import { generateCountriesData, sets } from '@nivo/generators'

import Title from './Title';

const keys = ['hot dogs', 'burgers', 'sandwich', 'kebab', 'fries', 'donut']
const commonProps = {
    margin: { top: 25, right: 5, bottom: 50, left: 35 },
    data: generateCountriesData(keys, { size: 7 }),
    indexBy: 'country',
    keys,
    padding: 0.2,
    labelTextColor: 'inherit:darker(1.4)',
    labelSkipWidth: 16,
    labelSkipHeight: 16,
}

const BarChart = (props) => {
    const theme = useTheme();
    return (
        <>
            <Title>{props.title}</Title>
            <ResponsiveBar {...commonProps} groupMode="grouped" />
        </>
    );
};
export default BarChart