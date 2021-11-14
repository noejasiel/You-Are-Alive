import Icon from '../assets/Marker_Icon.svg';
import L from 'leaflet'

export const IconLocation = L.icon({
    iconUrl: Icon,
    iconRetinaUrl: Icon,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35,35],
    className: "leaflet-venue-icon"
})