import colorArray from '$lib/config/optionArrays/colorArray';

export const toolbarOptions = [
	[{ header: [1, 2, 3, 4, 5, 6, false] }],
	['bold', 'italic', 'underline', 'strike'], // toggled buttons
	['blockquote', 'code-block'],
	['link', 'image', 'video', 'formula'],
	[{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
	[{ script: 'sub' }, { script: 'super' }], // superscript/subscript
	[{ indent: '-1' }, { indent: '+1' }], // outdent/indent
	[{ color: [...colorArray] }], //, { background: [] }], // dropdown with defaults from theme
	[{ align: [] }]
	//[{ direction: 'rtl' }], // text direction
	//[{ font: [] }],
	// ['clean'] // remove formatting button
];
