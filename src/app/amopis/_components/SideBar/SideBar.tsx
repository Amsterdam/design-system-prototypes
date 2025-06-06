import { Column, Paragraph } from '@amsterdam/design-system-react'
import {
  CogwheelIcon,
  DocumentsIcon,
  FolderIcon,
  HouseIcon,
  LineChartUpIcon,
} from '@amsterdam/design-system-react-icons'

export function Sidebar() {
  return (
    <div className="amopis-sidebar">
      <Column gap="x-large">
        <Column alignHorizontal="center" gap="x-small">
          <HouseIcon fill="white" width={24} />
          <Paragraph color="inverse" size="small">
            Dashboard
          </Paragraph>
        </Column>
        <Column alignHorizontal="center" gap="x-small">
          <FolderIcon fill="white" width={24} />
          <Paragraph color="inverse" size="small">
            Projecten
          </Paragraph>
        </Column>
        <Column alignHorizontal="center" gap="x-small">
          <DocumentsIcon fill="white" width={24} />
          <Paragraph color="inverse" size="small">
            Rapportages
          </Paragraph>
        </Column>
        <Column alignHorizontal="center" gap="x-small">
          <LineChartUpIcon fill="white" width={24} />
          <Paragraph color="inverse" size="small">
            Analyses
          </Paragraph>
        </Column>
        <Column alignHorizontal="center" gap="x-small">
          <CogwheelIcon fill="white" width={24} />
          <Paragraph color="inverse" size="small">
            Instellingen
          </Paragraph>
        </Column>
      </Column>
    </div>
  )
}
