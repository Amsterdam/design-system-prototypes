import { ErrorPage } from '../../shared/pages/ErrorPage'
import { siteUrl } from './constants.ts'
import { Add } from './pages/Add.tsx'
import { Contact } from './pages/Contact.tsx'
import { Describe } from './pages/Describe.tsx'
import { SignalenRootPage } from './pages/SignalenRootPage.tsx'
import { Summary } from './pages/Summary.tsx'
import { Thanks } from './pages/Thanks.tsx'

export const routes = {
  path: siteUrl,
  element: <SignalenRootPage />,
  errorElement: <ErrorPage />,
  children: [
    {
      element: <Describe />,
      path: `${siteUrl}beschrijf`,
    },
    {
      element: <Add />,
      path: `${siteUrl}vul-aan`,
    },
    {
      element: <Contact />,
      path: `${siteUrl}contact`,
    },
    {
      element: <Summary />,
      path: `${siteUrl}versturen`,
    },
    {
      element: <Thanks />,
      path: `${siteUrl}bedankt`,
    },
  ],
}
