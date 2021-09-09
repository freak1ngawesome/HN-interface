import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { ListItem, Heading, Box, Text, HStack, Center, Skeleton } from '@chakra-ui/react'
import { ChatIcon, StarIcon, CalendarIcon, AtSignIcon } from '@chakra-ui/icons'
import { useGetNewsDataByIdQuery } from '../../slices/apiSlice'
import { setTime } from '../../services/setTime.js'
import PropTypes from 'prop-types'

function Item({id, isFetching}){
  const { data, isLoading, refetch, isError } = useGetNewsDataByIdQuery(id, {
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  })
  if (isFetching) {refetch()}
  if (isLoading) return <Skeleton height='90px'/>
  if (isError) return <Center height='90px'>Ошибка загрузки</Center>
  
  return data && (
    <ListItem p={5} shadow='md' borderWidth='1px' spacing='5px'>
        <Box>
          <Heading size='md'>
            <Link to={{pathname: `/news/${id}`, state: {newsId: id}}}>
              {data.title}
            </Link>
          </Heading>
        </Box>
        <HStack>
          <StarIcon/>
          <Text>{data.score}</Text>
          <CalendarIcon/>
          <Text>{setTime(data.time)}</Text>
          <AtSignIcon/>
          <Text>{data.by}</Text>
          <ChatIcon/>
          <Text>{data.descendants}</Text>
        </HStack>
    </ListItem>
  )
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
}

export default memo(Item)