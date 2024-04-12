import { Button, Icon } from '@amsterdam/design-system-react'
import { Link } from '../../../../shared/components/Link'
import { ChevronLeftIcon } from '@amsterdam/design-system-react-icons'

const FormNavigation = ({
  firstPage,
  lastPage,
  backlinkUrl,
}: {
  firstPage?: boolean
  lastPage?: boolean
  backlinkUrl?: string
}) => (
  <div className="amsterdam-form-navigation">
    {!firstPage && backlinkUrl && (
      <Link to={backlinkUrl} className="signalen-back-link">
        <Icon svg={ChevronLeftIcon} size="level-5" />
        Vorige
      </Link>
    )}
    <Button type="submit">{lastPage ? 'Versturen' : 'Volgende'}</Button>
  </div>
)

export default FormNavigation
