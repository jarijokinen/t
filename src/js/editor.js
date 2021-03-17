import '../css/editor.scss';

import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { compose } from '@wordpress/compose';
import { withDispatch, withSelect } from '@wordpress/data';
import { PanelBody, ToggleControl } from '@wordpress/components';

const MetaField = compose(
  withDispatch((dispatch, props) => {
    return {
      setMetaFieldValue: (val) => {
        dispatch('core/editor').editPost({ meta: { [props.fieldName]: val } });
      }
    };
  }),
  withSelect((select, props) => {
    return {
      metaFieldValue: select('core/editor').getEditedPostAttribute('meta')[
        props.fieldName
      ]
    };
  })
)((props) => (
  <ToggleControl
    label="Integrated Header"
    checked={props.metaFieldValue}
    onChange={(val) => props.setMetaFieldValue(val)}
  />
));

const IntegratedHeaderDocumentSettingPanel = () => (
  <PluginDocumentSettingPanel name="t-theme-settings" title="Theme Settings">
    <MetaField fieldName="t_integrated_header" />
  </PluginDocumentSettingPanel>
);

registerPlugin('t-integrated-header-document-setting-panel', {
  render: IntegratedHeaderDocumentSettingPanel
});
