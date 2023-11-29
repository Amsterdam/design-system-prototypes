import { Paragraph } from '@amsterdam/design-system-react'
import {
  DocumentTextIcon,
  ExternalLinkIcon,
  HousingIcon,
  StopIcon,
  SuitcaseIcon,
} from '@amsterdam/design-system-react-icons'

export const Sidebar = () => (
  <div className="amopis-sidebar">
    <div className="amsterdam-column amsterdam-gap-md">
      <div className="amsterdam-column amsterdam-column-halign-center">
        <HousingIcon fill="white" width={24} />
        <Paragraph inverseColor style={{ fontSize: 12 }}>
          Dashboard
        </Paragraph>
      </div>
      <div className="amsterdam-column amsterdam-column-halign-center">
        <SuitcaseIcon fill="white" width={24} />
        <Paragraph inverseColor style={{ fontSize: 12 }}>
          Projecten
        </Paragraph>
      </div>
      <div className="amsterdam-column amsterdam-column-halign-center">
        <DocumentTextIcon fill="white" width={24} />
        <Paragraph inverseColor style={{ fontSize: 12 }}>
          Rapportages
        </Paragraph>
      </div>
      <div className="amsterdam-column amsterdam-column-halign-center">
        <ExternalLinkIcon fill="white" width={24} />
        <Paragraph inverseColor style={{ fontSize: 12 }}>
          Analyses
        </Paragraph>
      </div>
      <div className="amsterdam-column amsterdam-column-halign-center">
        <StopIcon fill="white" width={24} />
        <Paragraph inverseColor style={{ fontSize: 12 }}>
          Instellingen
        </Paragraph>
      </div>
    </div>
  </div>
)
