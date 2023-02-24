import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";
import {
  IconBrandNpm,
  IconBrandReact,
  IconBrandAngular,
  IconBrandVue,
  IconBrandSvelte
} from "@tabler/icons";

export interface FrameworkTabsProps {
  children: any[];
  tabs?: string[];
}

const FRAMEWORK_INFOS: Record<string, { icon: JSX.Element; title: string; }> = {
  react: {
    icon: <IconBrandReact width="18" height="18" />,
    title: "React",
  },
  angular: {
    icon: <IconBrandAngular width="18" height="18" />,
    title: "Angular",
  },
  vue2: {
    icon: <IconBrandVue width="18" height="18" />,
    title: "Vue@2",
  },
  vue3: {
    icon: <IconBrandVue width="18" height="18" />,
    title: "Vue@3",
  },
  svelte: {
    icon: <IconBrandSvelte width="18" height="18" />,
    title: "Svelte",
  },
}
export function FrameworkTabs(props: FrameworkTabsProps) {
  const {
    tabs = ["react", "vue2", "vue3", "svelte"],
  } = props;
  return <Tabs
    groupId="options"
    defaultValue="react"
    lazy={true}
    values={tabs.map(tabName => {
      const info = FRAMEWORK_INFOS[tabName];

      return {
        label: <div className="framework-wrapper">
          {info.icon}  {info.title}
        </div>,
        value: tabName,
        attributes: {
          "data-framework": tabName,
        }
      };
    })} children={props.children} />
}
