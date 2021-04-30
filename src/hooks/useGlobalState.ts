import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

export function useGlobalState<T>(globalState: BehaviorSubject<T>) {

  const [state, setState] = useState<T>();

  useEffect(() => {

    const subscribe = globalState.subscribe(res => setState(res));

    return () => {
      subscribe.unsubscribe();
    }

  }, []);

  return { ...state };

}
