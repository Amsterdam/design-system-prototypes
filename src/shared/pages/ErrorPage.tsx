import { ErrorResponse, useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError() as ErrorResponse

  return (
    <div id="error-page">
      <h1>404</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText}</i>
      </p>
    </div>
  )
}
