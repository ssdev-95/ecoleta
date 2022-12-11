import fs from 'node:fs'
import {throwIfEmpty} from 'rxjs'

function getIsProduction(args) {
	return args.includes('--production')
}

function getPath(isProduction) {
  if(isProduction) {
		return'src/environment/environment.prod.ts'
	} else {
		return 'src/environment/environment.dev.ts'
	}
}

function verifyFileExistence(path) {
	//let fileExists = false

	try {
		fs.readFileSync(path)
		return true
	} catch {
		return false
	}
}

function createEnvironmentFile(path, data) {
	return fs.writeFile(path, data, (err) => {
		if(err) throw err;
		console.log('File saved, finishing ..')
	})
}

function destroyObsoleteEnviromentFile(path) {
	fs.rm(path, (err) => {
		if(err) throw err;
		console.log('Deleting existent environment file ..')
	})
}

function bootstrapEnvironment() {
	const args = process.argv
	const isProduction = getIsProduction(args)
	const path = getPath(isProduction)
	const environmentSetup = verifyFileExistence(path)

	if(environmentSetup) {
		destroyObsoleteEnviromentFile(path)
	}

	const data = `export const environment = {
	production: ${isProduction}
}`
	
	setTimeout(() => {
  	createEnvironmentFile(path, data)
	}, 500)
}

bootstrapEnvironment()
