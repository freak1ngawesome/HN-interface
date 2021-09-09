import React, { useState } from 'react'
import Comment from './comment'
import { Skeleton, ListItem, Heading, Text, Link, List } from '@chakra-ui/react'
import {Parser} from 'html-to-react'
import { useGetNewsDataByIdQuery } from '../../slices/apiSlice'
import { setTime } from '../../services/setTime.js'
import PropTypes from 'prop-types'

function RootComment({id, isFetching}) {
  const [isOpen, setIsOpen] = useState(false)
  const { data, isLoading, refetch } = useGetNewsDataByIdQuery(id)
  if (isFetching) {refetch()}
  const handleClick = function() {
    setIsOpen(!isOpen)
  }
  const htmlToReactParser = new Parser()
  if (isLoading) return <Skeleton height='60px'/>
  return data && (
    <ListItem p={5} shadow='md' borderWidth='1px'>
      <Heading size='sm'>{data.by} : {setTime(data.time)}</Heading>
      <Text as='div' size='sm'>{htmlToReactParser.parse(data.text)}</Text>
      {data.kids && <Link onClick={handleClick}>{isOpen ? 'Свернуть комментарии' : 'Показать комментарии'}</Link>}
      {isOpen && 
        <List>
          {data.kids.map(commentId => <Comment key={commentId} id={commentId} isFetching={isFetching}/>)}
        </List>}
    </ListItem>
  )
}

RootComment.propTypes = {
  id: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default RootComment