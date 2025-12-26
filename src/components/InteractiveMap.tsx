'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'

// Dynamically import map components (client-side only)
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)

const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

const Tooltip = dynamic(
  () => import('react-leaflet').then((mod) => mod.Tooltip),
  { ssr: false }
)

interface MapLocation {
  id: string
  name: string
  description: string
  lat: number
  lng: number
  category: 'infrastructure' | 'monitoring' | 'deployment' | 'analytics'
  status: 'active' | 'pending' | 'complete'
}

const sampleLocations: MapLocation[] = [
  {
    id: '1',
    name: 'Fiber Network Deployment',
    description: 'Real-time monitoring of 150+ mile fiber rollout',
    lat: 37.7749,
    lng: -122.4194,
    category: 'infrastructure',
    status: 'active'
  },
  {
    id: '2',
    name: 'Utility Grid Analysis',
    description: 'AI-powered grid optimization and anomaly detection',
    lat: 40.7128,
    lng: -74.0060,
    category: 'analytics',
    status: 'active'
  },
  {
    id: '3',
    name: 'Change Detection Zone',
    description: 'Satellite-based compliance monitoring (BEAD program)',
    lat: 41.8781,
    lng: -87.6298,
    category: 'monitoring',
    status: 'active'
  },
  {
    id: '4',
    name: 'Smart City Initiative',
    description: 'Geospatial intelligence for urban planning',
    lat: 34.0522,
    lng: -118.2437,
    category: 'deployment',
    status: 'complete'
  },
  {
    id: '5',
    name: 'Regional ISP Network',
    description: '10,000+ homes fiber-to-home deployment tracking',
    lat: 47.6062,
    lng: -122.3321,
    category: 'infrastructure',
    status: 'active'
  }
]

export default function InteractiveMap() {
  const [isClient, setIsClient] = useState(false)
  const [customIcon, setCustomIcon] = useState<any>(null)

  useEffect(() => {
    setIsClient(true)

    // Fix for default marker icon in Next.js
    if (typeof window !== 'undefined') {
      const L = require('leaflet')
      
      // Create custom icon
      const icon = L.divIcon({
        className: 'custom-marker',
        html: `
          <div style="
            background: linear-gradient(135deg, #4A9888 0%, #7FFFEB 100%);
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: 3px solid #11231F;
            box-shadow: 0 4px 12px rgba(127, 255, 235, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          ">
            <div style="
              width: 8px;
              height: 8px;
              background: white;
              border-radius: 50%;
              box-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
            "></div>
          </div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        popupAnchor: [0, -12]
      })
      
      setCustomIcon(icon)
    }
  }, [])

  if (!isClient) {
    return (
      <div className="w-full h-[600px] bg-gradient-to-br from-brand-deep to-brand-main rounded-lg border border-brand-text/20 flex items-center justify-center">
        <div className="text-brand-text">Loading map...</div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-2xl border border-brand-text/20">
      <MapContainer
        center={[39.8283, -98.5795]} // Center of USA
        zoom={4}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {customIcon && sampleLocations.map((location) => (
          <Marker 
            key={location.id} 
            position={[location.lat, location.lng]}
            icon={customIcon}
          >
            <Popup>
              <div className="p-2 min-w-[200px]">
                <h3 className="font-bold text-brand-main mb-1">{location.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{location.description}</p>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-1 rounded ${
                    location.status === 'active' 
                      ? 'bg-green-100 text-green-700'
                      : location.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {location.status}
                  </span>
                  <span className="text-xs text-gray-500 capitalize">
                    {location.category}
                  </span>
                </div>
              </div>
            </Popup>
            <Tooltip direction="top" offset={[0, -10]} opacity={0.9}>
              <span className="text-sm font-medium">{location.name}</span>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>

      {/* Map Legend */}
      <div className="absolute bottom-6 left-6 glass rounded-lg p-4 z-[1000] max-w-xs">
        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
          <svg className="w-5 h-5 text-brand-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Live Deployments
        </h4>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-brand-text">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-brand-secondary to-brand-glow"></div>
            <span>Infrastructure Projects</span>
          </div>
          <div className="flex items-center gap-2 text-brand-text">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-brand-secondary to-brand-glow"></div>
            <span>Monitoring Zones</span>
          </div>
          <div className="flex items-center gap-2 text-brand-text">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-brand-secondary to-brand-glow"></div>
            <span>Analytics Deployments</span>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-brand-text/20">
          <div className="text-xs text-brand-text/80">
            <span className="text-brand-glow font-semibold">{sampleLocations.length}</span> active locations
          </div>
        </div>
      </div>

      {/* Map Controls Info */}
      <div className="absolute top-6 right-6 glass rounded-lg p-3 z-[1000] max-w-[200px]">
        <div className="text-xs text-brand-text space-y-1">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-brand-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
            <span>Click markers for details</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-brand-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            <span>Scroll to zoom</span>
          </div>
        </div>
      </div>
    </div>
  )
}
