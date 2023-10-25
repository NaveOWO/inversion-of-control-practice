import { useCallback, useRef, useState } from "react";

interface UseControlledProps<T = unknown> {
  value?: T;
}

type UseControlledReturn<T = any> = [
  T,
  React.Dispatch<React.SetStateAction<T>>
];

export function useControlled<T = any>(
  props: UseControlledProps<T> = {}
): UseControlledReturn {
  const { value } = props;

  const { current: isControlled } = useRef(value !== undefined);

  const [state, setState] = useState<T>();

  const innerValue = isControlled ? value : state;
  const setValue: React.Dispatch<React.SetStateAction<T | undefined>> =
    useCallback((newState) => {
      !isControlled && setState(newState);
    }, []);

  return [innerValue, setValue];
}
