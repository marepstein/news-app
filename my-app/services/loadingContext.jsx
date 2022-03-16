import { createContext } from 'react';

const LoadingContext = createContext({
    loading: false,
    showLoading: () => {},
    closeLoading: () => {}
});

export default LoadingContext;
