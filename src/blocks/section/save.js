import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const SaveSection = ({ attributes }) => {
  const blockProps = useBlockProps.save();
  const sectionStyle = {
    backgroundColor: attributes.backgroundColor,
    backgroundImage: `url('${attributes.backgroundImage}')`
  };
  const overlayStyle = {
    backgroundColor: `rgba(0, 0, 0, ${
      parseInt(attributes.overlayOpacity, 10) / 100
    }`
  };
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
