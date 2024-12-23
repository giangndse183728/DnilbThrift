import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Homepage'
import Login from '../pages/Login/Login'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'

// Layout component to handle header/footer visibility
const Layout = ({ children, showHeader = true, showFooter = true }) => {
  return (
    <div>
      {showHeader && <Header />}
      {children}
      {showFooter && <Footer />}
    </div>
  )
}

export const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/login',
    element: (
      <Layout showHeader={false} showFooter={false}>
        <Login />
      </Layout>
    ),
  },
])