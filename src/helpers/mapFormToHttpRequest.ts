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
}

type MappedFormData = Omit<MapFormDataProps,'picture'|'imagePreview'|'categories'|'number'|'whatsapp'|'state'> & {
	uf: string
	whatsapp: number
	categories: string
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
	  whatsapp, street, number, state, picture, imagePreview, categories,	...rest
	} = data

	return {
		...rest,
		uf: state,
		whatsapp: parseInt(whatsapp),
		street: [street, number].join(', '),
		categories: categories.join(','),
		picture: {
			name: picture.name,
			image: imagePreview,
			type: picture.type
		}
	}
}
