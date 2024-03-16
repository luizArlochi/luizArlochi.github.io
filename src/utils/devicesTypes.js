import { useMediaQuery } from 'react-responsive';

export function DevicesTypes() {
  // Notebook Maior
  const is1665px = useMediaQuery({ query: '(max-width: 1678px)' });

  // Notebook Medio
  const is1595px = useMediaQuery({ query: '(max-width: 1595px)' });

  // Notebook Medio
  const is1541px = useMediaQuery({ query: '(max-width: 1541px)' });

  // Notebook Medio
  const is1461px = useMediaQuery({ query: '(max-width: 1461px)' });

  // Notebook Medio
  const is1421px = useMediaQuery({ query: '(max-width: 1421px)' });

  // Notebook Menor
  const is1341px = useMediaQuery({ query: '(max-width: 1341px)' });

  // Notebook Menor
  const is1301px = useMediaQuery({ query: '(max-width: 1301px)' });

  // Notebook Menor
  const is1281px = useMediaQuery({ query: '(max-width: 1281px)' });

  // Notebook Menor
  const is1241px = useMediaQuery({ query: '(max-width: 1241px)' });

  // Notebook Menor
  const is1181px = useMediaQuery({ query: '(max-width: 1181px)' });

  // iPad (~768px)
  const is768px = useMediaQuery({ query: '(max-width: 768px)' });

  // iPhone 6/7/8 Plus (~414px)
  const is414px = useMediaQuery({ query: '(max-width: 415px)' });

  // iPhone X e iPhone 6/7/8 (~375px)
  const is375px = useMediaQuery({ query: '(max-width: 376px)' });

  // Galaxy S5 (~360px)
  const is360px = useMediaQuery({ query: '(max-width: 361px)' });
}
