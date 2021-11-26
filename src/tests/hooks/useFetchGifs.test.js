import { renderHook } from '@testing-library/react-hooks';

import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {
  test('Debe retornar el estado inicial', async () => {
    // Para crear un componente virtual en donde utilizar nuestro custom hook (renderHook)
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch')); 
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(data.length).toBe(0);

    expect(loading).toEqual(true);
    expect(loading).toBeTruthy();
  });

  test('Debe retornar un arreglo de imgs y el loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch')); 
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toEqual(false);
  });
});