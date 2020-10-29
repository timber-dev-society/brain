#!/usr/bin/env node

import React from 'react'
import importJsx from 'import-jsx'
import { render } from 'ink'
import meow from 'meow'

const ui = importJsx('./cli/ui');

const cli = meow(`
Usage
	  $ brain

	Options
		--name  Your name

	Examples
	  $ brain --name=Jane
	  Hello, Jane
`);

render(React.createElement(ui, cli.flags));
