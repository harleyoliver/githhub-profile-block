import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {

	const { avatar_url, name, html_url, bio, location } = attributes.profile

	return <div { ...useBlockProps.save() }>
		<img src={ avatar_url } alt={name} />
		<div>
			<h3>
				<a href={html_url} rel="nofollow noreferrer">{name}</a>
			</h3>
			<small>{location}</small>
			<p>{bio}</p>
		</div>
	</div>;
}