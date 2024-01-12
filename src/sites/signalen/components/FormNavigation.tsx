import { Button } from '@amsterdam/design-system-react'
import { Link } from '../../../shared/components/Link'

const FormNavigation = ({
  firstPage,
  lastPage,
  backlinkUrl,
}: {
  firstPage?: boolean
  lastPage?: boolean
  backlinkUrl?: string
}) => (
  <div className="signalen-form-navigation">
    {!firstPage && backlinkUrl && (
      <Link to={backlinkUrl} variant="inList">
        Vorige
      </Link>
    )}
    <Button type="submit">{lastPage ? 'Versturen' : 'Volgende'}</Button>
  </div>
)

export default FormNavigation
