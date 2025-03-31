import { Column, Paragraph } from '@amsterdam/design-system-react'
import {
  DocumentTextIcon,
  ExternalLinkIcon,
  HousingIcon,
  StopIcon,
  SuitcaseIcon,
} from '@amsterdam/design-system-react-icons'

export function Sidebar() {
  return (
    <div className="amopis-sidebar">
      <Column gap="x-large">
        <Column alignHorizontal="center" gap="x-small">
          <HousingIcon fill="white" width={24} />
          <Paragraph color="inverse" size="small">
            Dashboard
          </Paragraph>
        </Column>
        <Column alignHorizontal="center" gap="x-small">
          <SuitcaseIcon fill="white" width={24} />
          <Paragraph color="inverse" size="small">
            Projecten
          </Paragraph>
        </Column>
        <Column alignHorizontal="center" gap="x-small">
          <DocumentTextIcon fill="white" width={24} />
          <Paragraph color="inverse" size="small">
            Rapportages
          </Paragraph>
        </Column>
        <Column alignHorizontal="center" gap="x-small">
          <ExternalLinkIcon fill="white" width={24} />
          <Paragraph color="inverse" size="small">
            Analyses
          </Paragraph>
        </Column>
        <Column alignHorizontal="center" gap="x-small">
          <StopIcon fill="white" width={24} />
          <Paragraph color="inverse" size="small">
            Instellingen
          </Paragraph>
        </Column>
      </Column>
    </div>
  )
}
