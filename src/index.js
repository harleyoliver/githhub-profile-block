import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType( 'create-block/github-profile', {
    attributes: {
        user: {
            type: 'string',
            source: 'text',
            selector: 'div',
            default: '',
        },
        profile: {
            type: 'object',
            default: '',
        }
    },
	edit: Edit,
	save,
} );
