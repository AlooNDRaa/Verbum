import { CSSProperties } from 'react';
import { Span } from './animationgame';
import '../Styles/index.css';

interface NameanimateProps {
  style?: CSSProperties; // Permite pasar estilos personalizados
}

export function Nameanimate({ style }: NameanimateProps) {
  return (
    <>
      <section className="contpag bg-black h-screen text-white relative" style={style}>
        <Span />
      </section>
    </>
  );
}
