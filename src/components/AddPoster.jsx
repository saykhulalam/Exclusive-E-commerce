import React from 'react'
import Image from '../components/Image'
import addbanner from '../assets/addimg.png'
import Container from './Container'
import { Link } from 'react-router-dom'
const AddPoster = () => {
  return (
    <>
      <Container>
      <Link>
      <Image src={addbanner}/></Link>
      </Container>
    </>
  )
}

export default AddPoster
