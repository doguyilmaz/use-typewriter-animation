# E-commerce Checkout Demo

This example simulates a complete e-commerce checkout process with order processing, payment validation, and transaction confirmation.

## Live Demo

```tsx live
function EcommerceCheckoutDemo() {
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [orderTotal, setOrderTotal] = useState(127.99);
  
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 50,
    cursorStyle: 'block',
    cursorColor: '#059669',
  });

  useEffect(() => {
    typewriter
      .colorize('#059669')
      .type('🛒 E-COMMERCE CHECKOUT 🛒')
      .colorize('#374151')
      .newLine()
      .type('══════════════════════════════════════════')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#3b82f6')
      .type('📦 Order Summary:')
      .colorize('#374151')
      .newLine()
      .newLine()
      .type('🎧 Wireless Headphones Pro    ')
      .colorize('#6b7280')
      .type('x1')
      .colorize('#374151')
      .type('     ')
      .colorize('#059669')
      .type('$89.99')
      .colorize('#374151')
      .newLine()
      .type('📱 Phone Case Premium         ')
      .colorize('#6b7280')
      .type('x2')
      .colorize('#374151')
      .type('     ')
      .colorize('#059669')
      .type('$24.99')
      .colorize('#374151')
      .newLine()
      .type('⚡ Fast Charging Cable        ')
      .colorize('#6b7280')
      .type('x1')
      .colorize('#374151')
      .type('     ')
      .colorize('#059669')
      .type('$12.99')
      .colorize('#374151')
      .newLine()
      .newLine()
      .colorize('#6b7280')
      .type('Subtotal:                              ')
      .colorize('#374151')
      .type('$127.97')
      .newLine()
      .colorize('#6b7280')
      .type('Shipping (Express):                    ')
      .colorize('#374151')
      .type('$9.99')
      .newLine()
      .colorize('#6b7280')
      .type('Tax (8.5%):                            ')
      .colorize('#374151')
      .type('$11.73')
      .newLine()
      .colorize('#f59e0b')
      .type('Discount (SAVE15):                    ')
      .colorize('#ef4444')
      .type('-$22.35')
      .colorize('#374151')
      .newLine()
      .type('────────────────────────────────────────')
      .newLine()
      .colorize('#059669')
      .type('TOTAL:                               $127.34')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#8b5cf6')
      .type('🚚 Shipping Information:')
      .colorize('#374151')
      .newLine()
      .newLine()
      .colorize('#3b82f6')
      .type('📍 Delivery Address:')
      .colorize('#374151')
      .newLine()
      .type('John Smith')
      .newLine()
      .type('123 Tech Street, Apt 4B')
      .newLine()
      .type('San Francisco, CA 94105')
      .newLine()
      .type('United States')
      .newLine()
      .newLine()
      .colorize('#f59e0b')
      .type('📅 Estimated Delivery: ')
      .colorize('#374151')
      .type('Tomorrow, Dec 15')
      .newLine()
      .colorize('#10b981')
      .type('🚀 Express Shipping Selected')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#dc2626')
      .type('💳 Payment Processing:')
      .colorize('#374151')
      .newLine()
      .newLine()
      .colorize('#6b7280')
      .type('Payment Method: ')
      .colorize('#374151')
      .type('Visa ****-1234')
      .newLine()
      .colorize('#6b7280')
      .type('Cardholder: ')
      .colorize('#374151')
      .type('John Smith')
      .newLine()
      .colorize('#6b7280')
      .type('Security: ')
      .colorize('#10b981')
      .type('✅ 3D Secure Verified')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#fbbf24')
      .type('🔄 Processing payment...')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1500)
      .colorize('#6b7280')
      .type('Step 1: ')
      .colorize('#374151')
      .type('Validating card details... ')
      .colorize('#10b981')
      .type('✅ Valid')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('Step 2: ')
      .colorize('#374151')
      .type('Checking available funds... ')
      .colorize('#10b981')
      .type('✅ Approved')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('Step 3: ')
      .colorize('#374151')
      .type('Processing transaction... ')
      .colorize('#10b981')
      .type('✅ Complete')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('Step 4: ')
      .colorize('#374151')
      .type('Updating inventory... ')
      .colorize('#10b981')
      .type('✅ Updated')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#10b981')
      .type('🎉 ORDER CONFIRMED! 🎉')
      .colorize('#374151')
      .newLine()
      .newLine()
      .colorize('#059669')
      .type('Order ID: ')
      .colorize('#374151')
      .type('#ORD-2024-789456')
      .newLine()
      .colorize('#059669')
      .type('Transaction ID: ')
      .colorize('#374151')
      .type('TXN-987654321')
      .newLine()
      .colorize('#059669')
      .type('Confirmation: ')
      .colorize('#374151')
      .type('Check your email for receipt')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#3b82f6')
      .type('📧 Email Notifications:')
      .colorize('#374151')
      .newLine()
      .colorize('#10b981')
      .type('✅ ')
      .colorize('#374151')
      .type('Order confirmation sent')
      .newLine()
      .colorize('#10b981')
      .type('✅ ')
      .colorize('#374151')
      .type('Payment receipt sent')
      .newLine()
      .colorize('#10b981')
      .type('✅ ')
      .colorize('#374151')
      .type('Shipping notification will follow')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#8b5cf6')
      .type('📱 Next Steps:')
      .colorize('#374151')
      .newLine()
      .type('• Track your order with Order ID')
      .newLine()
      .type('• Download invoice from your account')
      .newLine()
      .type('• Rate your purchase experience')
      .newLine()
      .type('• Follow us for exclusive deals!')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#f59e0b')
      .type('💝 Special Offer:')
      .colorize('#374151')
      .newLine()
      .colorize('#dc2626')
      .type('Use code NEXT20 for 20% off your next order!')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('Valid until Dec 31, 2024')
      .start();
  }, []);

  // Simulate checkout progress
  useEffect(() => {
    const steps = [1, 2, 3, 4, 5];
    const methods = ['Credit Card', 'PayPal', 'Apple Pay', 'Google Pay'];
    const totals = [127.99, 89.45, 156.78, 203.21, 67.89];
    
    const interval = setInterval(() => {
      setCheckoutStep(steps[Math.floor(Math.random() * steps.length)]);
      setPaymentMethod(methods[Math.floor(Math.random() * methods.length)]);
      setOrderTotal(totals[Math.floor(Math.random() * totals.length)]);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {keyframes}
        {`
          @keyframes checkout-pulse {
            0%, 100% { box-shadow: 0 0 20px rgba(5, 150, 105, 0.3); }
            50% { box-shadow: 0 0 40px rgba(5, 150, 105, 0.6); }
          }
          
          @keyframes step-progress {
            0% { width: 0%; }
            100% { width: var(--progress-width); }
          }
          
          @keyframes secure-scan {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }
          
          .checkout-container {
            animation: checkout-pulse 4s ease-in-out infinite;
          }
          
          .progress-step {
            animation: step-progress 2s ease-out;
          }
          
          .security-badge {
            animation: secure-scan 2s ease-in-out infinite;
          }
        `}
      </style>
      <div
        className="checkout-container"
        style={{
          fontFamily: '"SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif',
          fontSize: '0.9rem',
          lineHeight: '1.5',
          padding: '2.5rem',
          backgroundColor: '#ffffff',
          border: '2px solid #059669',
          borderRadius: '20px',
          minHeight: '500px',
          position: 'relative',
          background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: '#f9fafb',
            padding: '8px 16px',
            borderRadius: '20px',
            border: '1px solid #e5e7eb',
          }}
        >
          <div
            style={{
              fontSize: '1.2rem',
            }}
          >
            {checkoutStep === 5 ? '🎉' : checkoutStep >= 4 ? '💳' : checkoutStep >= 3 ? '🚚' : checkoutStep >= 2 ? '🛒' : '📋'}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '0.7rem', color: '#6b7280' }}>Step</span>
            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#059669' }}>
              {checkoutStep}/5
            </span>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            top: '70px',
            right: '20px',
            backgroundColor: '#059669',
            color: 'white',
            padding: '6px 12px',
            borderRadius: '12px',
            fontSize: '0.75rem',
            fontWeight: '600',
          }}
        >
          {paymentMethod}
        </div>

        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '4px',
            backgroundColor: '#e5e7eb',
            borderRadius: '2px 2px 0 0',
            overflow: 'hidden',
          }}
        >
          <div
            className="progress-step"
            style={{
              height: '100%',
              backgroundColor: '#059669',
              width: `${(checkoutStep / 5) * 100}%`,
            }}
          />
        </div>

        <div
          className="security-badge"
          style={{
            position: 'absolute',
            top: '12px',
            left: '16px',
            fontSize: '0.7rem',
            color: '#059669',
            backgroundColor: 'rgba(5, 150, 105, 0.1)',
            padding: '4px 8px',
            borderRadius: '6px',
            fontWeight: '600',
          }}
        >
          🔒 SSL SECURED
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            right: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '12px 16px',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#059669' }}>
              ${orderTotal.toFixed(2)}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>
              3 items • Express shipping
            </span>
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            <div style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%' }} />
            <div style={{ width: '8px', height: '8px', backgroundColor: '#f59e0b', borderRadius: '50%' }} />
            <div style={{ width: '8px', height: '8px', backgroundColor: '#3b82f6', borderRadius: '50%' }} />
          </div>
        </div>

        <div style={{ color: '#374151', whiteSpace: 'pre-wrap', marginTop: '1rem' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
}
```

## Key Features

- **Complete Checkout Flow**: Order summary through payment confirmation
- **Real-time Processing**: Step-by-step payment processing simulation
- **Security Features**: SSL encryption and 3D Secure verification
- **Order Management**: Order IDs, tracking, and confirmation system
- **Payment Integration**: Multiple payment methods and validation
- **Email Notifications**: Automated confirmation and receipt system
- **Customer Experience**: Professional e-commerce interface design

## E-commerce Elements

1. **Order Summary**: Product details, pricing, taxes, and discounts
2. **Shipping Information**: Address verification and delivery options
3. **Payment Processing**: Secure payment validation and transaction handling
4. **Order Confirmation**: Transaction IDs and confirmation details
5. **Customer Communications**: Email notifications and next steps
6. **Marketing Integration**: Promotional offers and customer retention

## Interactive Features

- **Progress Tracking**: Visual checkout step progression
- **Dynamic Totals**: Real-time order value updates
- **Payment Methods**: Multiple payment option simulation
- **Security Indicators**: SSL and encryption status displays
- **Animated Processing**: Visual feedback during payment processing

## Professional Standards

- **Security Compliance**: Industry-standard security practices
- **User Experience**: Intuitive checkout flow design
- **Payment Security**: 3D Secure and fraud protection
- **Order Management**: Complete transaction lifecycle
- **Customer Service**: Clear communication and support

## Use Cases

- **E-commerce Platforms**: Online store checkout process demonstration
- **Payment Processors**: Payment gateway integration showcases
- **UX/UI Design**: Checkout experience design and optimization
- **Security Training**: Payment security and compliance education
- **Business Development**: E-commerce solution presentations