import { useRouter } from 'next/router'
import React from 'react'

export default function userScreen() {
  // const router = useRouter()
  const {userId} = router.query

  return (
    <div>userScreen</div>
  )
}
