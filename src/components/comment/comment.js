import React, { memo } from 'react'
import { Skeleton, ListItem, Heading, Text, List } from '@chakra-ui/react'
import {Parser} from 'html-to-react'
import { useGetNewsDataByIdQuery } from '../../slices/apiSlice'
import { setTime } from '../../services/setTime.js'
import PropTypes from 'prop-types'

function Comment({id, isFetching}){
  const {data, isLoading, refetch} = useGetNewsDataByIdQuery(id)
  if (isFetching) {refetch()}
  if (isLoading) return <Skeleton height='30px'/>
  const htmlToReactParser = new Parser()
  return data && (
    <ListItem p={5} shadow='md' borderWidth='1px' bg='gray.200'>
      <Heading size='sm'>{data.by} : {setTime(data.time)}</Heading>
      <Text size='sm'>{htmlToReactParser.parse(data.text)}</Text>
      {data.kids && 
        <List>
          {data.kids.map(commentId => <Comment key={commentId} id={commentId} isFetching={isFetching}/>)}
        </List>}
    </ListItem>
  )
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default memo(Comment)