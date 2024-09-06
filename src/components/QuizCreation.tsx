import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'

type Props = {}

const QuizCreation = (props: Props) => {
  return (
      <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 ">
          <Card>
              <CardHeader>
                  <CardTitle className="text-2x font-bold">Quiz Creation</CardTitle>
                  <CardDescription>
                       Choose a topic.
                  </CardDescription>
              </CardHeader>
          </Card>
      </div>
  )
}

export default QuizCreation