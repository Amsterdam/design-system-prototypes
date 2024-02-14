import { Button, Icon } from '@amsterdam/design-system-react'
import { ChevronLeftIcon } from '@amsterdam/design-system-react-icons'
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
      <Link to={backlinkUrl} className="signalen-back-link">
        <Icon svg={ChevronLeftIcon} />
        Vorige
      </Link>
    )}
    <Button type="submit">{lastPage ? 'Versturen' : 'Volgende'}</Button>
  </div>
)

export default FormNavigation
