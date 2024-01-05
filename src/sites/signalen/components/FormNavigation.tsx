import { Button } from '@amsterdam/design-system-react'

const FormNavigation = ({ firstPage, lastPage }: { firstPage?: boolean; lastPage?: boolean }) => (
  <div className="signalen-form-navigation">
    {!firstPage && <Button variant="tertiary">Vorige</Button>}
    <Button type="submit">{lastPage ? 'Versturen' : 'Volgende'}</Button>
  </div>
)

export default FormNavigation
