import './style.scss';

import { registerBlockType } from '@wordpress/blocks';

import edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType(metadata.name, {
  title: metadata.title,
  category: metadata.category,
  attributes: metadata.attributes,
  edit,
  save
});
