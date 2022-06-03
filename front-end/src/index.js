import { registerApplication, start } from 'single-spa'
import { pathToRegexp } from 'path-to-regexp'
import { importApp } from './helpers/importApp'

const regexp = pathToRegexp(location.pathname)

let importedApps = []
let shareScope = []

registerApplication({
  name: '@org/app1',
  app: () => importApp('@org/app1/Main', shareScope, importedApps),
  activeWhen: () => true
})

registerApplication({
  name: '@org/app2',
  app: () => importApp('@org/app2/Main', shareScope, importedApps),
  activeWhen: () => true
})

start();