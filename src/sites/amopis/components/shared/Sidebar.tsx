import { Column, Paragraph } from '@amsterdam/design-system-react'
import {
  DocumentTextIcon,
  ExternalLinkIcon,
  HousingIcon,
  StopIcon,
  SuitcaseIcon,
} from '@amsterdam/design-system-react-icons'

export const Sidebar = () => (
  <div className="amopis-sidebar">
    <Column>
      <Column className="amsterdam-column--halign-center" gap="xs">
        <HousingIcon fill="white" width={24} />
        <Paragraph inverseColor size="small">
          Dashboard
        </Paragraph>
      </Column>
      <Column className="amsterdam-column--halign-center" gap="xs">
        <SuitcaseIcon fill="white" width={24} />
        <Paragraph inverseColor size="small">
          Projecten
        </Paragraph>
      </Column>
      <Column className="amsterdam-column--halign-center" gap="xs">
        <DocumentTextIcon fill="white" width={24} />
        <Paragraph inverseColor size="small">
          Rapportages
        </Paragraph>
      </Column>
      <Column className="amsterdam-column--halign-center" gap="xs">
        <ExternalLinkIcon fill="white" width={24} />
        <Paragraph inverseColor size="small">
          Analyses
        </Paragraph>
      </Column>
      <Column className="amsterdam-column--halign-center" gap="xs">
        <StopIcon fill="white" width={24} />
        <Paragraph inverseColor size="small">
          Instellingen
        </Paragraph>
      </Column>
    </Column>
  </div>
)
