import React, { useState, useEffect } from 'react';

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

const DataGenerator = (initialIndex, initialState) => {
    let index = initialIndex
    let state = initialState

    return {
        increment: () => {
            index++
            state = state.map(item => {
                const initialValue = initialState.find(d => d.id === item.id).value

                return {
                    ...item,
                    value: Math.round(item.value + Math.random() * (initialValue * 0.2)),
                }
            })
        },
        getData: () => {
            return { index, state }
        },
    }
}

const BarComponent = props => {
    return (
        <g transform={`translate(${props.x},${props.y})`}>
            <rect
                x={-3}
                y={7}
                width={props.width}
                height={props.height}
                fill="rgba(0, 0, 0, .07)"
            />
            <rect width={props.width} height={props.height} fill={props.color} />
            <rect
                x={props.width - 5}
                width={5}
                height={props.height}
                fill={props.borderColor}
                fillOpacity={0.2}
            />
            <text
                x={props.width - 16}
                y={props.height / 2 - 8}
                textAnchor="end"
                dominantBaseline="central"
                fill="black"
                style={{
                    fontWeight: 900,
                    fontSize: 15,
                }}
            >
                {props.data.indexValue}
            </text>
            <text
                x={props.width - 16}
                y={props.height / 2 + 10}
                textAnchor="end"
                dominantBaseline="central"
                fill={props.borderColor}
                style={{
                    fontWeight: 400,
                    fontSize: 13,
                }}
            >
                {props.data.value}
            </text>
        </g>
    )
}

const dataGenerator = DataGenerator(0, [
    { id: 'USA', value: 10 },
    { id: 'Australia', value: 1 },
    { id: 'Canada', value: 20 },
    { id: 'Spain', value: 12 },
    { id: 'Italy', value: 3 },
    { id: 'Germany', value: 3 },
    { id: 'Iran', value: 3 },
    { id: 'China', value: 200 }
])

const RaceChart = (props) => {
    const theme = useTheme();

    const [current, setCurrent] = useState(0)
    useEffect(() => {
        const timer = setTimeout(() => {
            dataGenerator.increment()
            setCurrent(current + 1)
        }, 1400)
        return () => clearTimeout(timer)
    }, [current, setCurrent])

    const yearData = dataGenerator.getData()
    const barData = [...yearData.state].sort((a, b) => a.value - b.value)

    return (
        <>
            <h2 style={{ marginLeft: 60, fontWeight: 400, color: '#555' }}>
                Day {' '}
                <strong style={{ color: 'black', fontWeight: 900 }}>{yearData.index}</strong>
            </h2>
            <ResponsiveBar
                // width={800}
                // height={500}
                layout="horizontal"
                margin={{ top: 26, right: 20, bottom: 26, left: 100 }}
                data={barData}
                indexBy="id"
                keys={['value']}
                colors={{ scheme: 'spectral' }}
                colorBy="indexValue"
                borderColor={{ from: 'color', modifiers: [['darker', 2.6]] }}
                enableGridX
                enableGridY={false}
                axisTop={{
                    format: '~s',
                }}
                axisBottom={{
                    format: '~s',
                }}
                axisLeft={null}
                padding={0.3}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.4]] }}
                isInteractive={false}
                barComponent={BarComponent}
                motionStiffness={170}
                motionDamping={26}
            />
        </>
    )
};
export default RaceChart