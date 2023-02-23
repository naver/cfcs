#!/usr/bin/env node
'use strict';

const { program } = require('commander');

// cfcs lerna update
program
  .command("lerna", "")
  .argument('<service>', 'Lerna를 위한 CFCs 서비스(테스트)')
  .action(service => {
    import("./dist/lerna.js").then(lerna => {
      lerna.lernaUpdate();
    });
  });

program.parse();
