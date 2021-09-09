import React, { useState, useEffect } from 'react'
import { Center, Heading, Text, VStack } from '@chakra-ui/react'
import { useGetLastNewsIdsQuery } from '../../slices/apiSlice'
import getCurrentTime from '../../services/getCurrentTime'

function Header () {
  const [currentTime, setCurrentTime] = useState(getCurrentTime())
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime())
    }, 1000)
    return () => clearInterval(timer)
  },[])

  let { refetch } = useGetLastNewsIdsQuery()

  useEffect(() => {
    refetch()
  }, [currentTime.m, refetch])

  return (
    <Center as='header' height='120px' bg='gray.200' mb='20px' p={5} shadow='md' borderWidth='1px'>
      <VStack>
        <Heading size='lg'>Hacker News</Heading>
        <Text>{currentTime.h} : {currentTime.m} : {currentTime.s}</Text>
      </VStack>
    </Center>
  )
}

export default Header