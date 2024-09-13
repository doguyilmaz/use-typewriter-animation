import { useEffect, useMemo, useRef } from 'react';
import TypewriterBase, { type TypewriterBaseOptions, type TypewriterBaseType } from './TypewriterBase';

export const useTypewriter = (
	options?: TypewriterBaseOptions,
): { ref: React.RefObject<HTMLDivElement>; typewriter: TypewriterBaseType } => {
	const ref = useRef<HTMLDivElement>(null);
	const typewriter = useMemo(() => TypewriterBase(), []);

	useEffect(() => {
		if (!ref.current) {
			console.error('Element ref is not initialized!');
			return;
		}

		typewriter.configure(ref.current, options);

		return () => {
			typewriter.unmount();
		};
	}, [options, typewriter]);

	return { ref, typewriter };
};
