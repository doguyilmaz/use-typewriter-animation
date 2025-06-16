import React from 'react';

export const PlaceholderComponent: React.FC = () => {
  return (
    <div
      style={{
        padding: '2rem',
        backgroundColor: 'var(--ifm-color-emphasis-100)',
        border: '2px dashed var(--ifm-color-emphasis-300)',
        borderRadius: '8px',
        textAlign: 'center',
        color: 'var(--ifm-color-content-secondary)',
      }}
    >
      <h3>🚧 Component Under Construction</h3>
      <p>This example is being migrated to the new organized structure.</p>
      <p>Check back soon for the updated component!</p>
    </div>
  );
};

export default PlaceholderComponent;
