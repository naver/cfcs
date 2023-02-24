import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import Scene from "scenejs";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
import EasilyReactiveComponent from "../components/EasilyReactiveComponent";

export default () => {
  const { withBaseUrl } = useBaseUrlUtils();
  useEffect(() => {
    const scene = new Scene(
      {
        ".left-to-right .logo-stick-left": {
          0: {
            transform: "translate(-167px, -200px) translateX(-50%) skew(40deg)",
          },
          0.6: {
            transform: "translate(0px, 0px) translateX(-50%) skew(40deg)",
          },
          5: "",
        },
        ".left-to-right .logo-stick-right": {
          0.4: {
            transform: "translate(-167px, -200px) translateX(-50%) skew(40deg)",
          },
          1.2: {
            transform: "translate(0px, 0px) translateX(-50%) skew(40deg)",
          },
          5: "",
        },
        ".right-to-left .logo-stick": {
          0.6: {
            transform: "translate(167px, -200px) translateX(-50%) skew(-40deg)",
          },
          1.4: {
            transform: "translate(0px, 0px) translateX(-50%) skew(-40deg)",
          },
          5: "",
        },
      },
      {
        selector: true,
        easing: "ease-out",
        iterationCount: "infinite",
      }
    );

    scene.playCSS();

    return () => {
      scene.endCSS();
    };
  }, []);
  return (
    <Layout>
      <div className="home-container">
        <div className="cfcs-logo">
          <div className="left-to-right">
            <div className="logo-stick logo-stick-left"></div>
            <div className="logo-stick logo-stick-right"></div>
          </div>
          <div className="right-to-left">
            <div className="logo-stick"></div>
          </div>
        </div>
        <h1>Cross Framework Components</h1>
        <p className="home-description">
          Write once, create framework components that supports React, Vue, Svelte, and more.
        </p>
        <a
          className="home-button button button--outline button--primary"
          href={withBaseUrl("./docs")}
        >
          Getting Started
        </a>&nbsp;&nbsp;
        <a
          className="home-button button button--outline button--primary"
          href={withBaseUrl("./docs")}
        >
          Examples
        </a>
        <div className="home-features">
          <div className="home-row">
            <div className="home-column">
              <h2>Write Once</h2>
              <p>Write how you already know how to use your component, and it supports a variety of frameworks. There is no need to duplicate code for each framework.</p>
            </div>
            <div className="home-column">
              <h2>Use Anywhere</h2>
              <p>CFCs make them framework components without compromising the framework's component-guided usage.</p>
            </div>
            <div className="home-column">
              <h2>With TypeScript</h2>
              <p>All source code is written in Typescript. From Events, Methods, and State, Type is supported with usage suitable for the framework.</p>
            </div>
            </div>
          <h2>CFCs Reactive</h2>
          <p className="home-description">
          CFCs Reactive can support multiple frameworks as a Reactive Component, a utility component that is state-based and does not create a UI.
          <br /><br />
          It is possible to support frameworks with as much your <b>reactive adapter code</b> as possible by changing only the <b>module name</b>. <br />
          </p>
          <EasilyReactiveComponent />
          <p className="home-button-wrapper">
            <a
              className="home-button button button--outline button--primary"
              href={withBaseUrl("./docs/cfcs-reactive-support-frameworks")}
            >
              Support Frameworks with one code
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};
