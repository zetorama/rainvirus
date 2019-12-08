import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ErrorBoundary } from 'react-error-boundary'

const ErrorReport = ({ componentStack, error }) => (
  <div className='Error'>
    <p><strong>Oops! An error occured!</strong></p>
    <p>Here’s what we know…</p>
    <p><strong>Error:</strong> {error.toString()}</p>
    <p>
      <strong>Stacktrace:</strong>
      <pre>{componentStack}</pre>
    </p>
  </div>
)

const Index = () => (
  <ErrorBoundary FallbackComponent={ErrorReport}>
    <App />
  </ErrorBoundary>
)

ReactDOM.render(<Index />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
