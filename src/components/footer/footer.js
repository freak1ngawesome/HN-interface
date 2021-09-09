import { Center, Link } from '@chakra-ui/react'

function Footer(){
  return(
    <Center as='footer' height='40px' p={5} bg='gray.200' shadow='md' borderWidth='1px'>
      <Link href='https://github.com/freak1ngawesome' isExternal>@freak1ngawesome</Link>
    </Center>
  )
}

export default Footer