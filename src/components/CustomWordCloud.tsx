"use client"

import { useTheme } from 'next-themes'
import React from 'react'
import D3WordCloud from 'react-d3-cloud'
type Props = {}

const data = [
    {
        text: 'Plants',
        value: 5,
    },
    {
        text: 'Marvel',
        value: 4,
    },
    {
        text: 'DC',
        value: 8,
    },
    {
        text: 'Apple Vs Windows',
        value: 13,
    },
    {
        text: 'Linux',
        value: 3,
    },
    {
        text: 'Gen AI',
        value: 14,
    },
];

const fontSizeMapper = (word: { value: number }) => {
    return Math.log2(word.value) * 5 + 16
}

const CustomWordCloud = (props: Props) => {
    const theme = useTheme()
    return (
        <>
            <D3WordCloud
                height={550}
                data={data}
                fontSize={fontSizeMapper}
                font={'Times'}
                rotate={0}
                padding={10}
                fill={theme.theme == "dark" ? "white" : "black"}
            />
        </>
    )
}

export default CustomWordCloud