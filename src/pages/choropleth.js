import Head from 'next/head';

import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import styles from '@styles/Home.module.scss';
import Map from '@components/Map';
import { features } from '../../data/map_data/us-states-poc.json';

const mapCenter = [37.8, -96]
const zoom = 5
const height = "1000";
const width = "600";

export default function Choropleth() {
  return (
    <Layout>
      <Head>
        <title>Choropleth POC</title>
      </Head>

      <Section>
        <Container>
          <h1 className={styles.title}>
            Choropleth POC
          </h1>
          <Map className={styles.homeMap} width={width} height={height} center={mapCenter} zoom={zoom}>
            {({ TileLayer, GeoJSON }) => (
              <>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GeoJSON data={features} ></GeoJSON>
              </>
            )}
          </Map>











        </Container>
      </Section>
    </Layout>
  )
}