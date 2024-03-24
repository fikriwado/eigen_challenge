import { useEffect, useState } from 'react'
import { Layout } from '../layouts'
import { Row, Col, Avatar, Card } from 'antd'
import axios from 'axios'

interface Post {
  id: string
  title: string
  description: string
  urlToImage: string
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios(
        `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c898b261f2374ad7bec6a9ae7022e088`
      )
      setPosts(data.articles)
    }
    fetchPosts().then((r) => r)
  }, [])

  return (
    <Layout>
      <Row justify={'center'}>
        <Col>
          <div style={{ padding: '100px 50px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>EIGEN TEST</h1>
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 24]}>
        {posts.map((post) => (
          <Col className='gutter-row' md={6}>
            <Card cover={<img alt='example' src={post.urlToImage} />}>
              <Card.Meta
                avatar={
                  <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=8' />
                }
                title={post.title}
                description={post.description}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Layout>
  )
}

export default Home
