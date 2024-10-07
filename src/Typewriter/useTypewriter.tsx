import { useEffect, useMemo, useRef, useCallback } from 'react';
import TypewriterBase, { type TypewriterBaseOptions, type TypewriterBaseType } from './TypewriterBase';

export const useTypewriter = (
	options?: TypewriterBaseOptions,
): { ref: React.RefObject<HTMLDivElement>; typewriter: TypewriterBaseType } => {
	const ref = useRef<HTMLDivElement>(null);
	const typewriter = useMemo(() => TypewriterBase(), []);

	const configureTypewriter = useCallback(() => {
		if (!ref.current) {
			console.error('Element ref is not initialized!');
			return;
		}

		typewriter.configure(ref.current, options);
	}, [options, typewriter]);

	useEffect(() => {
		configureTypewriter();

		return () => {
			typewriter.unmount();
		};
	}, [configureTypewriter, typewriter]);

	return { ref, typewriter };
};
