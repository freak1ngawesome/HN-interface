import React from 'react'
import { Spinner, Center } from '@chakra-ui/react'

function Preloader() {
  return (
    <Center color='red.500' size='xl'>
      <Spinner/>
    </Center>
  )
}

export default Preloader