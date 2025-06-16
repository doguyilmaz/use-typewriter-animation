import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export const CodeReviewSimulator: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 30,
    cursorStyle: 'bar',
    cursorColor: '#dc2626',
  });

  const [reviewStatus, setReviewStatus] = useState('in-progress');
  const [approvalCount, setApprovalCount] = useState(2);
  const [commentsCount, setCommentsCount] = useState(5);

  const statuses = ['in-progress', 'approved', 'changes-requested', 'pending'];

  useEffect(() => {
    typewriter
      .colorize('#dc2626')
      .type('🔍 CODE REVIEW - PR #247')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(500)
      .colorize('#3b82f6')
      .type('Title: ')
      .colorize('#374151')
      .type('Add user authentication system')
      .newLine()
      .colorize('#3b82f6')
      .type('Author: ')
      .colorize('#374151')
      .type('@sarah-dev')
      .newLine()
      .colorize('#3b82f6')
      .type('Branch: ')
      .colorize('#374151')
      .type('feature/auth-system → main')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#f59e0b')
      .type('📋 REVIEW STATUS')
      .colorize('#1f2937')
      .newLine()
      .colorize(reviewStatus === 'approved' ? '#10b981' : 
                reviewStatus === 'changes-requested' ? '#dc2626' : '#6b7280')
      .type(`Status: ${reviewStatus.replace('-', ' ').toUpperCase()}`)
      .colorize('#1f2937')
      .newLine()
      .colorize('#10b981')
      .type(`Approvals: ${approvalCount}/3`)
      .colorize('#1f2937')
      .newLine()
      .colorize('#f59e0b')
      .type(`Comments: ${commentsCount}`)
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(600)
      .colorize('#8b5cf6')
      .type('📝 RECENT COMMENTS')
      .colorize('#1f2937')
      .newLine()
      .colorize('#6b7280')
      .type('• @mike-lead: LGTM! Great work on the validation')
      .newLine()
      .type('• @jane-security: Please add rate limiting')
      .newLine()
      .type('• @alex-qa: Tests look comprehensive 👍')
      .start();
  }, [reviewStatus, approvalCount, commentsCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      setReviewStatus(statuses[Math.floor(Math.random() * statuses.length)]);
      setApprovalCount(Math.floor(Math.random() * 4)); 
      setCommentsCount(Math.floor(Math.random() * 8) + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          backgroundColor: 'var(--ifm-background-surface-color)',
          borderRadius: '16px',
          padding: '2.5rem',
          fontFamily: 'system-ui, sans-serif',
          fontSize: '0.9rem',
          color: 'var(--ifm-color-content)',
          lineHeight: '1.6',
          minHeight: '400px',
          border: '2px solid var(--ifm-color-danger)',
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

export default CodeReviewSimulator;