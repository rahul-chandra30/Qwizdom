import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import CustomWordCloud from '@/components/CustomWordCloud'

type Props = {}

const HotTopicsCard = (props: Props) => {
    return (
        <Card className="col-span-4 ">
            <CardHeader>
                <CardTitle className='text-2xl font-bold'>
                    Hot Topics!
                </CardTitle>
                <CardDescription >
                    Click on a topic to start quiz on that topic!
                </CardDescription>
            </CardHeader>

            <CardContent className="pl-2">
                <CustomWordCloud />
            </CardContent>
        </Card>
    )
}

export default HotTopicsCard