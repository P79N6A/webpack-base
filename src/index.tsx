import React from 'react'
import ReactDom from 'react-dom'
import './index.less'

function App() {
  return (
    <div className="ss">
      <p className="a">
        <span className="d">d</span>
      </p>
      <p className="b">
        <span className="d">e</span>
      </p>
      <p className="c">
        <span className="d">f</span>
      </p>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('app'))

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/service-worker.js')
//       .then(registration => {
//         console.log('SW 已注册: ', registration)
//       })
//       ['catch'](registrationError => {
//         console.log('SW 注册失败: ', registrationError)
//       })
//   })
// }
