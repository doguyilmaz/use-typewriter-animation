import { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const GREETINGS = { English: 'Hello, friend', Spanish: 'Hola, amigo', French: 'Bonjour, ami' };
type Language = keyof typeof GREETINGS;

export default function RetypeOnChange() {
  const [language, setLanguage] = useState<Language>('English');
  const { typewriter, elements, cursor } = useTypewriter({ typeSpeed: 50, deleteSpeed: 30 });

  useEffect(() => {
    typewriter.stop();
    typewriter.typeTo(GREETINGS[language]).start();
  }, [typewriter, language]);

  return (
    <>
      <p>
        {elements}
        {cursor}
      </p>
      <div>
        {Object.keys(GREETINGS).map((name) => (
          <button key={name} type='button' onClick={() => setLanguage(name as Language)}>
            {name}
          </button>
        ))}
      </div>
    </>
  );
}
