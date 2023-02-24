import React from "react";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";
import { FrameworkTabs } from "./FrameworkTabs";

export default () => {
  return (
    <FrameworkTabs>
      <TabItem value="react">
        <CodeBlock className="language-shell">
          npm install @cfcs/react
        </CodeBlock>
        <CodeBlock className="language-jsx">
          {`import { useReactive } from "@cfcs/react";

export function useReactiveComponent() {
  return useReactive(REACTIVE_ADAPTER);
}`}
        </CodeBlock>
      </TabItem>
      <TabItem value="vue2">
        <CodeBlock className="language-shell">
          npm install @cfcs/vue2
        </CodeBlock>
        <CodeBlock className="language-jsx">
          {`import { useReactive } from "@cfcs/vue2";

export function useReactiveComponent() {
  return useReactive(REACTIVE_ADAPTER);
}`}
        </CodeBlock>
      </TabItem>
      <TabItem value="vue3">
        <CodeBlock className="language-shell">
          npm install @cfcs/vue3
        </CodeBlock>
        <CodeBlock className="language-jsx">
          {`import { useReactive } from "@cfcs/vue3";

export function useReactiveComponent() {
  return useReactive(REACTIVE_ADAPTER);
}`}
        </CodeBlock>
      </TabItem>
      <TabItem value="svelte">
        <CodeBlock className="language-shell">
          npm install @cfcs/svelte
        </CodeBlock>
        <CodeBlock className="language-jsx">
          {`import { useReactive } from "@cfcs/svelte";

export function useReactiveComponent() {
  return useReactive(REACTIVE_ADAPTER);
}`}
        </CodeBlock>
      </TabItem>
    </FrameworkTabs>
  );
};
