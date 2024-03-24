import { useEffect, useState } from 'react'
import { Layout } from '../../layouts'
import { Row, Col, Avatar, Spin, Image, Space } from 'antd'
import { useParams, NavLink } from 'react-router-dom'
import axios from 'axios'
import './detail.css'

interface Post {
  title: string
  urlToImage: string
  publishedAt: string
  author: string
  content: string
}

const Detail = () => {
  const { id } = useParams()
  const [post, setPost] = useState<Post | null>(null) // State for a single post

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axios.get(
          `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c898b261f2374ad7bec6a9ae7022e088`
        )
        const selectedPost = data.articles[parseInt(id!) - 1]
        setPost(selectedPost)
      } catch (error) {
        console.error('Error fetching post:', error)
      }
    }

    if (id) {
      fetchPost()
    }
  }, [id])

  return (
    <Layout>
      <Row justify={'center'}>
        <Col>
          <div style={{ padding: '100px 50px' }}>
            <NavLink to={'/'} style={{ fontSize: '24px', fontWeight: 'bold' }}>
              EIGEN TEST
            </NavLink>
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 24]} justify={'center'}>
        <Col className='gutter-row' md={12}>
          {post ? (
            <>
              <Space
                direction='vertical'
                size='middle'
                className='article--header'
              >
                <p className='article--date'>{post.publishedAt}</p>
                <h1 className='article--title'>{post.title}</h1>
                <Space align='center' className='article--author'>
                  <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=8' />{' '}
                  <span>{post.author}</span>
                </Space>
                <Image className='article--image' src={post.urlToImage} />
              </Space>
              <article className='article--body'>{post.content}</article>
            </>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <Spin />
            </div>
          )}
        </Col>
      </Row>
    </Layout>
  )
}

export default Detail
