import * as React from 'react';

import {GoogleMap, Marker, withGoogleMap} from "react-google-maps";
import {MapProps} from "../../../types/interfaces/propsAndState";

const MapWithAMarker = withGoogleMap((props: any) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={props.children[0]}
    defaultOptions={{
      streetViewControl: false,
      scaleControl: false,
      mapTypeControl: false,
      panControl: false,
      zoomControl: false,
      rotateControl: false,
      fullscreenControl: false
    }}
  >
    <Marker
      position={props.children[0]}
    />
  </GoogleMap>
);

const Map: React.SFC<MapProps> = ({lat, lon}) => <MapWithAMarker
  containerElement={<div style={{height: `230px`}}/>}
  mapElement={<div style={{height: `100%`}}/>}
  children={[new google.maps.LatLng(parseFloat(lat.toString()), parseFloat(lon.toString()))]}
/>;

export default Map;