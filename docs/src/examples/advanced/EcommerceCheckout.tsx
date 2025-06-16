import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export const EcommerceCheckout: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 20,
    cursorStyle: 'bar',
    cursorColor: '#059669',
  });

  const [paymentStep, setPaymentStep] = useState('cart');
  const [cartTotal, setCartTotal] = useState(208.85);
  const [orderStatus, setOrderStatus] = useState('processing');

  const steps = ['cart', 'shipping', 'payment', 'confirmation'];

  useEffect(() => {
    typewriter
      .colorize('#059669')
      .type('🛒 E-COMMERCE CHECKOUT')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(500)
      .colorize('#3b82f6')
      .type('📦 CART ITEMS (4)')
      .colorize('#1f2937')
      .newLine()
      .colorize('#f3f4f6')
      .type('1. Wireless Headphones')
      .newLine()
      .colorize('#6b7280')
      .type(' Premium Audio | Noise Cancelling')
      .colorize('#059669')
      .type(' → $89.99')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .colorize('#f3f4f6')
      .type('2. Phone Case')
      .newLine()
      .colorize('#6b7280')
      .type(' Protective | Clear Design')
      .colorize('#059669')
      .type(' → $49.90')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .colorize('#f3f4f6')
      .type('3. USB-C Cable')
      .newLine()
      .colorize('#6b7280')
      .type(' Fast Charging | 6ft Length')
      .colorize('#059669')
      .type(' → $15.99')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .colorize('#f3f4f6')
      .type('4. Power Bank')
      .newLine()
      .colorize('#6b7280')
      .type(' 10,000mAh | Wireless Charging')
      .colorize('#059669')
      .type(' → $42.97')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#f59e0b')
      .type('💰 ORDER SUMMARY')
      .colorize('#1f2937')
      .newLine()
      .colorize('#6b7280')
      .type('Subtotal:')
      .colorize('#1f2937')
      .type(' $198.85')
      .newLine()
      .colorize('#6b7280')
      .type('Shipping (Express):')
      .colorize('#1f2937')
      .type(' $12.99')
      .newLine()
      .colorize('#6b7280')
      .type('Tax (8.5%):')
      .colorize('#1f2937')
      .type(' $16.90')
      .newLine()
      .colorize('#6b7280')
      .type('Discount (SAVE10):')
      .colorize('#22c55e')
      .type(' -$19.89')
      .colorize('#1f2937')
      .newLine()
      .type('─────────────────────────')
      .newLine()
      .colorize('#f59e0b')
      .type('TOTAL:')
      .colorize('#1f2937')
      .type(' ')
      .colorize('#059669')
      .type('$208.85')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#8b5cf6')
      .type('🏠 SHIPPING ADDRESS')
      .colorize('#1f2937')
      .newLine()
      .colorize('#6b7280')
      .type(' John Smith')
      .newLine()
      .type(' 123 Tech Street, Apt 4B')
      .newLine()
      .type(' San Francisco, CA 94105')
      .newLine()
      .type(' Phone: (555) 123-4567')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .colorize('#10b981')
      .type('🚚 DELIVERY OPTIONS')
      .colorize('#1f2937')
      .newLine()
      .colorize('#6b7280')
      .type(' Express Delivery (1-2 business days)')
      .newLine()
      .type(' Estimated Arrival: March 15, 2024')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .colorize('#dc2626')
      .type(`🔄 Status: ${orderStatus.toUpperCase()}`)
      .start();
  }, [paymentStep, cartTotal, orderStatus]);

  useEffect(() => {
    const interval = setInterval(() => {
      const steps = ['cart', 'shipping', 'payment', 'confirmation'];
      setPaymentStep(steps[Math.floor(Math.random() * steps.length)]);
      setCartTotal((prev) => Math.max(50, Math.min(500, prev + (Math.random() - 0.5) * 50)));
      const statuses = ['processing', 'completed', 'pending', 'failed'];
      setOrderStatus(statuses[Math.floor(Math.random() * statuses.length)]);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          backgroundColor: 'var(--ifm-background-surface-color)',
          borderRadius: '12px',
          padding: '2.5rem',
          fontFamily: 'system-ui, sans-serif',
          fontSize: '0.9rem',
          color: 'var(--ifm-color-content)',
          lineHeight: '1.6',
          minHeight: '500px',
          border: '1px solid var(--ifm-color-emphasis-200)',
          position: 'relative',
          boxShadow: '0 4px 12px var(--ifm-color-emphasis-200), 0 0 20px rgba(59, 130, 246, 0.1)',
        }}
      >
        <div style={{ whiteSpace: 'pre-line' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

export default EcommerceCheckout;
