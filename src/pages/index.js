import Head from 'next/head';

import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Map from '@components/Map';
import Button from '@components/Button';

import styles from '@styles/Home.module.scss';


const center = [51.505, -0.09]
const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
]

const fillBlueOptions = { fillColor: 'blue' }
const fillRedOptions = { fillColor: 'red' }
const greenOptions = { color: 'green', fillColor: 'green' }
const purpleOptions = { color: 'purple' }

const multiPolygon = [
  [
    [51.51, -0.12],
    [51.51, -0.13],
    [51.53, -0.13],
  ],
  // [
  //   [51.51, -0.05],
  //   [51.51, -0.07],
  //   [51.53, -0.07],
  // ],
]


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>POC</title>
      </Head>

      <Section>
        <Container>
          <h1 className={styles.title}>
            Leaflet POC
          </h1>

          {/* <Map className={styles.homeMap} width="800" height="400" center={DEFAULT_CENTER} zoom={12}>
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={DEFAULT_CENTER}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </Map> */}


          <Map className={styles.homeMap} width="800" height="400" center={center} zoom={13}>
            {({ TileLayer,LayerGroup, Circle, FeatureGroup, Rectangle, Popup, Marker, Polygon }) => (
              <>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                 <Marker position={[51.4953, -0.100]}>
                  <Popup>
                    <div>
                      <h1> This is my title on the pop up</h1>
                      <div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m
                        </p>
                      </div>
                    </div>
                  </Popup>
                </Marker>
                <LayerGroup>
                  <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
                  <Circle
                    center={center}
                    pathOptions={fillRedOptions}
                    radius={100}
                    stroke={false}
                  />
                  <LayerGroup>
                    <Circle
                      center={[51.51, -0.08]}
                      pathOptions={greenOptions}
                      radius={100}
                    />
                  </LayerGroup>
                </LayerGroup>
                <FeatureGroup pathOptions={purpleOptions}>
                  <Popup>This popup is tied to both the Circle and the Square since its a feature group</Popup>
                  <Circle center={[51.51, -0.06]} radius={200} />
                  <Rectangle bounds={rectangle} />
                </FeatureGroup>
                <Polygon pathOptions={purpleOptions} positions={multiPolygon}>
                  <Popup> <div><h2>This is my popup </h2></div></Popup>
                </Polygon>

              </>
            )}
          </Map>
        </Container>
      </Section>
    </Layout>
  )
}
