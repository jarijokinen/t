import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { buildOverlayStyle } from './buildOverlayStyle';

const SaveSection = ({ attributes }) => {
  const blockProps = useBlockProps.save();
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
    padding: `${attributes.padding} 0`,
    ...overlayStyle
  };
  return (
    <>
      <section {...blockProps} className="section" style={sectionStyle}>
        <div className="container">
          <InnerBlocks.Content />
        </div>
      </section>
    </>
  );
};

export default SaveSection;
