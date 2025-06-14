---
sidebar_position: 1
title: E-commerce Checkout
description: Interactive e-commerce checkout process with payment and order confirmation
tags: [ecommerce, checkout, payment, shopping, cart]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { EcommerceCheckoutExample } from '@site/src/components/AdvancedExamples';

<ExamplePage
component={EcommerceCheckoutExample}
difficulty="Intermediate"
description="Build a complete e-commerce checkout experience with shopping cart management, payment processing, and order confirmation. Perfect for online stores, marketplace platforms, and retail applications."
tags={["E-commerce", "Shopping cart", "Payment processing", "Order management", "Retail interface"]}
code={`import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const EcommerceCheckoutExample: React.FC = () => {
const [cartTotal, setCartTotal] = useState(247.85);
const [paymentStep, setPaymentStep] = useState('cart');
const [orderStatus, setOrderStatus] = useState('processing');

const { typewriter, elements, cursor, keyframes } = useTypewriter({
typeSpeed: 28,
cursorStyle: 'block',
cursorColor: '#059669',
});

const cartItems = [
{ name: 'Wireless Headphones', price: 89.99, qty: 1 },
{ name: 'Smartphone Case', price: 24.95, qty: 2 },
{ name: 'USB-C Cable', price: 15.99, qty: 1 },
{ name: 'Portable Charger', price: 42.97, qty: 1 },
];

useEffect(() => {
typewriter
.colorize('#059669')
.type('🛒 E-COMMERCE CHECKOUT SYSTEM 🛒')
.colorize('#1f2937')
.newLine()
.type('════════════════════════════════════════════════')
.newLine()
.newLine()
.pauseFor(600)
.colorize('#3b82f6')
.type('🛍️ Shopping Cart Review:')
.colorize('#1f2937')
.newLine()
.colorize('#6b7280')
.type('Order #EC-2024-7851 | Session: 847293')
.colorize('#1f2937')
.newLine()
.type('──────────────────────────────────────────────')
.newLine()
.newLine()
.pauseFor(800)
.colorize('#10b981')
.type('📱 Wireless Headphones')
.colorize('#6b7280')
.type(' x1')
.colorize('#1f2937')
.newLine()
.colorize('#6b7280')
.type(' Premium Audio | Noise Cancelling')
.colorize('#059669')
.type(' → $89.99')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(400)
.colorize('#8b5cf6')
.type('📱 Smartphone Case')
.colorize('#6b7280')
.type(' x2')
.colorize('#1f2937')
.newLine()
.colorize('#6b7280')
.type(' Protective | Clear Design')
.colorize('#059669')
.type(' → $49.90')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(400)
.colorize('#f59e0b')
.type('🔌 USB-C Cable')
.colorize('#6b7280')
.type(' x1')
.colorize('#1f2937')
.newLine()
.colorize('#6b7280')
.type(' Fast Charging | 6ft Length')
.colorize('#059669')
.type(' → $15.99')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(400)
.colorize('#ec4899')
.type('🔋 Portable Charger')
.colorize('#6b7280')
.type(' x1')
.colorize('#1f2937')
.newLine()
.colorize('#6b7280')
.type(' 10,000mAh | Wireless Charging')
.colorize('#059669')
.type(' → $42.97')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(1000)
.colorize('#fbbf24')
.type('💰 Order Summary:')
.colorize('#1f2937')
.newLine()
.type('──────────────────────────────────────────────')
.newLine()
.pauseFor(400)
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
.type('──────────────────────────────────────────────')
.newLine()
.colorize('#059669')
.type('TOTAL:')
.colorize('#1f2937')
.type(' ')
.colorize('#059669')
.type('$208.85')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(1200)
.colorize('#3b82f6')
.type('📦 Shipping Information:')
.colorize('#1f2937')
.newLine()
.type('──────────────────────────────────────────────')
.newLine()
.pauseFor(600)
.colorize('#10b981')
.type('📍 Delivery Address:')
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
.pauseFor(600)
.colorize('#8b5cf6')
.type('🚚 Shipping Method:')
.colorize('#1f2937')
.newLine()
.colorize('#6b7280')
.type(' Express Delivery (1-2 business days)')
.newLine()
.type(' Estimated Arrival: March 15, 2024')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(1000)
.colorize('#f59e0b')
.type('💳 Payment Processing:')
.colorize('#1f2937')
.newLine()
.type('──────────────────────────────────────────────')
.newLine()
.pauseFor(800)
.colorize('#6b7280')
.type('🔒 Secure Payment Gateway Initialized...')
.colorize('#1f2937')
.newLine()
.pauseFor(1000)
.colorize('#10b981')
.type('✅ Payment Method: ')
.colorize('#1f2937')
.type('Visa ending in 4567')
.newLine()
.colorize('#10b981')
.type('✅ Billing Address: ')
.colorize('#1f2937')
.type('Same as shipping')
.newLine()
.colorize('#10b981')
.type('✅ Security Check: ')
.colorize('#1f2937')
.type('Verified')
.newLine()
.newLine()
.pauseFor(1500)
.colorize('#8b5cf6')
.type('⏳ Processing payment...')
.pauseFor(2000)
.deleteLine()
.colorize('#22c55e')
.type('✅ Payment Successful!')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(800)
.colorize('#059669')
.type('🎉 Order Confirmation:')
.colorize('#1f2937')
.newLine()
.type('──────────────────────────────────────────────')
.newLine()
.pauseFor(600)
.colorize('#22c55e')
.type('🎯 Order Placed Successfully!')
.colorize('#1f2937')
.newLine()
.colorize('#6b7280')
.type('Order Number: #EC-2024-7851')
.newLine()
.type('Confirmation Email: Sent to john@example.com')
.newLine()
.type('Transaction ID: TXN-9876543210')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(800)
.colorize('#3b82f6')
.type('📱 Next Steps:')
.colorize('#1f2937')
.newLine()
.colorize('#10b981')
.type('• ')
.colorize('#1f2937')
.type('Track your order online or via mobile app')
.newLine()
.colorize('#10b981')
.type('• ')
.colorize('#1f2937')
.type('Prepare for delivery on March 15, 2024')
.newLine()
.colorize('#10b981')
.type('• ')
.colorize('#1f2937')
.type('Rate your experience after delivery')
.newLine()
.newLine()
.pauseFor(1000)
.colorize('#059669')
.type('🙏 Thank you for your purchase!')
.start();
}, []);

// Simulate checkout progress
useEffect(() => {
const interval = setInterval(() => {
const steps = ['cart', 'shipping', 'payment', 'confirmation'];
setPaymentStep(steps[Math.floor(Math.random() * steps.length)]);
setCartTotal(prev => Math.max(50, Math.min(500, prev + (Math.random() - 0.5) _ 50)));
const statuses = ['processing', 'completed', 'pending', 'failed'];
setOrderStatus(statuses[Math.floor(Math.random() _ statuses.length)]);
}, 3500);

    return () => clearInterval(interval);

}, []);

return (
<>

<style>
{keyframes}
{\`
@keyframes checkout-pulse {
0%, 100% { opacity: 1; }
50% { opacity: 0.8; }
}

          @keyframes price-update {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }

          @keyframes secure-badge {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-2deg); }
            75% { transform: rotate(2deg); }
          }

          @keyframes progress-bar {
            0% { width: 0%; }
            100% { width: var(--progress-width); }
          }

          .checkout-indicator {
            animation: checkout-pulse 2s infinite;
          }

          .price-highlight {
            animation: price-update 2s ease-in-out infinite;
          }

          .secure-payment {
            animation: secure-badge 3s ease-in-out infinite;
          }

          .progress-step {
            animation: progress-bar 1s ease-out;
          }
        \`}
      </style>

      <div
        style={{
          backgroundColor: '#f8fafc',
          borderRadius: '16px',
          padding: '2.5rem',
          fontFamily: 'system-ui, sans-serif',
          fontSize: '0.9rem',
          color: '#1f2937',
          lineHeight: '1.6',
          minHeight: '500px',
          border: '2px solid #059669',
          position: 'relative',
          background: 'linear-gradient(135deg, #f8fafc 0%, #ecfdf5 100%)',
        }}
      >
        {/* Progress indicator */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            right: '1rem',
            height: '4px',
            backgroundColor: '#e5e7eb',
            borderRadius: '2px',
            overflow: 'hidden',
          }}
        >
          <div
            className="progress-step"
            style={{
              height: '100%',
              backgroundColor: '#059669',
              width:
                paymentStep === 'cart' ? '25%' :
                paymentStep === 'shipping' ? '50%' :
                paymentStep === 'payment' ? '75%' :
                '100%',
              transition: 'width 0.5s ease',
            }}
          />
        </div>

        {/* Current step indicator */}
        <div
          style={{
            position: 'absolute',
            top: '2rem',
            right: '1rem',
            backgroundColor: 'rgba(5, 150, 105, 0.1)',
            padding: '8px 12px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            color: '#059669',
            fontWeight: '600',
          }}
          className="checkout-indicator"
        >
          Step: {paymentStep.toUpperCase()}
        </div>

        {/* Cart total */}
        <div
          style={{
            position: 'absolute',
            top: '2rem',
            left: '1rem',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            padding: '8px 12px',
            borderRadius: '12px',
            fontSize: '0.8rem',
            color: '#3b82f6',
            fontWeight: '600',
          }}
          className="price-highlight"
        >
          💰 \${cartTotal.toFixed(2)}
        </div>

        {/* Secure payment badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(34, 197, 94, 0.1)',
            padding: '8px 12px',
            borderRadius: '12px',
            fontSize: '0.8rem',
            color: '#22c55e',
          }}
          className="secure-payment"
        >
          🔒 Secure Checkout
        </div>

        {/* Order status */}
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor:
              orderStatus === 'completed' ? 'rgba(34, 197, 94, 0.1)' :
              orderStatus === 'failed' ? 'rgba(239, 68, 68, 0.1)' :
              orderStatus === 'pending' ? 'rgba(251, 191, 36, 0.1)' :
              'rgba(59, 130, 246, 0.1)',
            padding: '8px 12px',
            borderRadius: '12px',
            fontSize: '0.8rem',
            color:
              orderStatus === 'completed' ? '#22c55e' :
              orderStatus === 'failed' ? '#ef4444' :
              orderStatus === 'pending' ? '#fbbf24' :
              '#3b82f6',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'currentColor',
            }}
          />
          <span>
            {orderStatus === 'completed' ? 'Order Complete' :
             orderStatus === 'failed' ? 'Payment Failed' :
             orderStatus === 'pending' ? 'Payment Pending' :
             'Processing Order'}
          </span>
        </div>

        {/* Items counter */}
        <div
          style={{
            position: 'absolute',
            top: '4.5rem',
            right: '1rem',
            fontSize: '0.7rem',
            color: '#6b7280',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '4px 8px',
            borderRadius: '8px',
          }}
        >
          4 items in cart
        </div>

        {/* Main content */}
        <div style={{ whiteSpace: 'pre-line', paddingTop: '3rem' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>

);
};

export default EcommerceCheckoutExample;`}
instructions={[
"Build complete e-commerce checkout flow with cart review and item management",
"Implement secure payment processing with multiple payment methods and validation",
"Add comprehensive order summary with taxes, shipping, and discount calculations",
"Include shipping address management and delivery option selection",
"Design professional checkout interface with progress tracking and confirmation"
]}
/>

## Use Cases

- **Online Retail**: E-commerce websites and marketplace checkout systems
- **Subscription Services**: Recurring payment setup and subscription management
- **Digital Products**: Software licenses, courses, and downloadable content sales
- **Marketplace Platforms**: Multi-vendor checkout with split payments and commissions
- **Mobile Commerce**: Responsive checkout flows for mobile shopping applications
