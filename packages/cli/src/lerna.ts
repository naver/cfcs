/**
 * cfcs
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */
import { Project } from "@lerna/project";
import { Package } from "@lerna/package";

const exec = require('sync-exec');

let project!: Project;
let rootPackage!: Package;
let packages!: Package[];

function syncExec(command: string) {
  const result = exec(command);

  if (result.stderr) {
    console.error(result.stderr);
  } else if (result.stdout) {
    console.log(result.stdout);
  }
}

export function getProject() {
  if (!project) {
    project = new Project();
  }

  return project;
}
export function getRootPackage() {
  if (!rootPackage) {
    rootPackage = Package.lazy("./");
  }
  return rootPackage;
}

export function getPackages() {
  if (!packages) {
    packages = getProject().getPackagesSync();
  }
  return packages;
};

export function lernaUpdate() {
  const useWorkspaces = getProject().config.useWorkspaces;

  getPackages().forEach(async pkg => {
    const dependencies = pkg.dependencies || {};
    const devDependencies = pkg.devDependencies || {};
    const updatedDependencies: string[] = [];
    const updatedDevDependencies: string[] = [];

    Object.keys(dependencies).forEach(moduleName => {
      if (moduleName.startsWith("@cfcs/")) {
        updatedDependencies.push(moduleName);
      }
    });
    Object.keys(devDependencies).forEach(moduleName => {
      if (moduleName.startsWith("@cfcs/")) {
        updatedDevDependencies.push(moduleName);
      }
    });

    const moduleArgs = updatedDependencies.map(name => {
      return `${name}@latest`;
    }).join(" ");
    const devModuleArgs = updatedDevDependencies.map(name => {
      return `${name}@latest`;
    }).join(" ");
    if (moduleArgs || devModuleArgs) {
      console.log(`Update the CFCs modules of ${pkg.name}`);
    } else {
      return;
    }
    if (useWorkspaces) {
      if (moduleArgs) {
        syncExec(`yarn workspace ${pkg.name} add ${moduleArgs}`);
      }
      if (devModuleArgs) {
        syncExec(`yarn workspace ${pkg.name} add ${devModuleArgs} -D`);
      }
    } else {
      if (moduleArgs) {
        syncExec(`npm install ${moduleArgs} --prefix ${pkg.location}`);
      }
      if (devModuleArgs) {
        syncExec(`npm install ${devModuleArgs} -D --prefix ${pkg.location}`);
      }
    }
  });
}
