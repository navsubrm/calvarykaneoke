import { colorArray } from '$lib/config/selectInputOptionArrays';

export const toolbarOptions = [
	[{ header: [1, 2, 3, 4, 5, 6, false] }],
	['bold', 'italic', 'underline', 'strike'], // toggled buttons
	['blockquote', 'code-block'],
	['link', 'image', 'video', 'formula'],

	// [{ header: 1 }, { header: 2 }], // custom button values
	[{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
	[{ script: 'sub' }, { script: 'super' }], // superscript/subscript
	[{ indent: '-1' }, { indent: '+1' }], // outdent/indent
	//[{ direction: 'rtl' }], // text direction

	// [
	// 	{
	// 		size: [
	// 			'10px',
	// 			'12px',
	// 			'14px',
	// 			'16px',
	// 			'18px',
	// 			'20px',
	// 			'24px',
	// 			'30px',
	// 			'32px',
	// 			'36px',
	// 			'48px',
	// 			'60px',
	// 			'72px',
	// 			'96px'
	// 		]
	// 	}
	// ], // custom dropdown ['small', false, 'large', 'huge']

	[{ color: [...colorArray] }], //, { background: [] }], // dropdown with defaults from theme
	//[{ font: [] }],
	[{ align: [] }]

	// ['clean'] // remove formatting button
];
