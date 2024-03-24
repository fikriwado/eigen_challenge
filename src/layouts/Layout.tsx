import { ReactNode } from 'react'
import App from '../App'
import { Col, Row } from 'antd'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <App>
    <Row justify={'center'}>
      <Col style={{ maxWidth: '1200px' }}>{children}</Col>
    </Row>
  </App>
)

export default Layout
