import { Button, Icon } from '@amsterdam/design-system-react'
import { Link } from './Link'
import { ChevronLeftIcon, ChevronRightIcon } from '@amsterdam/design-system-react-icons'

import './form-navigation.css'

type FormNavigationProps = {
  isLastPage?: boolean
  previousPageUrl?: string
}

const FormNavigation = ({ isLastPage, previousPageUrl }: FormNavigationProps) => (
  <div className="ams-form-navigation">
    {previousPageUrl ? (
      <Link to={previousPageUrl} className="ams-form-navigation-link">
        <Icon svg={ChevronLeftIcon} size="level-5" />
        Vorige
      </Link>
    ) : (
      <span />
    )}
    <Button type="submit">
      {isLastPage ? 'Versturen' : 'Volgende'}
      <Icon svg={ChevronRightIcon} size="level-5" />
    </Button>
  </div>
)

export default FormNavigation
