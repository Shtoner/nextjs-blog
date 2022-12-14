import dynamic from 'next/dynamic'

const MyNotSsrComponent = dynamic(
    () => import('../../components/ye'),
    { ssr: false }
  )
  
  export default function MyPage() {
    return <MyNotSsrComponent />
  }