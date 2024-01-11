import { Button, Icon } from '@amsterdam/design-system-react'
import { ChevronLeftIcon } from '@amsterdam/design-system-react-icons'

const FormNavigation = ({ firstPage, lastPage }: { firstPage?: boolean; lastPage?: boolean }) => (
  <div className="signalen-form-navigation">
    {!firstPage && (
      <Button variant="tertiary">
        <Icon svg={ChevronLeftIcon} size="level-6" />
        Vorige
      </Button>
    )}
    <Button type="submit">{lastPage ? 'Versturen' : 'Volgende'}</Button>
  </div>
)

export default FormNavigation
