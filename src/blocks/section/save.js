import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { buildOverlayStyle } from './buildOverlayStyle';

const SaveSection = ({ attributes }) => {
  const blockProps = useBlockProps.save();
  const sectionStyle = {
    backgroundColor: attributes.backgroundColor,
    backgroundImage: attributes.backgroundImage
      ? `url('${attributes.backgroundImage}')`
      : null
  };
  const overlayStyle = buildOverlayStyle(
    attributes.overlayColor,
    attributes.overlayOpacity
  );
  return (
    <>
      <section {...blockProps} className="section" style={sectionStyle}>
        <div className="overlay" style={overlayStyle}>
          <div className="container">
            <InnerBlocks.Content />
          </div>
        </div>
      </section>
    </>
  );
};

export default SaveSection;
