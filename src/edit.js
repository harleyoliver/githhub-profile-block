import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

	function fetchProfile() {
		fetch(`https://api.github.com/users/${attributes.user}`)
		.then( response => response.json() )
		.then( ( data ) => setAttributes( { profile: data } ) );
	}

	if ( attributes.profile ) {
		return (
			<div { ...useBlockProps() }>
				<p>Github Profile: {attributes.profile.name}</p>
			</div>
		)
	} else {
		return (
			<div { ...useBlockProps() }>
				<TextControl
					label={ __( 'GitHub Username', 'github-profile' ) }
					value={ attributes.user }
					onChange={
						( val ) => setAttributes( { user: val } )
					}
				/>
				<button onClick={ fetchProfile }>Fetch Profile</button>
			</div>
		);
	}
}
