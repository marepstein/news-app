import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme'
import '../styles/globals.css'

import Menu from '../components/nav/menu'
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      {/* <Layout> */}
      <Menu />
        <Component {...pageProps} />
      {/* </Layout> */}
    </ThemeProvider>
  )
}

export default MyApp;
