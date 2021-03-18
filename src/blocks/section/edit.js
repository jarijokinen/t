import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  PanelColorSettings,
  useBlockProps
} from '@wordpress/block-editor';
import {
  Button,
  PanelBody,
  RangeControl,
  TextControl
} from '@wordpress/components';

import { buildOverlayStyle } from './buildOverlayStyle';

const EditSection = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();
  const overlayStyle = buildOverlayStyle(
    attributes.overlayColor,
    attributes.overlayOpacity
  );
  const sectionStyle = {
    backgroundColor: attributes.backgroundImage
      ? null
      : attributes.backgroundColor,
    backgroundImage: attributes.backgroundImage
      ? `url('${attributes.backgroundImage}')`
      : null,
    color: attributes.textColor,
    minHeight: attributes.minimumHeight,
    ...overlayStyle
  };

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
              value: attributes.textColor,
              onChange: (val) => setAttributes({ textColor: val }),
              label: 'Text Color'
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
        <TextControl
          label="Minimum Height"
          value={attributes.minimumHeight}
          onChange={(val) => setAttributes({ minimumHeight: val })}
        />
      </PanelBody>
    </InspectorControls>
  );
  return (
    <>
      {inspectorControls}
      <section {...blockProps} className="section" style={sectionStyle}>
        <div className="container">
          <InnerBlocks />
        </div>
      </section>
    </>
  );
};

export default EditSection;
