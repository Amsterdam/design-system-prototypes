import { FunctionComponent, PropsWithChildren, useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import getCrsRd from './getCrsRd'
import { MapContext } from './MapContext'
import ReactDOMServer from 'react-dom/server'
import { Icon } from '@amsterdam/design-system-react'
import { MapMarkerOnMapIcon } from '@amsterdam/design-system-react-icons'

export type MapProps = {
  scrollWheelZoom: boolean
} & PropsWithChildren

const MapProvider: FunctionComponent<MapProps> = ({ scrollWheelZoom, children }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null)
  const createdMapInstance = useRef(false)

  useEffect(() => {
    if (containerRef.current === null || createdMapInstance.current !== false) {
      return
    }

    const map = new L.Map(containerRef.current, {
      center: L.latLng([52.3905708, 4.9281945]),
      zoom: 12,
      layers: [
        L.tileLayer('https://{s}.data.amsterdam.nl/topo_rd/{z}/{x}/{y}.png', {
          attribution: '',
          subdomains: ['t1', 't2', 't3', 't4'],
          tms: true,
        }),
      ],
      zoomControl: false,
      scrollWheelZoom,
      maxZoom: 16,
      minZoom: 6,
      crs: getCrsRd(),
      maxBounds: [
        [52.25168, 4.64034],
        [52.50536, 5.10737],
      ],
    })

    // Remove Leaflet link from the map
    map.attributionControl.setPrefix(false)

    createdMapInstance.current = true
    setMapInstance(map)

    return () => {
      if (mapInstance) mapInstance.remove()
    }
  }, [mapInstance, containerRef])

  const customMarker = L.divIcon({
    html: ReactDOMServer.renderToString(<Icon svg={MapMarkerOnMapIcon} size="heading-3" />),
    iconSize: [64, 64],
    className: 'c-marker',
  })

  useEffect(() => {
    if (mapInstance) {
      L.marker([52.3905708, 4.9281945], {
        icon: customMarker,
      }).addTo(mapInstance)
    }
  }, [mapInstance])

  return (
    <>
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '320px',
          aspectRatio: 16 / 9,
        }}
      >
        {!!mapInstance && <MapContext.Provider value={{ mapInstance }}>{children}</MapContext.Provider>}
      </div>
    </>
  )
}

export default MapProvider
