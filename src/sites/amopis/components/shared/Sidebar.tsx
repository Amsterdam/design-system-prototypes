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
      <div className="amsterdam-column amsterdam-column-halign-center amsterdam-gap--xs">
        <HousingIcon fill="white" width={24} />
        <Paragraph inverseColor size="small">
          Dashboard
        </Paragraph>
      </div>
      <div className="amsterdam-column amsterdam-column-halign-center amsterdam-gap--xs">
        <SuitcaseIcon fill="white" width={24} />
        <Paragraph inverseColor size="small">
          Projecten
        </Paragraph>
      </div>
      <div className="amsterdam-column amsterdam-column-halign-center amsterdam-gap--xs">
        <DocumentTextIcon fill="white" width={24} />
        <Paragraph inverseColor size="small">
          Rapportages
        </Paragraph>
      </div>
      <div className="amsterdam-column amsterdam-column-halign-center amsterdam-gap--xs">
        <ExternalLinkIcon fill="white" width={24} />
        <Paragraph inverseColor size="small">
          Analyses
        </Paragraph>
      </div>
      <div className="amsterdam-column amsterdam-column-halign-center amsterdam-gap--xs">
        <StopIcon fill="white" width={24} />
        <Paragraph inverseColor size="small">
          Instellingen
        </Paragraph>
      </div>
    </Column>
  </div>
)
