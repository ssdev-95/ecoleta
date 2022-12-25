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
}

type CollectorResponse = Omit<Collector, 'whatsapp'|'number'> & {
	whatsapp:number
	coords:string
}

export function mapHttpResponse(raw:CollectorResponse): Collector {
	const { whatsapp, email, street:stRaw, ...rest } = raw
	const [street, number] = stRaw.split(', ')
	return {
		whatsapp: `https://wa.me/${whatsapp}`,
		email: `mailto:${email}`,
		number: parseInt(number),
		street,
		...rest
	}
}
