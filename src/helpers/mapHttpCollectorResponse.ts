interface Collector {
	id:string
	name:string
	categories:string
	city:string
	uf:string
	street:string
	number:number
	whatsapp:string
	email:string
	picture: string
	mapUrl:string
}

type CollectorResponse = Omit<Collector, 'whatsapp'|'number'|'mapUrl'> & {
	whatsapp:number
	coords:string
}

export function mapHttpResponse(raw:CollectorResponse): Collector {	
	const {
		whatsapp, email, street:stRaw, coords, ...rest
	} = raw
	
	const [street, number] = stRaw.split(', ')
	const mapUrl = `http://maps.google.com/maps?daddr=${coords}`

	return {
		whatsapp: `https://wa.me/${whatsapp}`,
		email: `mailto:${email}`,
		number: parseInt(number),
		street,
		mapUrl,
		...rest
	}
}
