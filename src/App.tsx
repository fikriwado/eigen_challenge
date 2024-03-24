import { ReactNode } from 'react'

interface AppProps {
  children: ReactNode
}

const App: React.FC<AppProps> = ({ children }) => (
  <div className='App'>{children}</div>
)

export default App
