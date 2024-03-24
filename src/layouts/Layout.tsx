import { ReactNode } from 'react'
import App from '../App'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => <App>{children}</App>

export default Layout
