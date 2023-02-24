import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
import data from "../data";
import styles from "./index.module.css";

function Card(props: typeof data[number]) {
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <div className="card shadow--md">
      <div className="card__image">
        <div className={styles.thumbWrapper}>
          <img
            className={styles.thumb}
            src={
              props.thumb
                ? withBaseUrl(`logos/${props.thumb}`)
                : withBaseUrl("/thumb/placeholder.png")
            }
          />
        </div>
      </div>
      <div className="card__body">
        <div className={styles.title}>
          <Link to={`https://github.com/naver/${props.repo}`}>
            {props.title}
          </Link>
        </div>
        <div className={styles.desc}>
          <span>{props.desc}</span>
        </div>
      </div>
      <div className="card__footer">
        {props.type === "reactive" && (
          <>
            <h4 className={styles.codesTitle}>Codes</h4>
            <div className={styles.codes}>
              <Link to={`https://github.com/naver/${props.repo}/blob/${props.corePath}`}>Core</Link>
              <Link to={`https://github.com/naver/${props.repo}/blob/${props.reactPath}`}>React</Link>
              <Link to={`https://github.com/naver/${props.repo}/blob/${props.vue2Path}`}>Vue 2</Link>
              <Link to={`https://github.com/naver/${props.repo}/blob/${props.vue3Path}`}>Vue 3</Link>
              <Link to={`https://github.com/naver/${props.repo}/blob/${props.sveltePath}`}>Svelte</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default function Page(): JSX.Element {
  return (
    <Layout title="Demo">
      <main className="container margin-vert--lg">
        <h2>CFCs Reactive Components</h2>
        <div className={styles.grid}>
          {data
            .filter((item) => item.type === "reactive")
            .map((item, idx) => (
              <Card key={idx} {...item} />
            ))}
        </div>
        <p />
        <h2>CFCs DOM Components</h2>
        <div className={styles.grid}>
          {data
            .filter((item) => item.type === "dom")
            .map((item, idx) => (
              <Card key={idx} {...item} />
            ))}
        </div>
      </main>
    </Layout>
  );
}
