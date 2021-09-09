import React, {useState, useEffect} from 'react'
import Item from '../../item/item.js'
import Preloader from '../../preloader/preloader'
import { List, Box, IconButton, Center } from '@chakra-ui/react'
import { RepeatIcon } from '@chakra-ui/icons'
import { useGetLastNewsIdsQuery } from '../../../slices/apiSlice'

function Main(){
  const {data, isLoading, isFetching, isError, refetch} = useGetLastNewsIdsQuery()

  const [itemsCount, setItemsCount] = useState(10)

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

  function handleScroll(e) {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setItemsCount(count => count + 10 > 100 ? 100 : count + 10)
    }
  }
  const handleRefreshButton = function() {
    refetch()
  }
  if (isError) return <Center height='100px'>Ошибка</Center>
  if (isLoading) return <Preloader/>

  return (
    <>
      <Box p={5} shadow='md' borderWidth='1px' mb='20px'>
        <IconButton aria-label='Refresh' icon={<RepeatIcon />} onClick={handleRefreshButton}/>
      </Box>
      <List spacing='5px'>
        {data.slice(0, itemsCount).map(id => <Item key={id} id={id} isFetching={isFetching}/>)}
      </List>
    </>
  ) 
}

export default Main