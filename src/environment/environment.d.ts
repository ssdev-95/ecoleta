//Get your apiKey at geoapify
//BASE_URL?lat=LATITUDE&lon=LONGITUDE&apiKey=YOUR_KEY
export interface Environment {
	production: boolean
	GEO_API_URL: string
	GEO_API_KEY: string
	ECOLETA_API_URL: string
}
