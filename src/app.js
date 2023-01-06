import ReactDiscoveryUI from '@smartcitiesdata/react-discovery-ui'
import { Component } from 'react'
import HelmetStyles from './HelmetStyles';
import Header from './components/header'
import Footer from './components/footer'

export default class App extends Component {
  render() {
    return (
      <>
        <HelmetStyles />
        <Header />
        <main aria-label="Main content">
          <ReactDiscoveryUI />
        </main>
        <Footer />
      </>
    );
  }
}
