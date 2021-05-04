import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import './style.scss';

export default function Edit( { attributes, setAttributes } ) {

	function fetchProfile() {
		fetch(`https://api.github.com/users/${attributes.user}`)
		.then( response => response.json() )
		.then( ( data ) => setAttributes( { profile: data } ) );
	}

	if ( attributes.profile ) {
		const { avatar_url, name, html_url, bio, location } = attributes.profile;

		return (
			<div { ...useBlockProps.save() } className="github-profile">
				<img src={ avatar_url } alt={name} />
				<div>
					<h3>{name}</h3>
					<small>{location}</small>
					<p>{bio}</p>
				</div>
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
