import Image from 'next/image'

import styled from '../../styles/User.module.css'

export default function index() {
  return (
    <div className={styled.user}>
      <Image src="" alt="" className={styled.users} />
      <h3 className={styled.username}>Username</h3>
    </div>
  )
}
