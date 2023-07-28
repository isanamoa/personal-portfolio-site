import React from 'react'
import { Card, CardActions, CardContent, CardHeader } from '@mui/material'
import Link from 'next/link'
import { ArrowForward } from '@mui/icons-material'

const Carder = ({ title, content }) => {

  return (
    <Card sx={{ width: 1 }}>
        <CardHeader>
            {title}
        </CardHeader>
        <CardContent>
            {content}
        </CardContent>
        <CardActions>
            <Link href="" > 
                Read More <ArrowForward />
            </Link>
        </CardActions>
    </Card>
  )
}

export default Carder
