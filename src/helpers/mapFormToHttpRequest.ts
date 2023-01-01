interface MapFormDataProps {
	name: string
	email: string
	whatsapp: string
	street: string
	number: string
	city: string
	state: string
	imagePreview: string
	categories: string[]
	coords: number[]
}

export type MappedFormData = Omit<MapFormDataProps,'imagePreview'|'categories'|'number'|'whatsapp'|'state'> & {
	uf: string
	whatsapp: number
	categories: string[]
	picture: string
}

export function mapFormData(
	data:MapFormDataProps
):MappedFormData {
	const {
	  whatsapp,
		street,
		number,
		state: uf,
		imagePreview: picture,
		...rest
	} = data

	return {
		...rest,
		uf,
		picture,
		whatsapp: parseInt(whatsapp),
		street: [street, number].join(', ')
	}
}
