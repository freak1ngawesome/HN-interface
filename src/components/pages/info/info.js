import React, { memo } from 'react'
import RootComment from '../../comment/rootComment'
import Preloader from '../../preloader/preloader'
import { useGetNewsDataByIdQuery, useGetLastNewsIdsQuery } from '../../../slices/apiSlice'
import { Box, Heading, Flex, Spacer, HStack, Text, Link, List, IconButton } from '@chakra-ui/react'
import { ArrowBackIcon, RepeatIcon } from '@chakra-ui/icons'
import { useParams, useHistory } from 'react-router-dom'
import { setTime } from '../../../services/setTime.js'

function Info(){
  let { id } = useParams()

  const { data, isLoading, isFetching, refetch } = useGetNewsDataByIdQuery(id)
  const {isFetching: everyMinuteFetching} = useGetLastNewsIdsQuery()
  if (everyMinuteFetching) {refetch()}

  const history = useHistory()
  const handleGoBackButton = function() {
    history.goBack()
  }
  const handleRefreshButton = function() {
    refetch()
  }
  if (isLoading) return <Preloader/>
  return (
    <Box>
      <Flex p={5} shadow='md' borderWidth='1px' mb='20px' gridGap='5px'>
        <Heading size='lg'>{data.title}</Heading>
        <Spacer/>
        <HStack>
          <IconButton aria-label='Go back' icon={<ArrowBackIcon />} onClick={handleGoBackButton}/>
          <IconButton aria-label='Refresh' icon={<RepeatIcon />} onClick={handleRefreshButton}/>
        </HStack>
      </Flex>
      <Box p={5} shadow='md' borderWidth='1px' spacing='5px'>
        <Text>Рейтинг: {data.score}</Text>
        <Text>Дата и время создания: {setTime(data.time)}</Text>
        <Text>Автор: {data.by}</Text>
        <Text>Комментарии: {data.descendants}</Text>
        {data.url && <Link href={data.url} color='teal.500' isExternal>Ссылка на материал</Link>}
      </Box>
      {data.kids && 
        <List>
          {data.kids.map(commentId => <RootComment key={commentId} id={commentId} isFetching={isFetching}/>)}
        </List>}
    </Box>
  )
}

export default memo(Info)