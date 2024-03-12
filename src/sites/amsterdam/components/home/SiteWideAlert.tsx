import { Alert, Grid } from '@amsterdam/design-system-react'
import { ReactNode, useState } from 'react'

type SiteWideAlertProps = {
  children: ReactNode
}

export const SiteWideAlert = ({ children }: SiteWideAlertProps) => {
  const [visible, setVisible] = useState(true)

  return (
    visible && (
      <Grid>
        <Grid.Cell span="all">
          <Alert className="ams-mb--md" closeable onClose={() => setVisible(false)}>
            {children}
          </Alert>
        </Grid.Cell>
      </Grid>
    )
  )
}
