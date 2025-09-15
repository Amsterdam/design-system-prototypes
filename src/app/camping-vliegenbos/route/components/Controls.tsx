import { Button } from '@amsterdam/design-system-react'
import { PlusIcon, MinusIcon } from '@amsterdam/design-system-react-icons'
import { useMapInstance } from './MapContext'

const Controls = () => {
  const mapInstance = useMapInstance()

  const handleZoomInClick = () => {
    if (mapInstance) {
      mapInstance?.setZoom(mapInstance.getZoom() + 1)
    }
  }
  const handleZoomOutClick = () => {
    if (mapInstance) {
      mapInstance?.setZoom(mapInstance.getZoom() - 1)
    }
  }

  return (
    <div
      style={{
        bottom: 'var(--ams-space-md, 24px)',
        display: 'inline-flex',
        flexDirection: 'column',
        gap: 'var(--ams-space-sm, 8px)',
        position: 'absolute',
        right: 'var(--ams-space-md, 24px)',
        zIndex: 400,
      }}
    >
      <Button variant="secondary" iconOnly icon={PlusIcon} onClick={handleZoomInClick}>
        Zoom in
      </Button>
      <Button variant="secondary" iconOnly icon={MinusIcon} onClick={handleZoomOutClick}>
        Zoom out
      </Button>
    </div>
  )
}

export default Controls
