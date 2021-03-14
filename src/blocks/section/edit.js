import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  PanelColorSettings,
  useBlockProps
} from '@wordpress/block-editor';
import { Button, PanelBody, RangeControl } from '@wordpress/components';

import { buildOverlayStyle } from './buildOverlayStyle';

const EditSection = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();
  const sectionStyle = {
    backgroundColor: attributes.backgroundColor,
    backgroundImage: `url('${attributes.backgroundImage}')`
  };
  const overlayStyle = buildOverlayStyle(
    attributes.overlayColor,
    attributes.overlayOpacity
  );

  const inspectorControls = (
    <InspectorControls>
      <PanelBody title="Background">
        <MediaUploadCheck>
          <MediaUpload
            allowedTypes={['image']}
            onSelect={(media) => setAttributes({ backgroundImage: media.url })}
            render={({ open }) => <Button onClick={open}>Change Image</Button>}
          />
        </MediaUploadCheck>
        <PanelColorSettings
          title="Color Settings"
          colorSettings={[
            {
              value: attributes.backgroundColor,
              onChange: (val) => setAttributes({ backgroundColor: val }),
              label: 'Background Color'
            },
            {
              value: attributes.overlayColor,
              onChange: (val) => setAttributes({ overlayColor: val }),
              label: 'Overlay Color'
            }
          ]}
        />
        <RangeControl
          label="Overlay Opacity"
          value={attributes.overlayOpacity}
          onChange={(val) => setAttributes({ overlayOpacity: val })}
          min={0}
          max={100}
          step={5}
        />
      </PanelBody>
    </InspectorControls>
  );
  return (
    <>
      {inspectorControls}
      <section {...blockProps} className="section" style={sectionStyle}>
        <div className="overlay" style={overlayStyle}>
          <div className="container">
            <InnerBlocks />
          </div>
        </div>
      </section>
    </>
  );
};

export default EditSection;
