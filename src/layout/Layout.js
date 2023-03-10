import { Header } from '../components/header/Header'
import { Home } from '../pages/home/Home'

export const Root = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Home />
      </div>
    </div>
  )
}
