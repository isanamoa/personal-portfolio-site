import React from 'react'
import { Box, Card, CardActions, CardContent, Typography } from '@mui/material'
import Link from 'next/link'
import { ArrowForward } from '@mui/icons-material'

const Carder = ({ title, content }) => {

  return (
    <Box sx={{ width: 1 }} >
        <CardContent>
            <Typography 
                gutterBottom 
                variant="h5" 
                component="div"
                className='font-bold'>
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {content}
            </Typography>
        </CardContent>
        <CardActions sx={{ pl:2 }}>
            <Link href="" > 
                Read More <ArrowForward size="small" />
            </Link>
        </CardActions>
    </Box>
  )
}

export default Carder
