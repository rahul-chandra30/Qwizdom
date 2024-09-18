import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { useForm } from 'react-hook-form'
import { quizCreationSchema } from '@/schemas/form/quiz'
import { z } from 'zod'
type Props = {}

type input = z.infer<typeof quizCreationSchema>

const QuizCreation = (props: Props) => {
    const form = useForm<Input>({
        resolver: zodResolver(quizCreationSchema),
        defaultValues: {
            topic: '',
            type: 'mcq',
            amount: 1
        }
    })

  return (
      <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 ">
          <Card>
              <CardHeader>
                  <CardTitle className="text-2x font-bold">Quiz Creation</CardTitle>
                  <CardDescription>
                       Choose a topic. 
                  </CardDescription>
                  <CardContent>
                      
                  </CardContent>
              </CardHeader>
          </Card>
      </div>
  )
}

export default QuizCreation