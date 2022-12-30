interface MapFormDataProps {
	name: string
	email: string
	whatsapp: string
	street: string
	number: string
	city: string
	state: string
	picture: File
	imagePreview: string
	categories: string[]
	coords: number[]
}

export type MappedFormData = Omit<MapFormDataProps,'picture'|'imagePreview'|'categories'|'number'|'whatsapp'|'state'> & {
	uf: string
	whatsapp: number
	categories: string[]
	picture: {
		name: string
		image: string
		type: string
	}
}

export function mapFormData(
	data:MapFormDataProps
):MappedFormData {
	const {
	  whatsapp,
		street,
		number,
		picture,
		state: uf,
		imagePreview: image,
		...rest
	} = data

	return {
		...rest,
		uf,
		whatsapp: parseInt(whatsapp),
		street: [street, number].join(', '),
		picture: {
			image,
			name: picture.name,
			type: picture.type
		}
	}
}
