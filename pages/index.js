import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../Components/Layouts'
import data from '../utils/data'

export default function Home() {
  const data_filter = data.items.filter((item) => item.qty >= 30)
  return (
    <Layout>
      <div>
        <h1>Menu</h1>
        <ul>
          {data_filter.map((item) => (
            <li key={item.id}>{item.qty}</li>
          ))}
          <li>Cash Advance</li>
          <li>Cash Advance</li>
          <li>Cash Advance</li>
          <li>Cash Advance</li>
        </ul>
      </div>
    </Layout>
  )
}
